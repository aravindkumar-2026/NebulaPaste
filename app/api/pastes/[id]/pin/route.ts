import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function PATCH(
  request: Request,
  { params }: Props
) {
  try {
    const { id } = await params;

    const paste = await prisma.paste.findUnique({
      where: {
        id,
      },
    });

    if (!paste) {
      return NextResponse.json(
        { message: "Paste not found." },
        { status: 404 }
      );
    }

    const updatedPaste = await prisma.paste.update({
      where: {
        id,
      },
      data: {
        pinned: !paste.pinned,
      },
    });

    return NextResponse.json(updatedPaste);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update pin." },
      { status: 500 }
    );
  }
}