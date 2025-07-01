
export const db = globalThis.prisma || new a();

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db
}