import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlowButton from "@/components/ui/GlowButton";
import FloatingCodeWindow from "./FloatingCodeWindow";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-[-200px] top-[-150px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute right-[-150px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-violet-500/20 blur-[120px]" />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

              <Sparkles size={16} />

              Nebula UI • Next.js 16 • Prisma

            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">

              Share Code

              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">

                Beautifully.

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

              NebulaPaste lets developers create, edit,
              share and manage beautiful code snippets with
              Monaco Editor, PostgreSQL and blazing-fast
              performance.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <GlowButton href="/create">
                Create Paste
              </GlowButton>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-700 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-zinc-900"
              >
                View GitHub
              </a>

            </div>

            <div className="mt-12 flex flex-wrap gap-8">

              <div className="flex items-center gap-2 text-zinc-300">

                <Zap className="text-cyan-400" size={18} />

                Fast

              </div>

              <div className="flex items-center gap-2 text-zinc-300">

                <ShieldCheck
                  className="text-emerald-400"
                  size={18}
                />

                Secure

              </div>

              <div className="flex items-center gap-2 text-zinc-300">

                <Sparkles
                  className="text-violet-400"
                  size={18}
                />

                Beautiful UI

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-3xl" />

            <div className="relative">

              <FloatingCodeWindow />

            </div>

          </div>

        </div>

      </Container>

    </Section>
  );
}