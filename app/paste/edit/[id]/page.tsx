import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

import EditForm from "@/components/paste/EditForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPastePage({
  params,
}: Props) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const { id } = await params;

  const paste = await prisma.paste.findUnique({
    where: {
      id,
    },
  });

  if (!paste) {
    notFound();
  }

  // Owner protection
  if (paste.userId !== userId) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-12">

        <h1 className="mb-10 text-4xl font-bold">
          Edit Paste
        </h1>

        <EditForm paste={paste} />

      </div>
    </main>
  );
}