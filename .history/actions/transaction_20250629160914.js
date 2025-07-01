import { auth } from "@clerk/nextjs/server";

export async function createTransaction(data){
    try {
        const { userId } = await auth();
            if (!userId) throw new Error("Unauthorized");
        
            const user = await db.user.findUnique({
              where: { clerkUserId: userId },
            });
        
            if (!user) throw new Error("User not found");
    } catch (error) {
        
    }
}