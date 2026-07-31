"use client";

import Link from "next/link";
import { Code2, Plus, FolderOpen } from "lucide-react";

import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Code2 className="h-8 w-8 text-cyan-400" />

          <span className="text-3xl font-black text-white">
            NebulaPaste
          </span>
        </Link>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Link
            href="/create"
            className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            <Plus size={18} />
            Create
          </Link>

          <Show when="signed-in">
            <Link
              href="/my-pastes"
              className="flex items-center gap-2 rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FolderOpen size={18} />
              My Pastes
            </Link>
          </Show>

          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="rounded-2xl border border-zinc-700 px-5 py-3 font-semibold text-white transition hover:border-cyan-400">
                Sign In
              </button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
              }}
            />
          </Show>

        </div>

      </div>
    </header>
  );
}