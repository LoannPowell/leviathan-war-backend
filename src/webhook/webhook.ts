//@ts-nocheck 
import Elysia, { t } from "elysia";
import prisma from "../prisma/prismaClient";
import { createUser } from "../user/services";
import { errorHandler } from "../utilities/error";
import crypto from 'crypto';

export const webhookRouter = new Elysia({ prefix: '/webhook' })
  .onParse(async ({ request, headers }) => {
    if (headers['content-type'] === 'application/json; charset=utf-8') {
      const chunks = [];
      for await (const chunk of request.body) {
        chunks.push(chunk);
      }
      const rawBody = Buffer.concat(chunks);
      request.rawBody = rawBody; // Attach rawBody to the request object
      return rawBody; // Also return the raw body as the parsed result
    }
  })
  .post(
    '/lemonsqueezy',
    async ({ body, headers, request, error }) => {
      const hmac = crypto.createHmac('sha256', process.env.LEMON_SECRET);
      console.log(hmac)
      // Use the raw body captured in onParse
      const digest = Buffer.from(hmac.update(request.rawBody).digest('hex'), 'utf8');
      console.log(digest)
      const signature = Buffer.from(headers['x-signature'] || headers['X-Signature'] || '', 'utf8');
      console.log(signature)

      if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error('Signature mismatch');
      }

      const userId = body?.data?.meta?.custom_data?.userId;
      const date = body?.data?.attributes?.trial_ends_at || body?.data?.attributes?.ends_at;
      if (!userId) {
        throw new Error('User ID not found in payload');
      }

      try {
        if (body.meta.event_name === 'subscription_created') {
          const user = await prisma.prospectUser.findUnique({
            where: { id: Number(userId) },
          });

          if (user) {
            createUser({ email: user.email, nick: user.nick, password: user.password, date });
          }
        } else if (body.meta.event_name === 'subscription_updated') {
          const user = await prisma.prospectUser.findUnique({
            where: { id: Number(userId) },
          });

          if (user) {
            await prisma.user.update({
              where: { email: user.email },
              data: { pro: new Date(date) },
            });
          }
        }

        return 'Success';
      } catch (e) {
        return error(401, errorHandler(e));
      }
    },
    {
      headers: t.Object({
        'x-signature': t.String(),
      }),
      body: t.Optional(t.Object({})),
    }
  );
