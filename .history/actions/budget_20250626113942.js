"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function getCurrentBudget(accountId) {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) throw new Error("User not found");

    const budget = await db.budget.findFirst({
        where: {
            userId: user.id
        }
    })

    const currentDate = new Date();
    const startOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    );

    const endOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    );

    const expenses = await db.transaction.aggregate({
        where:{
            userId: user.id,
            type: 'EXPENSE',
            date: {
                gte: startOfMonth,
                lte: endOfMonth,
            }
        }
    })

  } catch (error) {}
}
