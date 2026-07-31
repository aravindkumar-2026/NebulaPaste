import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import CodeEditor from "@/components/editor/CodeEditor";
import { Sparkles, Code2, Database } from "lucide-react";

export default function CreatePage() {
  return (
    <Section className="relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute left-[-250px] top-[-150px] h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="absolute right-[-200px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[120px]" />

      <Container>

        <div className="grid gap-12 lg:grid-cols-[340px_1fr]">

          {/* Sidebar */}

          <div className="sticky top-24 h-fit rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur-xl">

            <div className="mb-6 flex items-center gap-3">

              <Sparkles className="text-cyan-400" />

              <h2 className="text-3xl font-bold text-white">
                New Paste
              </h2>

            </div>

            <p className="leading-7 text-zinc-400">
              Create beautiful code snippets using the Monaco Editor.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">

                <Code2 className="text-cyan-400" />

                <span>Syntax Highlighting</span>

              </div>

              <div className="flex items-center gap-3">

                <Database className="text-violet-400" />

                <span>Stored in PostgreSQL</span>

              </div>

              <div className="flex items-center gap-3">

                <Sparkles className="text-emerald-400" />

                <span>Instant Sharing</span>

              </div>

            </div>

          </div>

          {/* Editor */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-xl">

            <CodeEditor />

          </div>

        </div>

      </Container>

    </Section>
  );
}