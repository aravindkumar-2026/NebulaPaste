"use client";

import { toast } from "sonner";

type Props = {
  text: string;
};

export default function CopyButton({ text }: Props) {
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(text);

      toast.success("Code copied!", {
        description: "The code has been copied to your clipboard.",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to copy code.", {
        description: "Please try again.",
      });
    }
  }

  return (
    <button
      onClick={copyCode}
      className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
    >
      📋 Copy
    </button>
  );
}