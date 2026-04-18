import { PrismaClient } from './generated/prisma';

// Simple initialization - no adapters needed for older versions
export const db = new PrismaClient();

export * from './generated/prisma';
