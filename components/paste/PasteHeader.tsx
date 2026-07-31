import {
  Calendar,
  Code2,
  Pin,
} from "lucide-react";

type Props = {
  title: string;
  description: string | null;
  language: string;
  pinned: boolean;
  createdAt: Date;
};

export default function PasteHeader({
  title,
  description,
  language,
  pinned,
  createdAt,
}: Props) {
  return (
    <div className="mb-10 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

        <div>

          <h1 className="text-5xl font-black tracking-tight text-white">
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
              {description}
            </p>
          )}

        </div>

        {pinned && (
          <div className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black">
            📌 Pinned
          </div>
        )}

      </div>

      <div className="mt-8 flex flex-wrap gap-6 text-zinc-400">

        <div className="flex items-center gap-2">

          <Code2
            size={18}
            className="text-cyan-400"
          />

          {language}

        </div>

        <div className="flex items-center gap-2">

          <Calendar
            size={18}
            className="text-violet-400"
          />

          {new Date(createdAt).toLocaleString()}

        </div>

        <div className="flex items-center gap-2">

          <Pin
            size={18}
            className="text-yellow-400"
          />

          {pinned ? "Pinned" : "Not Pinned"}

        </div>

      </div>

    </div>
  );
}