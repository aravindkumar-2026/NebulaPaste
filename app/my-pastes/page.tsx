import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";

import {
  FileCode2,
  Pin,
  Code2,
  CalendarDays,
} from "lucide-react";

import { prisma } from "@/lib/prisma";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

export default async function MyPastesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const pastes = await prisma.paste.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const today = new Date();

  const total = pastes.length;

  const pinned = pastes.filter(
    (p) => p.pinned
  ).length;

  const languages = new Set(
    pastes.map((p) => p.language)
  ).size;

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
      title: "Total Pastes",
      value: total,
      icon: FileCode2,
      color: "text-cyan-400",
    },
    {
      title: "Pinned",
      value: pinned,
      icon: Pin,
      color: "text-yellow-400",
    },
    {
      title: "Languages",
      value: languages,
      icon: Code2,
      color: "text-violet-400",
    },
    {
      title: "Today",
      value: todayCount,
      icon: CalendarDays,
      color: "text-emerald-400",
    },
  ];

  return (
    <Section>

      <Container>

        <SectionTitle
          title="My Dashboard"
          subtitle="Manage all your snippets from one place."
        />

        {/* Stats */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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

        {/* My Pastes */}

        <div className="mt-20">

          <SectionTitle
            title="My Pastes"
            subtitle={`${total} snippets available`}
          />

          {total === 0 ? (
            <GlassCard className="mt-8 p-16 text-center">

              <h2 className="text-3xl font-bold text-white">
                No snippets yet
              </h2>

              <p className="mt-4 text-zinc-400">
                Create your first paste.
              </p>

            </GlassCard>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {pastes.map((paste) => (
                <Link
                  key={paste.id}
                  href={`/paste/${paste.id}`}
                >
                  <GlassCard className="group h-full p-7">

                    <h2 className="line-clamp-1 text-2xl font-bold text-white">
                      {paste.title}
                    </h2>

                    {paste.description && (
                      <p className="mt-4 line-clamp-2 text-zinc-400">
                        {paste.description}
                      </p>
                    )}

                    <div className="mt-8 flex items-center justify-between">

                      <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-sm text-cyan-400">
                        {paste.language}
                      </span>

                      <span className="text-sm text-zinc-500">
                        {new Date(
                          paste.createdAt
                        ).toLocaleDateString()}
                      </span>

                    </div>

                  </GlassCard>
                </Link>
              ))}

            </div>
          )}

        </div>

      </Container>

    </Section>
  );
}