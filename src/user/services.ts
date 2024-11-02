import { transporter } from "../mailer/transporter";
import prisma from "../prisma/prismaClient";
import { errorHandler } from "../utilities/error";
import { randomHash } from "../utilities/generators";

interface User {
    email: string, 
    nick:string,
    password: string,
}

interface CreateUser extends User {
    date: string,
}


export const createProspect = async ({email, nick, password}:User) => {

    const userExist = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(userExist) throw new Error('No valid credentials');

    const prospectExist = await prisma.prospectUser.findUnique({
        where: {
            email
        }
    });

    if(prospectExist) {
        await prisma.prospectUser.update({
            where: {
                email
            },
            data: {
                nick,
                password,
            }
        });
        return {message: prospectExist.id};
    }

    const newProspect = await prisma.prospectUser.create({
        data: {
            email,
            nick,
            password
        }
    });
    return {message: newProspect.id};

}

export const createUser = async  ({ email, nick, password, date }:CreateUser) => {
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
                pro: new Date(date)
            }
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

export const deleteUser = async (id:number) => {
    try {
        const users = await prisma.user.delete({
            where: {
                id,
            }
        })
        return {
            status: 200,
            message: users
        }
    }
    catch(e) {
        return errorHandler(e);
    }
}

export const getProspects = async () => {
    try {
        const users = await prisma.prospectUser.findMany()
        return {
            status: 200,
            message: users
        }
    }
    catch(e) {
       return errorHandler(e);
    }
}

export const sendVerificationEmail = async (id:number) => {
    try {
        const userToActivate = await prisma.user.findUnique({
            where: {
                id,
            }
        })
        if(userToActivate) {
            await transporter.sendMail({
                to: userToActivate.email,
                from: 'noreply@leviathanwar.com',
                subject: 'Activate your account ✔',
                html: `<div>This is your activation code <br/> ${userToActivate.activationCode}</div>`
            })
        }
        } catch(e) {
            errorHandler(e)
    }
}