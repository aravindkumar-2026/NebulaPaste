"use client";

import toast from "react-hot-toast";

type Props = {
  text: string;
};

export default function CopyButton({ text }: Props) {
  async function copyCode() {
    await navigator.clipboard.writeText(text);

    toast.success("Code copied!");
  }

  return (
    <button
      onClick={copyCode}
      className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-black hover:bg-cyan-400"
    >
      📋 Copy
    </button>
  );
}