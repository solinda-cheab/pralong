import Navbar from "@/components/marketing/Navbar";
import Hero from "@/components/marketing/HeroSection";
import LogoMarquee from "@/components/marketing/LogoMarquee";
import UseCases from "@/components/marketing/UseCases";
import FeatureShowcase from "@/components/marketing/FeatureShowcase";
import BannerPair from "@/components/marketing/BannerPair";
import ImpactStats from "@/components/marketing/ImpactStats";
import Testimonial from "@/components/marketing/Testimonial";
import BlogGrid from "@/components/marketing/BlogGrid";
import CTA from "@/components/marketing/CTA";
import Footer from "@/components/marketing/Footer";
import HydrationGate from "../HydrationGate";

export default function Home() {
  return (
    <HydrationGate>
      <main>
        <Navbar />
        <Hero />
        <LogoMarquee />
        <UseCases />
        <FeatureShowcase />
        <BannerPair />
        <ImpactStats />
        <Testimonial />
        <BlogGrid />
        <CTA />
        <Footer />
      </main>
    </HydrationGate>
  );
}
