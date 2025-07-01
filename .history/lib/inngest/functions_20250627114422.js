import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "Check Budget Alerts" },
  { cron: "test/hello.world" },
  async ({ event, step }) => {
  },
);
