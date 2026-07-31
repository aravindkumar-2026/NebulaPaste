"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function deletePaste() {
    const ok = confirm("Delete this paste?");

    if (!ok) return;

    await fetch(`/api/pastes/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    router.refresh();
  }

  return (
    <button
      onClick={deletePaste}
      className="rounded-lg bg-red-600 px-5 py-2 font-semibold hover:bg-red-700"
    >
      Delete
    </button>
  );
}