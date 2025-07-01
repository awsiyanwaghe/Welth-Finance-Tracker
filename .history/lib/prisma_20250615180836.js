import { P } from "@prisma/client";

export const prisma = new PrismaClient();


export const db = globalThis.prisma || new PrismaClient();


if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db
}