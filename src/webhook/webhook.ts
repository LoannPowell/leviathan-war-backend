//@ts-nocheck 
import Elysia, { t } from "elysia";
import prisma from "../prisma/prismaClient";
import { createUser } from "../user/services";
import { errorHandler } from "../utilities/error";
import crypto from 'crypto';

export const webhookRouter = new Elysia({ prefix: '/webhook' })
.post("/lemonsqueezy", async ({ request }) => {
    const body = await request.arrayBuffer();
    const hmac = crypto.createHmac('sha256', process.env.LEMON_SECRET);
    const digest = Buffer.from(hmac.update(rawBody).digest('hex'), 'utf8');
      
    const signatureHeader = request.headers.get('x-signature');
    const signature = Buffer.from(signatureHeader || '', 'utf8');

    if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error('Signature mismatch');
    }

    console.log(body);
    return "ok";
  })
  .onError(({ error }) => {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  })
  