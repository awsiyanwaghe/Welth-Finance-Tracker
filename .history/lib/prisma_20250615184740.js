
export const db = globalThis.prisma || new Prisma()

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = db
}