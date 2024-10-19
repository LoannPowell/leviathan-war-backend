import prisma from "../prisma/prismaClient";

interface Login {
    email: string,
    password: string,
}

interface Activation {
    activationCode: string
}

export const login = async ({ email, password }:Login) => {
        const user = await prisma.user.findUnique({
            select:{
              id: true,
              password: true,
              active: true,  
            },
            where: {
                email
            }
        });
        const isValid = await Bun.password.verify(password, user?.password || '');
        if(isValid && user) {
            if(user.active) return user;
            throw new Error ('User is inactive');
        }
        throw new Error('Invalid credentials')
}


export const activation = async ({activationCode}:Activation) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                activationCode
            }
        });
        if (user) {
            await prisma.user.update({
                where: { id: user.id },
                data: {
                    activationCode: null,
                    active: true
                }
            });
            return;
        }
        throw new Error("Not user to activate");
    } catch(e) {
        throw new Error('Not user to activate');
    } 
}