
export const db = globalThis.prisma || new PrismaCl()

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = db
}