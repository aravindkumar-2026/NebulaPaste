"use client";

export default function NebulaBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* Cyan Orb */}

      <div className="absolute left-[-180px] top-[-150px] h-[450px] w-[450px] animate-[float1_18s_ease-in-out_infinite] rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* Purple Orb */}

      <div className="absolute right-[-180px] top-[120px] h-[400px] w-[400px] animate-[float2_20s_ease-in-out_infinite] rounded-full bg-violet-500/20 blur-[120px]" />

      {/* Blue Orb */}

      <div className="absolute bottom-[-180px] left-[35%] h-[420px] w-[420px] animate-[float3_22s_ease-in-out_infinite] rounded-full bg-sky-500/15 blur-[130px]" />

      {/* Pink Orb */}

      <div className="absolute bottom-[40px] right-[10%] h-[250px] w-[250px] animate-[float2_16s_ease-in-out_infinite] rounded-full bg-fuchsia-500/10 blur-[100px]" />

    </div>
  );
}