import Introduction from "@/components/Introduction/Introduction";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import ModernTimeline from "@/components/CV/ModernTimeline/ModernTimeline";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <About />
      <ModernTimeline />
      <Skills />
    </>
  );
}
