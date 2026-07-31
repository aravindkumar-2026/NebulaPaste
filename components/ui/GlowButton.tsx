"use client";

import Link from "next/link";

type GlowButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function GlowButton({
  href,
  children,
}: GlowButtonProps) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        px-7
        py-4
        text-lg
        font-semibold
        text-black
        shadow-lg
        shadow-cyan-500/30
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-cyan-400/50
      "
    >
      {children}
    </Link>
  );
}