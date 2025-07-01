
export const db = globalThis.prisma || new Pri()

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = db
}