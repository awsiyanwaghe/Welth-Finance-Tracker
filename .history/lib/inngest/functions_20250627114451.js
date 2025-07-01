import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "Check Budget Alerts" },
  { cron: "0 */6 * * *" },
  async ({ step }) => {
    
  },
);
