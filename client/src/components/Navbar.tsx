/*
 * STELLAR BLACK — Navbar Component
 * Glass morphism nav with gold accent, sticky on scroll
 * Sections: Home, Experience, Skills, Education, Achievements
 */
import { useEffect, useState } from "react";

const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "FEATURED", href: "#featured" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string, label: string) => {
    setActive(label);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(5, 8, 16, 0.92)"
          : "linear-gradient(to bottom, rgba(5,8,16,0.8), transparent)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(200, 169, 110, 0.12)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #C8A96E, #F0D898)",
              boxShadow: "0 0 20px rgba(200, 169, 110, 0.4)",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#050810",
              }}
            >
              AK
            </span>
          </div>
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#F0EDE8",
                letterSpacing: "0.05em",
              }}
            >
              AJAY KEDIA
            </div>
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.6rem",
                color: "#C8A96E",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              ULTRA PRIME
            </div>
          </div>
        </div>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href, item.label)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: active === item.label ? "#C8A96E" : "rgba(240, 237, 232, 0.6)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                background: "none",
                border: "none",
                padding: 0,
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (active !== item.label) {
                  (e.target as HTMLElement).style.color = "#F0EDE8";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.label) {
                  (e.target as HTMLElement).style.color = "rgba(240, 237, 232, 0.6)";
                }
              }}
            >
              {item.label}
              {active === item.label && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "#C8A96E",
                    boxShadow: "0 0 6px rgba(200, 169, 110, 0.6)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:ajaykedia1992@gmail.com"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            color: "#050810",
            background: "linear-gradient(135deg, #C8A96E, #F0D898)",
            padding: "0.5rem 1.25rem",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "all 0.2s ease",
            boxShadow: "0 0 20px rgba(200, 169, 110, 0.3)",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.boxShadow = "0 0 30px rgba(200, 169, 110, 0.6)";
            (e.target as HTMLElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(200, 169, 110, 0.3)";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          HIRE ME
        </a>
      </div>
    </nav>
  );
}
