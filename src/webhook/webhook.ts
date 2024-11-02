//@ts-nocheck 
import Elysia, { t } from "elysia";
import prisma from "../prisma/prismaClient";
import { createUser } from "../user/services";
import { errorHandler } from "../utilities/error";


export const webhookRouter = new Elysia({prefix: '/webhook'})
    .post('/lemonsqueezy', async ({ body, headers, error}) => {
        const signature = headers['x-signature'];
        if(!signature || signature !== '34b819913fbdd30b93aba9e8c4ed229d86bd923a') {
            throw new Error('Signature missing');
        }
        const userId = body?.data?.meta?.custom_data?.userId;
        const date = body?.data?.attributes?.trial_ends_at || body?.data?.attributes?.ends_at;
        if (!userId) {
            throw new Error('User ID not found in payload');
        }
        try {
            if (body.meta.event_name === "subscription_created") {
                const user = await prisma.prospectUser.findUnique({
                    where: {
                        id: Number(userId),
                    }
                })

                if (user) {
                    createUser({email: user.email, nick: user.nick, password: user.password, date})
                }
            }
            if(body.meta.event_name === "subscription_updated") {
                const user = await prisma.prospectUser.findUnique({
                    where: {
                        id: Number(userId),
                    }
                })
                if(user)
                await prisma.user.update({
                    where: {
                        email: user?.email
                    },
                    data: {
                        pro:new Date(date)
                    }
                })
            }
            return 'Success'
        } catch(e) {
            return error(401, errorHandler(e)) ;
        }
    })
    
