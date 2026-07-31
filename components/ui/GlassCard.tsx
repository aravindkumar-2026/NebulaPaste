type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-zinc-800/70
        bg-zinc-900/60
        backdrop-blur-xl
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500/40
        hover:shadow-cyan-500/10
        ${className}
      `}
    >
      {children}
    </div>
  );
}