import Introduction from "@/components/Introduction/Introduction";
import FirstImpressions from "@/components/FirstImpressions/FirstImpressions";
import SkillsCertifications from "@/components/SkillsCertifications/SkillsCertifications";
import HomeProjects from "@/components/HomeProjects/HomeProjects";
import ModernTimeline from "@/components/CV/ModernTimeline/ModernTimeline";

export default function HomePage() {
  return (
    <>
      <Introduction />
      <FirstImpressions />
      <SkillsCertifications />
      <HomeProjects />
      <ModernTimeline />
    </>
  );
}
