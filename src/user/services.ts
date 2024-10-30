import { transporter } from "../mailer/transporter";
import prisma from "../prisma/prismaClient";
import { errorHandler } from "../utilities/error";
import { randomHash } from "../utilities/generators";

interface User {
    email: string, 
    nick:string,
    password: string,
}

export const createUser = async  ({ email, nick, password }:User) => {
    const activateHash = randomHash(email);
    const bcryptHash = await Bun.password.hash(password, {
        algorithm: "bcrypt",
        cost: 8, 
    });
    try {
        await prisma.user.create({
            data: {
                email, 
                nick,
                password: bcryptHash,
                activationCode: activateHash,
            }
        })
        await transporter.sendMail({
            to: email,
            from: 'noreply@leviathanwar.com',
            subject: 'Activate your account ✔',
            html: `<div>This is your activation code <br/> ${activateHash} </div>`
        })
        return {
            status: 200,
            message: "Everything correct!"
        }
    }
    catch(e) {
        throw new Error ('User already exist!') ;
    }
}

export const getAll = async () => {
    try {
        const users = await prisma.user.findMany()
        return {
            status: 200,
            message: users
        }
    }
    catch(e) {
       return errorHandler(e);
    }
}

export const deleteAll = async () => {
    try {
        const users = await prisma.user.deleteMany()
        return {
            status: 200,
            message: users
        }
    }
    catch(e) {
        return errorHandler(e);
    }
}