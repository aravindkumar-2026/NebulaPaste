"use client";

import { useState } from "react";
import { Pin } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  pinned: boolean;
};

export default function PinButton({ id, pinned }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function togglePin() {
    setLoading(true);

    try {
      const res = await fetch(`/api/pastes/${id}/pin`, {
        method: "PATCH",
      });

      if (!res.ok) {
        alert("Failed to update pin.");
        return;
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={togglePin}
      disabled={loading}
      className={`rounded-lg px-6 py-3 font-semibold transition ${
        pinned
          ? "bg-yellow-500 text-black hover:bg-yellow-400"
          : "bg-zinc-800 text-white hover:bg-zinc-700"
      }`}
    >
      <Pin className="mr-2 inline h-4 w-4" />
      {loading ? "Updating..." : pinned ? "Unpin" : "Pin"}
    </button>
  );
}