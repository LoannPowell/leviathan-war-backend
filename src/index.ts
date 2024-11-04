import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { authRouter } from "./auth/authRouter";
import { userRouter } from "./user/userRouter";
import { webhookRouter } from "./webhook/webhook";

new Elysia()
.use(cors({
  origin: process.env.ORIGIN || 'https://leviathanwar.com',
}))
    .group('/api/v1', (app) =>
        app
          .get('/health', () => "I'm healthy")
          .use(webhookRouter)
          .use(authRouter)
          .use(userRouter)
    )
    .listen(process.env.PORT || 3002, () => {console.log(`🦊 Elysia is running at ${process.env.PORT || 3002}`)})