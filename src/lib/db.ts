import { PrismaClient } from "@/generated/prisma";
import { getDatabaseUrl, isProduction } from "./config";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create Prisma client with environment-specific configuration
const createPrismaClient = () => {
  const databaseUrl = getDatabaseUrl();
  
  return new PrismaClient({
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
    log: isProduction() ? ['error'] : ['query', 'error', 'warn'],
  });
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

// Prevent multiple instances in development
if (!isProduction()) {
  globalForPrisma.prisma = db;
}
