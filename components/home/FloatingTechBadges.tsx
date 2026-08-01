"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPython,
  SiPrisma,
  SiPostgresql,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";

const badges = [
  {
  name: "Next.js",
  icon: SiNextdotjs,
  top: "14%",
  left: "-4%",
  delay: "0s",
},
  {
    name: "React",
    icon: SiReact,
    top: "23%",
    right: "-8%",
    delay: "1s",
  },
{
  name: "TypeScript",
  icon: SiTypescript,
  top: "48%",
  right: "-8%",
  delay: "2s",
},
  {
    name: "Python",
    icon: SiPython,
    top: "66%",
    right: "-8%",
    delay: "3s",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    bottom: "14%",
    left: "2%",
    delay: "4s",
  },
  {
    name: "Prisma",
    icon: SiPrisma,
    bottom: "-1%",
    left: "42%",
    delay: "5s",
  },
  {
    name: "HTML5",
    icon: SiHtml5,
    bottom: "6%",
    right: "18%",
    delay: "6s",
  },
  {
    name: "CSS",
    icon: SiCss,
    top: "-3%",
    left: "46%",
    delay: "7s",
  },
{
  name: "JavaScript",
  icon: SiJavascript,
  top: "38%",
  left: "-4%",
  delay: "8s",
},
];

export default function FloatingTechBadges() {
  return (
    <>
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.name}
            style={{
              top: badge.top,
              left: badge.left,
              right: badge.right,
              bottom: badge.bottom,
              animationDelay: badge.delay,
            }}
            className="absolute z-20 hidden lg:flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/80 px-4 py-3 backdrop-blur-xl shadow-xl transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-cyan-500/30 animate-[badgeFloat_6s_ease-in-out_infinite]"
          >
            <Icon className="text-xl text-cyan-400" />

            <span className="text-sm font-semibold text-white">
              {badge.name}
            </span>
          </div>
        );
      })}
    </>
  );
}