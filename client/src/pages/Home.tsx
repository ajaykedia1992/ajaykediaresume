/*
 * STELLAR BLACK — Home Page
 * Ultra-premium Netflix-inspired resume for Ajay Kedia
 * Sections: Hero → Ticker → Featured → Meta Projects Hub → Experience → Skills → Ultra Prime → Education → Achievements → Footer
 */
import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsTicker from "@/components/StatsTicker";
import FeaturedSection from "@/components/FeaturedSection";
import AIProjectsSection from "@/components/AIProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import UltraPrimeFeatures from "@/components/UltraPrimeFeatures";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#050810", color: "#F0EDE8", overflowX: "hidden" }}
    >
      {/* Animated star field background */}
      <StarField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 1 }}>
        <HeroSection />
        <StatsTicker />
        <FeaturedSection />
        <AIProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <UltraPrimeFeatures />
        <EducationSection />
        <AchievementsSection />
      </main>

      <Footer />

      {/* Floating command palette (⌘K) */}
      <CommandPalette />
    </div>
  );
}
