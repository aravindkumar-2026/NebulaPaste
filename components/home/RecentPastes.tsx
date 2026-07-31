import {
  FileCode2,
  Pin,
  Code2,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";
import { prisma } from "@/lib/prisma";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";
import SearchPastes from "./SearchPastes";

export default async function RecentPastes() {
  const pastes = await prisma.paste.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 20,
  });

  const totalPastes = pastes.length;
  const pinned = pastes.filter((p) => p.pinned).length;
  const languages = new Set(
    pastes.map((p) => p.language)
  ).size;

  const today = new Date();

  const todayCount = pastes.filter((p) => {
    const d = new Date(p.createdAt);

    return (
      d.getDate() === today.getDate() &&
      d.getMonth() === today.getMonth() &&
      d.getFullYear() === today.getFullYear()
    );
  }).length;

  const stats = [
    {
      icon: FileCode2,
      title: "Total Pastes",
      value: totalPastes,
      color: "text-cyan-400",
    },
    {
      icon: Pin,
      title: "Pinned",
      value: pinned,
      color: "text-yellow-400",
    },
    {
      icon: Code2,
      title: "Languages",
      value: languages,
      color: "text-violet-400",
    },
    {
      icon: CalendarDays,
      title: "Today",
      value: todayCount,
      color: "text-emerald-400",
    },
  ];

  return (
    <>
      <Section>

        <Container>

          <SectionTitle
            title="Dashboard"
            subtitle="A quick overview of your snippets."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <GlassCard
                  key={item.title}
                  className="group p-7"
                >
                  <div className="flex items-center justify-between">

                    <div
                      className={`rounded-2xl bg-zinc-800 p-4 ${item.color}`}
                    >
                      <Icon size={26} />
                    </div>

                    <ArrowRight className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

                  </div>

                  <h2 className="mt-8 text-5xl font-black text-white">
                    {item.value}
                  </h2>

                  <p className="mt-3 text-zinc-400">
                    {item.title}
                  </p>

                </GlassCard>
              );
            })}

          </div>

        </Container>

      </Section>

      <Section>

        <Container>

          <SectionTitle
            title="Recent Pastes"
            subtitle="Your latest snippets."
          />

          <div className="mt-12">
            <SearchPastes pastes={pastes} />
          </div>

        </Container>

      </Section>
    </>
  );
}