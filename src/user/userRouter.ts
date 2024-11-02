import Elysia, { t } from "elysia";
import { createProspect, createUser, deleteAll, getAll, getProspects } from "./services";
import { errorHandler } from "../utilities/error";

export const userRouter = new Elysia({prefix: '/users'})
    .post('/', async ({ body, error }) => {
        try {
            const answer = await createProspect({ email: body.email, nick: body.nick, password: body.password});
            return answer;
        } catch(e) {
            return error(401, errorHandler(e))
        }
    }, {
        body: t.Object({
            nick: t.String(), 
            email: t.String({ format: 'email'}),
            password: t.String({ minLength: 8 }),
        })
    })
    .get('/', () => getAll())
    .get('/delete', () => deleteAll())
    .get('/get-prospects', () => getProspects())