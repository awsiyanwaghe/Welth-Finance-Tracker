'use server'

import { auth } from "@clerk/nextjs/dist/types/server"

export async function createAccount(data){
    try {
        const {userId} = await auth()
    } catch (error) {
        
    }
}