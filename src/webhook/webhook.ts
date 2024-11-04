//@ts-nocheck 
import Elysia, { t } from "elysia";
import prisma from "../prisma/prismaClient";
import { createUser } from "../user/services";
import { errorHandler } from "../utilities/error";
import crypto from 'crypto';

export const webhookRouter = new Elysia({ prefix: '/webhook' })
  .post(
    '/lemonsqueezy',
    async ({ headers, request, error }) => {
      // Capture raw body directly as ArrayBuffer
      const rawBodyArrayBuffer = await request.arrayBuffer();
      console.log(request)
      const rawBody = Buffer.from(rawBodyArrayBuffer); // Convert ArrayBuffer to Buffer for HMAC
      
      const hmac = crypto.createHmac('sha256', process.env.LEMON_SECRET);
      const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
      
      const signatureHeader = headers?.['x-signature'] || headers?.['X-Signature'];
      const signature = Buffer.from(signatureHeader || '', 'utf8');

      if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error('Signature mismatch');
      }

      // Parse the JSON body after signature verification
      const body = JSON.parse(rawBody.toString('utf8'));
      const userId = body?.data?.meta?.custom_data?.userId;
      const date = body?.data?.attributes?.trial_ends_at || body?.data?.attributes?.ends_at;

      if (!userId) {
        throw new Error('User ID not found in payload');
      }

      try {
        if (body?.meta?.event_name === 'subscription_created') {
          const user = await prisma.prospectUser.findUnique({
            where: { id: Number(userId) },
          });

          if (user) {
            createUser({ email: user.email, nick: user.nick, password: user.password, date });
          }
        } else if (body?.meta?.event_name === 'subscription_updated') {
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
