//@ts-nocheck 
import Elysia, { t } from "elysia";
import prisma from "../prisma/prismaClient";
import { createUser } from "../user/services";
import { errorHandler } from "../utilities/error";
import crypto from 'crypto';

export const webhookRouter = new Elysia({ prefix: '/webhook' })
  .post(
    '/lemonsqueezy',
    async ({ body, headers, request, error }) => {
      const hmac = crypto.createHmac('sha256', process.env.LEMON_SECRET);
      const rawBody = await request.arrayBuffer();
      const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
      const signature = Buffer.from(headers['x-signature'] || headers['X-Signature'] || '', 'utf8');

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
      // Use t.Optional instead of t.Not(t.Undefined())
      body: t.Optional(t.Object({})),
    }
  );
