import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "Check Budget Alerts" },
  { cron: "" },
  async ({ event, step }) => {
  },
);
