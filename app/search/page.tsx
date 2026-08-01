import Link from "next/link";
import { prisma } from "@/lib/prisma";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const { q = "" } = await searchParams;

  const pastes = await prisma.paste.findMany({
    where: {
      title: {
        contains: q,
        mode: "insensitive",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <h1 className="mb-2 text-4xl font-bold text-white">
        Search Results
      </h1>

      <p className="mb-10 text-zinc-400">
        Showing results for:
        <span className="ml-2 font-semibold text-cyan-400">
          &quot;{q}&quot;
        </span>
      </p>

      {pastes.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center text-zinc-400">
          No pastes found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {pastes.map((paste) => (
            <Link
              key={paste.id}
              href={`/paste/${paste.id}`}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500"
            >
              <h2 className="mb-4 text-2xl font-bold text-white">
                {paste.title}
              </h2>

              {paste.description && (
                <p className="mb-4 text-zinc-400">
                  {paste.description}
                </p>
              )}

              <div className="flex items-center justify-between">

                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                  {paste.language}
                </span>

                <span className="text-sm text-zinc-500">
                  {new Date(paste.createdAt).toLocaleDateString()}
                </span>

              </div>

            </Link>
          ))}

        </div>
      )}

    </main>
  );
}