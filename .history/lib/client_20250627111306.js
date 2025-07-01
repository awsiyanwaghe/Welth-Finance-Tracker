import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "welth", name: "Welth",
    retryFunction: async (attempt) => ({
        delay: Math.pow(2, attemp) * 1000,
        maxAttempts
    })

 });
