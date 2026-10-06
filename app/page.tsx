import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import Services from "@/components/Services";
import IndustrialPhoto from "@/components/IndustrialPhoto";
import WhyWarikoo from "@/components/WhyWarikoo";
import HowWeWork from "@/components/HowWeWork";
import ExperienceCredentials from "@/components/ExperienceCredentials";
import ProjectExperiencePreview from "@/components/ProjectExperiencePreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const contactHref = "/contact";

export default function Home() {
  return (
    <>
      <Header contactHref={contactHref} />
      <main id="main-content" tabIndex={-1}>
        <Hero contactHref={contactHref} />
        <Positioning />
        <Services />
        <IndustrialPhoto />
        <WhyWarikoo />
        <HowWeWork />
        <ExperienceCredentials />
        <ProjectExperiencePreview />
        <FinalCTA contactHref={contactHref} />
      </main>
      <Footer />
    </>
  );
}
