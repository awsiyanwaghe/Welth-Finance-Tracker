
export const db = globalThis.prisma || new PrismaCLi()

if(process.env.NODE_ENV !== 'production'){
    globalThis.prisma = db
}