import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import PasteHeader from "@/components/paste/PasteHeader";
import PasteToolbar from "@/components/paste/PasteToolbar";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PastePage({
  params,
}: Props) {
  const { userId } = await auth();

  const { id } = await params;

  const paste = await prisma.paste.findUnique({
    where: {
      id,
    },
  });

  if (!paste) {
    notFound();
  }

  const isOwner = paste.userId === userId;

  return (
    <Section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-[-250px] top-[-150px] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="absolute right-[-220px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

      <Container>

        <PasteHeader
          title={paste.title}
          description={paste.description}
          language={paste.language}
          pinned={paste.pinned}
          createdAt={paste.createdAt}
        />

        <PasteToolbar
          id={paste.id}
          title={paste.title}
          language={paste.language}
          content={paste.content}
          pinned={paste.pinned}
          isOwner={isOwner}
        />

        <div className="overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">

          {/* Window Header */}

          <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-5 py-4">

            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm text-zinc-500">
              {paste.language}
            </span>

          </div>

          <SyntaxHighlighter
            language={paste.language.toLowerCase()}
            style={oneDark}
            showLineNumbers
            customStyle={{
              margin: 0,
              borderRadius: 0,
              padding: "30px",
              fontSize: "15px",
              background: "#0d1117",
            }}
          >
            {paste.content}
          </SyntaxHighlighter>

        </div>

      </Container>

    </Section>
  );
}