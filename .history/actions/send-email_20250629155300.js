import { Resend } from 'resend'

export async function sendEmail({to, subject, react}){
    const resend = new Resend(process.env.RESEND_API_KEY || "")

    try {
        
    } catch (error) {
        
    }
}