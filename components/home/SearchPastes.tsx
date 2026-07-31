"use client";

import Link from "next/link";
import { Search, Pin } from "lucide-react";
import { useMemo, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";

type Paste = {
  id: string;
  title: string;
  description: string | null;
  language: string;
  pinned: boolean;
  createdAt: Date;
};

export default function SearchPastes({
  pastes,
}: {
  pastes: Paste[];
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return pastes;

    return pastes.filter((paste) => {
      return (
        paste.title.toLowerCase().includes(query.toLowerCase()) ||
        (paste.description ?? "")
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        paste.language.toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, pastes]);

  return (
    <div>

      {/* Search */}

      <div className="relative mb-10">

        <Search
          className="absolute left-4 top-4 text-zinc-500"
          size={20}
        />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, description or language..."
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-12 py-4 text-white outline-none transition focus:border-cyan-500"
        />

      </div>

      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {filtered.map((paste) => (
          <Link
            key={paste.id}
            href={`/paste/${paste.id}`}
          >
            <GlassCard className="group h-full p-7">

              <div className="flex items-start justify-between">

                <h3 className="line-clamp-1 text-2xl font-bold text-white">
                  {paste.title}
                </h3>

                {paste.pinned && (
                  <Pin
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                )}

              </div>

              {paste.description && (
                <p className="mt-4 line-clamp-2 leading-7 text-zinc-400">
                  {paste.description}
                </p>
              )}

              <div className="mt-8 flex items-center justify-between">

                <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-400">
                  {paste.language}
                </span>

                <span className="text-sm text-zinc-500">
                  {new Date(
                    paste.createdAt
                  ).toLocaleDateString()}
                </span>

              </div>

            </GlassCard>
          </Link>
        ))}

      </div>

      {filtered.length === 0 && (
        <GlassCard className="mt-10 p-12 text-center">

          <h2 className="text-2xl font-bold text-white">
            No pastes found
          </h2>

          <p className="mt-3 text-zinc-400">
            Try searching with another keyword.
          </p>

        </GlassCard>
      )}

    </div>
  );
}