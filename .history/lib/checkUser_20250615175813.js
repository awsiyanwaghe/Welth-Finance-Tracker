import { currentUser } from "@clerk/nextjs/server"

export const checkUser = async () => {
    const user = await currentUser()

    if(!user){
        return null
    }

    try {
        const loggedInUser = awa
    } catch (error) {
        
    }

}