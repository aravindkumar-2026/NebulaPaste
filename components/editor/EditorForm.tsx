"use client";

type EditorFormProps = {
  title: string;
  description: string;
  language: string;
  loading: boolean;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  onSubmit: () => void;
};

const languages = [
  {
    value: "plaintext",
    label: "Plain Text",
  },
  {
    value: "javascript",
    label: "JavaScript",
  },
  {
    value: "typescript",
    label: "TypeScript",
  },
  {
    value: "python",
    label: "Python",
  },
  {
    value: "java",
    label: "Java",
  },
  {
    value: "cpp",
    label: "C++",
  },
  {
    value: "c",
    label: "C",
  },
  {
    value: "html",
    label: "HTML",
  },
  {
    value: "css",
    label: "CSS",
  },
  {
    value: "json",
    label: "JSON",
  },
];

export default function EditorForm({
  title,
  description,
  language,
  loading,
  onTitleChange,
  onDescriptionChange,
  onLanguageChange,
  onSubmit,
}: EditorFormProps) {
  return (
    <div className="mb-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl">

      <div className="grid gap-6">

        {/* Title */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Paste Title
          </label>

          <input
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Enter a title..."
            className="w-full rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          />
        </div>

        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-300">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            placeholder="Describe your snippet..."
            className="w-full resize-none rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
          />
        </div>

        {/* Bottom Row */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="rounded-2xl border border-zinc-700 bg-zinc-950 px-5 py-4 text-white outline-none focus:border-cyan-400"
          >
            {languages.map((lang) => (
              <option
                key={lang.value}
                value={lang.value}
              >
                {lang.label}
              </option>
            ))}
          </select>

          <button
            onClick={onSubmit}
            disabled={loading}
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Paste"}
          </button>

        </div>

      </div>

    </div>
  );
}