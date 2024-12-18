//@ts-nocheck 
import Elysia, { t } from "elysia";
import prisma from "../prisma/prismaClient";
import { createUser } from "../user/services";
import { errorHandler } from "../utilities/error";
import crypto from 'crypto';

export const webhookRouter = new Elysia({ prefix: '/webhook' })
.post("/lemonsqueezy", async ({ request }) => {
    // Read the raw body as ArrayBuffer
    const body = await request.arrayBuffer();
    const hmac = crypto.createHmac('sha256', process.env.LEMON_SECRET);
    const digest = Buffer.from(hmac.update(Buffer.from(body)).digest('hex'), 'utf8');
      
    const signatureHeader = request.headers.get('x-signature');
    const signature = Buffer.from(signatureHeader || '', 'utf8');

    if (!crypto.timingSafeEqual(digest, signature)) {
        throw new Error('Signature mismatch');
    }

    const bodyString = Buffer.from(body).toString('utf8');
    const bodyJson = JSON.parse(bodyString);


    const userId = bodyJson?.meta?.custom_data?.user_id;
    const date = bodyJson?.data?.attributes?.trial_ends_at || bodyJson?.data?.attributes?.ends_at;

    if (!userId) {
        throw new Error('User ID not found in payload');
    }
    const user = await prisma.prospectUser.findUnique({
        where: { id: Number(userId) },
    });

    if(user){
        
    }

    if (bodyJson?.meta?.event_name === 'subscription_created') {
        const user = await prisma.prospectUser.findUnique({
            where: { id: Number(userId) },
        });
        await prisma.prospectUser.update({
            where: {
                email: user?.email
            }, 
            data: {
                subscriptionId: bodyJson?.data?.id,
            }
        })
        if (user) {
            createUser({ email: user.email, nick: user.nick, password: user.password, date });
        }
    } else if (bodyJson?.meta?.event_name === 'subscription_updated') {
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

    return "ok";
})
.onError(({ error }) => {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
});
