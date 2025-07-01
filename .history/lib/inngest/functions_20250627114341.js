import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "check" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
  },
);
