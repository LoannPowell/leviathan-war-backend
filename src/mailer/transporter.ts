import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({ 
    host: 'mail.privateemail.com', 
    port: 465, 
    auth: {
        user: 'noreply@leviathanwar.com',
        pass: 'Olajuan1996*',
    },
    secure:true,
}) 