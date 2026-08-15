import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import RealMeSection from "@/components/sections/RealMeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import GallerySection from "@/components/sections/GallerySection";
import ContactSection from "@/components/sections/ContactSection";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-[#2b2b2b]">
      <HeroSection />
      <SectionDivider text="and then..." />
      <AboutSection />
      <SectionDivider text="but really," />
      <RealMeSection />
      <SectionDivider text="also," />
      <SkillsSection />
      <SectionDivider text="here's what i've made" />
      <ProjectsSection />
      <SectionDivider text="meanwhile," />
      <ExperienceSection />
      <SectionDivider text="oh, and also" />
      <AchievementsSection />
      <SectionDivider text="and on the side," />
      <GallerySection />
      <SectionDivider text="so..." />
      <ContactSection />
    </main>
  );
}