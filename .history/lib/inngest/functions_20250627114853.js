import { inngest } from "./client";
import { db } from '@/lib/prisma'

export const helloWorld = inngest.createFunction(
  { id: "Check Budget Alerts" },
  { cron: "0 */6 * * *" },
  async ({ step }) => {
    const budgets = await step.run('fetch-budget', async()=>{
        return await db.budget.findMany({
          include: {
            user: {
              include: {
                accounts: {
                  where: {
                    isDefault: true
                  }
                }
              }
            }
          }
        })
    })

    for(const budget of budgets){
      const defaultAccount = budget.user.accounts[0]
      if(!defaultAccount) continue;

      await step.run(`check-budget-${budget.id}`)
    }
  },
);
