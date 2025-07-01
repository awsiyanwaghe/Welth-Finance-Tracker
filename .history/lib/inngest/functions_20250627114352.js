import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "Check Budget Alerts" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
  },
);
