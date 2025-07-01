export async function getCurrentBudget(accountId){
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