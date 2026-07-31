"use client";

import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

export default function EditButton({ id }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/paste/edit/${id}`)}
      className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400"
    >
      ✏️ Edit
    </button>
  );
}