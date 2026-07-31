"use client";

import Link from "next/link";
import { ArrowUp, Code2, ExternalLink } from "lucide-react";

export default function Footer() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="mt-28 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Code2 className="text-cyan-400" />
              PasteBin
            </div>

            <p className="text-zinc-400">
              Share code snippets beautifully with syntax highlighting,
              pinning, editing and lightning-fast performance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-zinc-400">

              <Link href="/">Home</Link>

              <Link href="/create">
                Create Paste
              </Link>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start md:items-end">

            <button
              onClick={scrollTop}
              className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black hover:bg-cyan-400"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 p-3 hover:bg-zinc-900"
              >
                <ExternalLink />
              </a>
            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} PasteBin • Built with Next.js, Prisma & PostgreSQL.
        </div>

      </div>
    </footer>
  );
}