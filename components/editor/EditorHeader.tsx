"use client";

import { Sparkles, Database, ShieldCheck } from "lucide-react";

type EditorHeaderProps = {
  language: string;
};

export default function EditorHeader({
  language,
}: EditorHeaderProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl">

      {/* Top */}

      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 px-8 py-6">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Monaco Editor
          </h2>

          <p className="mt-2 text-zinc-400">
            Write and share beautiful code.
          </p>

        </div>

        <div className="mt-4 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-300 md:mt-0">

          {language.toUpperCase()}

        </div>

      </div>

      {/* Bottom */}

      <div className="flex flex-wrap gap-8 px-8 py-5 text-sm text-zinc-400">

        <div className="flex items-center gap-2">

          <Sparkles
            className="text-cyan-400"
            size={18}
          />

          Monaco Powered

        </div>

        <div className="flex items-center gap-2">

          <Database
            className="text-violet-400"
            size={18}
          />

          PostgreSQL

        </div>

        <div className="flex items-center gap-2">

          <ShieldCheck
            className="text-emerald-400"
            size={18}
          />

          Secure Sharing

        </div>

      </div>

    </div>
  );
}