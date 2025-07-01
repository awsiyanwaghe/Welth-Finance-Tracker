import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "Check Bugd" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
  },
);
