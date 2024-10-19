import { Elysia } from "elysia";

  export const health = new Elysia({ prefix: "/health" })
        .get('/', () => {
            return {
                message:'Everything good here nothing to see',
            }
        })