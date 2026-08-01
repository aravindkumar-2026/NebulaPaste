import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlowButton from "@/components/ui/GlowButton";
import Reveal from "@/components/ui/Reveal";

import FloatingCodeWindow from "./FloatingCodeWindow";
import TypingText from "./TypingText";
import NebulaBackground from "./NebulaBackground";
import FloatingTechBadges from "./FloatingTechBadges";
import MouseGlow from "./MouseGlow";

const GITHUB_REPO =
  "https://github.com/aravindkumar-2026/NebulaPaste";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden">

      <MouseGlow />

      <NebulaBackground />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <Reveal>

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

                <Sparkles size={16} />

                Modern • Fast • Secure

              </div>

              <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">

                Create. Save.

                <br />

                <TypingText />

              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

                NebulaPaste is a modern workspace for code,
                notes, text and snippets. Organize, search,
                edit and securely share everything you write
                with a fast, elegant and reliable experience.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <GlowButton href="/create">
                  Create New Paste
                </GlowButton>

                <a
                  href={GITHUB_REPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center rounded-2xl border border-zinc-700 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-zinc-900"
                >
                  View Source

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                </a>

              </div>

              <div className="mt-12 flex flex-wrap gap-8">

                <div className="flex items-center gap-2 text-zinc-300">

                  <Zap
                    className="text-cyan-400"
                    size={18}
                  />

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

                  Open Source

                </div>

              </div>

            </div>

          </Reveal>
          <Reveal delay={0.25}>

            <div className="relative">

              {/* Floating Tech Badges */}

              <FloatingTechBadges />

              {/* Glow */}

              <div className="absolute inset-0 rounded-3xl bg-cyan-500/10 blur-3xl" />

              {/* Code Window */}

              <div className="relative transition-transform duration-500 hover:scale-[1.02]">

                <FloatingCodeWindow />

              </div>

            </div>

          </Reveal>

        </div>

      </Container>

    </Section>
  );
}