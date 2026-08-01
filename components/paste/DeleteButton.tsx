"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function deletePaste() {
    const ok = confirm("Are you sure you want to delete this paste?");

    if (!ok) return;

    try {
      const res = await fetch(`/api/pastes/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error();
      }

      toast.success("Paste deleted!", {
        description: "The snippet has been permanently removed.",
      });

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 700);

    } catch (error) {
      console.error(error);

      toast.error("Delete failed", {
        description: "Please try again.",
      });
    }
  }

  return (
    <button
      onClick={deletePaste}
      className="rounded-lg bg-red-600 px-5 py-2 font-semibold transition hover:bg-red-700"
    >
      Delete
    </button>
  );
}