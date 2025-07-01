import { PrismaClient } from "./generated/prisma/edge";


if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db
}