"use client";

import toast from "react-hot-toast";

type Props = {
  id: string;
};

export default function ShareButton({ id }: Props) {
  async function share() {
    const url = `${window.location.origin}/paste/${id}`;

    await navigator.clipboard.writeText(url);

    toast.success("Link copied!");
  }

  return (
    <button
      onClick={share}
      className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-500"
    >
      🔗 Share
    </button>
  );
}