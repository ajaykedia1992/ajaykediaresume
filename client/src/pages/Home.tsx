/*
 * STELLAR BLACK — Home Page
 * Ultra-premium Netflix-inspired resume for Ajay Kedia
 * Sections: Hero → Featured → Experience → Skills → Education → Achievements → Footer
 */
import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsSection from "@/components/AchievementsSection";
import UltraPrimeFeatures from "@/components/UltraPrimeFeatures";
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
        <FeaturedSection />
        <ExperienceSection />
        <SkillsSection />
        <UltraPrimeFeatures />
        <EducationSection />
        <AchievementsSection />
      </main>

      <Footer />
    </div>
  );
}
