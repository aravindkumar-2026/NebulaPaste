import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;

    const memory = process.memoryUsage();

    logger.info("Status endpoint accessed.");

    return NextResponse.json({
      status: "online",
      service: "NebulaPaste",
      version: "1.0.0",

      database: "connected",

      environment:
        process.env.NODE_ENV ?? "development",

      uptime: Math.floor(process.uptime()),

      node: process.version,

      memory: {
        rss: `${Math.round(memory.rss / 1024 / 1024)} MB`,
        heapUsed: `${Math.round(memory.heapUsed / 1024 / 1024)} MB`,
        heapTotal: `${Math.round(memory.heapTotal / 1024 / 1024)} MB`,
      },

      timestamp: new Date().toISOString(),
    });

  } catch (error) {

    logger.error(
      "Status endpoint failed.",
      error
    );

    return NextResponse.json(
      {
        status: "offline",
        database: "disconnected",
        timestamp: new Date().toISOString(),
      },
      {
        status: 500,
      }
    );
  }
}