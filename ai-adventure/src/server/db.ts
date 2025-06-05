import { PrismaClient } from '@prisma/client'

// Singleton Prisma client to avoid exhausting DB connections in development
export const prisma = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
