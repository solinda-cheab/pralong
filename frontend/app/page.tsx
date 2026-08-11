import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import UseCases from "@/components/UseCases";
import FeatureShowcase from "@/components/FeatureShowcase";
import BannerPair from "@/components/BannerPair";
import ImpactStats from "@/components/ImpactStats";
import Testimonial from "@/components/Testimonial";
import BlogGrid from "@/components/BlogGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
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
  );
}
