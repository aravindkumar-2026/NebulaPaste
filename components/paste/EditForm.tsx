"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditForm({
  paste,
}: {
  paste: any;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(paste.title);
  const [description, setDescription] = useState(paste.description || "");
  const [content, setContent] = useState(paste.content);

  async function savePaste() {
    await fetch(`/api/pastes/${paste.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        content,
        language: paste.language,
      }),
    });

    router.push(`/paste/${paste.id}`);
    router.refresh();
  }

  return (
    <div className="space-y-6">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full rounded-lg bg-zinc-900 p-4"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-lg bg-zinc-900 p-4"
        rows={4}
      />

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="h-96 w-full rounded-lg bg-zinc-900 p-4 font-mono"
      />

      <button
        onClick={savePaste}
        className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black"
      >
        Save Changes
      </button>

    </div>
  );
}