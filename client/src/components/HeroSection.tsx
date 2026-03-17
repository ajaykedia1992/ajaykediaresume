/*
 * STELLAR BLACK — HeroSection Component
 * Full-screen cinematic hero with star field bg, animated text reveal,
 * floating stats counters, and "Now Playing" indicator
 * Assets: hero-bg (milky way), profile-glow (golden ring)
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663345648637/USHtrkGwNZBa9PVUFF9jTx/hero-bg-gH7eLaYDHPwdkv7om8gmZc.webp";
const PROFILE_GLOW = "https://d2xsxph8kpxj0f.cloudfront.net/310519663345648637/USHtrkGwNZBa9PVUFF9jTx/profile-glow-PRq3erQFfHDpRQbTFWLghF.webp";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 7, suffix: "", label: "Companies" },
  { value: 30, suffix: "M+", label: "Products Scaled" },
  { value: 4, suffix: "", label: "Countries" },
];

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <div ref={ref} style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2.5rem", color: "#C8A96E", lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

const roles = ["Business Engineer", "Software Architect", "Data Scientist", "Tech Innovator"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToFeatured = () => {
    document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050810" }}
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.35,
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(5,8,16,0.95) 0%, rgba(5,8,16,0.6) 50%, rgba(5,8,16,0.3) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(5,8,16,1) 0%, transparent 40%)",
        }}
      />

      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(200, 169, 110, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text content */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Now Playing badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="pulse-dot" />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  color: "#4ade80",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                NOW AVAILABLE
              </span>
            </div>
            <div
              style={{
                width: "1px",
                height: "12px",
                background: "rgba(200, 169, 110, 0.3)",
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "#C8A96E",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              SEATTLE, WA
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              color: "#F0EDE8",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            Ajay
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #C8A96E 0%, #F0D898 50%, #C8A96E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Kedia
            </span>
          </h1>

          {/* Animated role */}
          <div className="flex items-center gap-3 mb-6" style={{ minHeight: "2.5rem" }}>
            <div
              style={{
                width: "3px",
                height: "2rem",
                background: "linear-gradient(to bottom, #C8A96E, #4F8EF7)",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                fontWeight: 500,
                color: "#8892A4",
                letterSpacing: "0.02em",
              }}
            >
              {displayText}
              <span
                style={{
                  color: "#C8A96E",
                  animation: "blink 1s step-end infinite",
                }}
              >
                |
              </span>
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "1rem",
              color: "rgba(240, 237, 232, 0.6)",
              lineHeight: 1.8,
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            Results-driven professional with over 10 years of experience in business engineering,
            software development, and data science. Currently leading technical innovation at{" "}
            <span style={{ color: "#4F8EF7", fontWeight: 600 }}>Meta Platforms</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={scrollToFeatured}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "linear-gradient(135deg, #C8A96E, #F0D898)",
                color: "#050810",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 0 30px rgba(200, 169, 110, 0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(200, 169, 110, 0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(200, 169, 110, 0.4)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5,3 19,12 5,21" />
              </svg>
              EXPLORE CAREER
            </button>

            <a
              href="mailto:ajaykedia1992@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "transparent",
                color: "#F0EDE8",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                padding: "0.85rem 2rem",
                borderRadius: "4px",
                border: "1px solid rgba(200, 169, 110, 0.3)",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200, 169, 110, 0.7)";
                (e.currentTarget as HTMLElement).style.background = "rgba(200, 169, 110, 0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(200, 169, 110, 0.3)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              CONTACT
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 mt-6">
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "rgba(136, 146, 164, 0.6)",
                textTransform: "uppercase",
              }}
            >
              Connect
            </span>
            <div style={{ height: "1px", width: "30px", background: "rgba(200, 169, 110, 0.2)" }} />
            <a
              href="https://linkedin.com/in/ajay-kedia"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(240, 237, 232, 0.4)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8A96E")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(240, 237, 232, 0.4)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="mailto:ajaykedia1992@gmail.com"
              style={{ color: "rgba(240, 237, 232, 0.4)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8A96E")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(240, 237, 232, 0.4)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
            <a
              href="tel:+17202031694"
              style={{ color: "rgba(240, 237, 232, 0.4)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8A96E")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(240, 237, 232, 0.4)")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Profile visual + stats */}
        <div
          className="flex flex-col items-center gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          {/* Profile glow image */}
          <div className="relative flex items-center justify-center">
            <img
              src={PROFILE_GLOW}
              alt="Profile glow"
              className="float-anim"
              style={{
                width: "280px",
                height: "280px",
                objectFit: "cover",
                borderRadius: "50%",
                opacity: 0.9,
              }}
            />
            {/* Center initials */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: "none" }}
            >
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(200,169,110,0.15) 0%, rgba(5,8,16,0.8) 70%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "3rem",
                    color: "#C8A96E",
                    lineHeight: 1,
                  }}
                >
                  AK
                </span>
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.55rem",
                    letterSpacing: "0.25em",
                    color: "rgba(200, 169, 110, 0.6)",
                    textTransform: "uppercase",
                  }}
                >
                  META · SEATTLE
                </span>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="gradient-border p-4 text-center"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <div
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.7rem",
                    color: "rgba(136, 146, 164, 0.8)",
                    marginTop: "0.25rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #050810)",
          pointerEvents: "none",
        }}
      />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 0.5 }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "#C8A96E",
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #C8A96E, transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
