"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Paste = {
  id: string;
  title: string;
  description: string | null;
  content: string;
  language: string;
};

export default function EditForm({
  paste,
}: {
  paste: Paste;
}) {
  const router = useRouter();

  const [title, setTitle] = useState(paste.title);
  const [description, setDescription] = useState(
    paste.description || ""
  );
  const [content, setContent] = useState(paste.content);

  async function savePaste() {
    try {
      const res = await fetch(`/api/pastes/${paste.id}`, {
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

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Changes saved!", {
        description: "Your paste has been updated successfully.",
      });

      setTimeout(() => {
        router.push(`/paste/${paste.id}`);
        router.refresh();
      }, 700);

    } catch {
      toast.error("Failed to save changes.", {
        description: "Please try again.",
      });
    }
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
        className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black transition hover:bg-cyan-400"
      >
        Save Changes
      </button>

    </div>
  );
}