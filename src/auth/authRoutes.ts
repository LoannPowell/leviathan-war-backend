import Elysia, { t } from "elysia";
import jwt from "@elysiajs/jwt";
import { activation, login } from "./services";
import { SECRET_KEY } from "../variables";
import { errorHandler } from "../utilities/error";

export const authRoutes = new Elysia({prefix: '/auth'})
    .use(jwt({
        name:'jwt',
        secret: SECRET_KEY,
    }))
    .post('/', async ({ body, jwt, cookie: { auth }, error}) => {
        try {
            const  { id } = await login({ email: body.email, password: body.password});
            const jwtValue = await jwt.sign({id})
            if (id) {
                auth.set({
                    value: jwtValue,
                    httpOnly: true,
                    maxAge: 7 * 86400,
                    path:'/',
                    domain: '.leviathanwar.com', 
                    secure: true, 
                    sameSite: 'none'
                })
            }
            return {
                status: 200,
                message: `Completed! ${jwtValue}`
            }
        } catch(e) {
            return error(401, errorHandler(e)) ;
        }
    }, {  
        body: t.Object({
            email: t.String({ format: 'email'}),
            password: t.String({ minLength: 8 }),
        })
    })
    .get('/logout', async ({ cookie: { auth }, error }) => {
        try {
            auth.remove()
            
            return {
                status: 200,
                message: "Completed!"
            }
        } catch(e) {
            return error(401, errorHandler(e));
        }
    })
    .post('/activate', async ({ body, error}) => {
        try {
            await activation({activationCode: body.hash})
            return "User activated!"
        } catch (e) {
            return error(401, errorHandler(e))
        }
    }, {  
        body: t.Object({
            hash: t.String(),
        })
    })
