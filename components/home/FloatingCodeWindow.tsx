import GlassCard from "@/components/ui/GlassCard";

export default function FloatingCodeWindow() {
  return (
    <GlassCard className="overflow-hidden p-0">

      {/* Window Header */}

      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-5 py-4">

        <div className="h-3 w-3 rounded-full bg-red-500" />

        <div className="h-3 w-3 rounded-full bg-yellow-500" />

        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-4 text-sm text-zinc-500">
          app.ts
        </span>

      </div>

      {/* Code */}

      <pre className="overflow-x-auto bg-[#0d1117] p-8 text-sm leading-8">

        <code>

<span className="text-purple-400">const</span>{" "}
<span className="text-cyan-400">app</span>{" "}
=
{" {"}

{"\n"}

&nbsp;&nbsp;
<span className="text-green-400">name</span>
:
{" "}
<span className="text-yellow-300">
"NebulaPaste"
</span>
,

{"\n"}

&nbsp;&nbsp;
<span className="text-green-400">
framework
</span>
:
{" "}
<span className="text-yellow-300">
"Next.js 16"
</span>
,

{"\n"}

&nbsp;&nbsp;
<span className="text-green-400">
database
</span>
:
{" "}
<span className="text-yellow-300">
"PostgreSQL"
</span>
,

{"\n"}

&nbsp;&nbsp;
<span className="text-green-400">
orm
</span>
:
{" "}
<span className="text-yellow-300">
"Prisma"
</span>
,

{"\n"}

&nbsp;&nbsp;
<span className="text-green-400">
editor
</span>
:
{" "}
<span className="text-yellow-300">
"Monaco"
</span>

{"\n"}

{"}"}

;

{"\n\n"}

<span className="text-purple-400">
console
</span>

.

<span className="text-cyan-400">
log
</span>

(

<span className="text-cyan-300">
app
</span>

)

;

        </code>

      </pre>

    </GlassCard>
  );
}