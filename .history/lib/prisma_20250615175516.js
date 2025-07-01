import { Prisma } from '@prisma/client'

export const db = globalThis.prisma || new PrismaCl
