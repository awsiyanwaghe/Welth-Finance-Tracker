import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma"

export const checkUser = async () => {
    const user = await currentUser()

    if(!user){
        return null
    }

    try {
        const loggedInUser = await db.use
    } catch (error) {
        
    }

}