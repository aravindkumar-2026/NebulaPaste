import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { logger } from "@/lib/logger";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

// =======================
// UPDATE PASTE
// =======================

export async function PUT(
  request: Request,
  { params }: Props
) {
  try {
    const { userId } = await auth();

    logger.info(
      `Update paste request from ${
        userId ?? "anonymous"
      }`
    );

    if (!userId) {
      logger.warn("Unauthorized update attempt.");

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await params;

    const paste = await prisma.paste.findUnique({
      where: {
        id,
      },
    });

    if (!paste) {
      logger.warn(
        `Paste ${id} not found during update.`
      );

      return NextResponse.json(
        {
          message: "Paste not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (paste.userId !== userId) {
      logger.warn(
        `Forbidden update attempt for paste ${id}.`
      );

      return NextResponse.json(
        {
          message: "Forbidden",
        },
        {
          status: 403,
        }
      );
    }

    const body = await request.json();

    const updatedPaste =
      await prisma.paste.update({
        where: {
          id,
        },
        data: {
          title: body.title,
          description: body.description,
          content: body.content,
          language: body.language,
        },
      });

    logger.info(
      `Paste ${id} updated successfully.`
    );

    return NextResponse.json(updatedPaste);

  } catch (error) {

    logger.error(
      "Failed to update paste.",
      error
    );

    return NextResponse.json(
      {
        message: "Failed to update paste.",
      },
      {
        status: 500,
      }
    );
  }
}
// =======================
// DELETE PASTE
// =======================

export async function DELETE(
  request: Request,
  { params }: Props
) {
  try {
    const { userId } = await auth();

    logger.info(
      `Delete paste request from ${
        userId ?? "anonymous"
      }`
    );

    if (!userId) {
      logger.warn("Unauthorized delete attempt.");

      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const { id } = await params;

    const paste = await prisma.paste.findUnique({
      where: {
        id,
      },
    });

    if (!paste) {
      logger.warn(
        `Paste ${id} not found during delete.`
      );

      return NextResponse.json(
        {
          message: "Paste not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (paste.userId !== userId) {
      logger.warn(
        `Forbidden delete attempt for paste ${id}.`
      );

      return NextResponse.json(
        {
          message: "Forbidden",
        },
        {
          status: 403,
        }
      );
    }

    await prisma.paste.delete({
      where: {
        id,
      },
    });

    logger.info(
      `Paste ${id} deleted successfully.`
    );

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    logger.error(
      "Failed to delete paste.",
      error
    );

    return NextResponse.json(
      {
        message: "Failed to delete paste.",
      },
      {
        status: 500,
      }
    );
  }
}