import { inngest } from "./client";
import { db } from '@/lib/prisma'

export const helloWorld = inngest.createFunction(
  { id: "Check Budget Alerts" },
  { cron: "0 */6 * * *" },
  async ({ step }) => {
    const budget = await step.run('fetch-budget', async()=>{
        return await db.budget
    })
  },
);
