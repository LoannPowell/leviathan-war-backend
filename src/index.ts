import { Elysia } from "elysia";
import { authRouter } from "./auth/authRouter";
import { userRouter } from "./user/userRouter";

new Elysia()
    .group('/api/v1', (app) =>
        app
          .get('/health', () => "I'm healthy")
          .use(authRouter)
          .use(userRouter)
    )
    .listen(process.env.PORT || 3002, () => {console.log(`🦊 Elysia is running at ${process.env.PORT || 3002}`)})