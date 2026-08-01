import Hero from "@/components/home/Hero";
import FeatureCards from "@/components/home/FeatureCards";
import RecentPastes from "@/components/home/RecentPastes";
import Reveal from "@/components/ui/Reveal";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal>
        <FeatureCards />
      </Reveal>

      <Reveal delay={0.2}>
        <RecentPastes />
      </Reveal>
    </>
  );
}