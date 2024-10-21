import { Elysia } from "elysia";

import { userRouter } from "../user/userRouter";
import { authRoutes } from "../auth/authRoutes";

export class Server {
    private app: Elysia;

    constructor () {
        this.app = new Elysia();
        this.app.group('/api/v1', (app) => 
            app
            .use(userRouter)
            .use(authRoutes)
        )
    }

    public start () {
        try {
            this.app.listen(process.env.PORT || 3002, () => {
                console.log(`🦊 Elysia is running at ${this.app.server?.hostname}:${this.app.server?.port}`)
            })
        }
        catch(e) {
            console.log(e);
        }
    }
}