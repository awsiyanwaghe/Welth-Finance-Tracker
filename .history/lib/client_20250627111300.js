import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "welth", name: "Welth",
    retryFunction: async (attemp) => ({
        delay: Math.pow(2, attemp) * 1000,
        maxAtte
    })

 });
