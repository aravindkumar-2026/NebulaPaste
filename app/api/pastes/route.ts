import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
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

    return NextResponse.json(paste, { status: 201 });

  } catch (error) {
    console.error(error);

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