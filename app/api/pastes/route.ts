import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    logger.info(
      `Create paste request from ${
        userId ?? "anonymous"
      }`
    );

    if (!userId) {
      logger.warn("Unauthorized create paste attempt.");

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const body = await request.json();

    const paste = await prisma.paste.create({
      data: {
        title: body.title,
        description: body.description,
        content: body.content,
        language: body.language,
        pinned: false,
        userId,
      },
    });

    logger.info(
      `Paste ${paste.id} created successfully.`
    );

    return NextResponse.json(
      paste,
      {
        status: 201,
      }
    );

  } catch (error) {

    logger.error(
      "Failed to create paste.",
      error
    );

    return NextResponse.json(
      {
        message: "Failed to create paste.",
      },
      {
        status: 500,
      }
    );
  }
}