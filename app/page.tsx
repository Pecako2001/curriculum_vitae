import Introduction from "@/components/Introduction/Introduction";
import ModernTimeline from "@/components/CV/ModernTimeline/ModernTimeline";
import About from "@/components/About/About";
import SoftwareExperience from "@/components/SoftwareExperience/SoftwareExperience";
import Contact from "@/components/Homepage/Contact";
import Skills from "@/components/Skills/Skills";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <About />
      <ModernTimeline />
      <SoftwareExperience />
      <Skills />
    </>
  );
}
