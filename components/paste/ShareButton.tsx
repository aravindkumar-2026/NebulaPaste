"use client";

import { toast } from "sonner";

type Props = {
  id: string;
};

export default function ShareButton({ id }: Props) {
  async function share() {
    try {
      const url = `${window.location.origin}/paste/${id}`;

      await navigator.clipboard.writeText(url);

      toast.success("Link copied to clipboard!", {
        description: "Share this URL with anyone.",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to copy link.", {
        description: "Please try again.",
      });
    }
  }

  return (
    <button
      onClick={share}
      className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-500"
    >
      🔗 Share
    </button>
  );
}