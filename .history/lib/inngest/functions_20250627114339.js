import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
  },
);
