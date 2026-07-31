import {
  Zap,
  ShieldCheck,
  Database,
  Code2,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with Next.js App Router for instant navigation and excellent performance.",
    color: "text-cyan-400",
  },
  {
    icon: ShieldCheck,
    title: "Secure Sharing",
    description:
      "Share snippets confidently with a clean and reliable backend powered by Prisma.",
    color: "text-emerald-400",
  },
  {
    icon: Database,
    title: "Persistent Storage",
    description:
      "Every paste is stored in PostgreSQL with fast retrieval and reliable updates.",
    color: "text-violet-400",
  },
  {
    icon: Code2,
    title: "Developer First",
    description:
      "Monaco Editor, syntax highlighting, search, pinning, download and more.",
    color: "text-amber-400",
  },
];

export default function FeatureCards() {
  return (
    <Section>

      <Container>

        <SectionTitle
          title="Built for Developers"
          subtitle="Everything you need to create, manage and share beautiful code snippets."
          center
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <GlassCard
                key={feature.title}
                className="group p-8"
              >
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-zinc-800 p-4 ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {feature.description}
                </p>

                <div className="mt-8 text-cyan-400 transition-all group-hover:translate-x-2">
                  →
                </div>
              </GlassCard>
            );
          })}

        </div>

      </Container>

    </Section>
  );
}