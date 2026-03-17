/*
 * STELLAR BLACK — ExperienceSection Component
 * Netflix-style horizontal scrollable rows of experience cards
 * Each card has holographic hover, company color, tenure badge
 */
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Meta Platforms Inc.",
    role: "Business Engineer",
    period: "Mar 2020 — Present",
    location: "Seattle, WA",
    duration: "5+ yrs",
    color: "#4F8EF7",
    bgGradient: "linear-gradient(135deg, rgba(79,142,247,0.15) 0%, rgba(79,142,247,0.03) 100%)",
    borderColor: "rgba(79,142,247,0.3)",
    highlights: ["API Debugging", "Ads Platform", "Business Solutions", "Cross-functional"],
    description: "Lead real-time technical troubleshooting and API debugging for Facebook and Instagram ads ecosystem.",
    rating: 5,
  },
  {
    company: "Proofpoint Inc.",
    role: "Senior Software Engineer",
    period: "Aug 2019 — Mar 2020",
    location: "Broomfield, CO",
    duration: "8 mos",
    color: "#E8A87C",
    bgGradient: "linear-gradient(135deg, rgba(232,168,124,0.12) 0%, rgba(232,168,124,0.03) 100%)",
    borderColor: "rgba(232,168,124,0.25)",
    highlights: ["Java", "URL Defense", "Spam Protection", "Fraud Detection"],
    description: "Developed and maintained software applications using Java. Managed URL Defense, Spam Protection, and Forensics Reports.",
    rating: 4,
  },
  {
    company: "Rakuten Inc.",
    role: "Data Scientist Intern",
    period: "May 2018 — Aug 2018",
    location: "San Mateo, CA",
    duration: "4 mos",
    color: "#C8A96E",
    bgGradient: "linear-gradient(135deg, rgba(200,169,110,0.12) 0%, rgba(200,169,110,0.03) 100%)",
    borderColor: "rgba(200,169,110,0.25)",
    highlights: ["Random Forest", "XGBoost", "TensorFlow", "NLP"],
    description: "Conducted exploratory data analysis, feature engineering, and implemented supervised learning algorithms for user segmentation.",
    rating: 4,
  },
  {
    company: "University of Colorado",
    role: "Teaching Assistant",
    period: "Jan 2018 — May 2018",
    location: "Boulder, CO",
    duration: "5 mos",
    color: "#A78BFA",
    bgGradient: "linear-gradient(135deg, rgba(167,139,250,0.12) 0%, rgba(167,139,250,0.03) 100%)",
    borderColor: "rgba(167,139,250,0.25)",
    highlights: ["Full Stack Dev", "Web & Mobile", "iOS & Android", "70+ Students"],
    description: "Instructed over 70 students in full stack development for web, mobile, iOS, and Android applications.",
    rating: 4,
  },
  {
    company: "Morgan Stanley",
    role: "Senior Software Engineer",
    period: "Mar 2017 — Aug 2017",
    location: "Bengaluru, India",
    duration: "6 mos",
    color: "#34D399",
    bgGradient: "linear-gradient(135deg, rgba(52,211,153,0.12) 0%, rgba(52,211,153,0.03) 100%)",
    borderColor: "rgba(52,211,153,0.25)",
    highlights: ["High Availability", "Investment Portal", "NAV Reports", "Algorithms"],
    description: "Designed high-availability solutions and created a portal for targeted investors to visualize investment behaviors.",
    rating: 4,
  },
  {
    company: "Snapdeal",
    role: "Software Developer",
    period: "Jul 2015 — Mar 2017",
    location: "Bengaluru, India",
    duration: "1.5 yrs",
    color: "#F87171",
    bgGradient: "linear-gradient(135deg, rgba(248,113,113,0.12) 0%, rgba(248,113,113,0.03) 100%)",
    borderColor: "rgba(248,113,113,0.25)",
    highlights: ["30M Products", "Notification System", "Recommendation Engine", "Selfie Feature"],
    description: "Stored and analyzed ratings for 30M products. Developed notification system and FAQ/recommendation system.",
    rating: 4,
  },
  {
    company: "Trimble Inc.",
    role: "Graduate Technical Intern",
    period: "Dec 2014 — Jul 2015",
    location: "Chennai, India",
    duration: "8 mos",
    color: "#60A5FA",
    bgGradient: "linear-gradient(135deg, rgba(96,165,250,0.12) 0%, rgba(96,165,250,0.03) 100%)",
    borderColor: "rgba(96,165,250,0.25)",
    highlights: ["C#", "SQL", "JavaScript", "Database Admin"],
    description: "Converted binary hydraulic data to digital format. Developed and tested software using C#, SQL, and JavaScript.",
    rating: 3,
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="netflix-card"
      style={{
        width: "300px",
        minWidth: "300px",
        borderRadius: "12px",
        background: hovered ? exp.bgGradient.replace("0.15", "0.22").replace("0.12", "0.18") : exp.bgGradient,
        border: `1px solid ${hovered ? exp.borderColor.replace("0.3", "0.6").replace("0.25", "0.5") : exp.borderColor}`,
        padding: "1.5rem",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${exp.color}20` : "none",
        transform: hovered ? "scale(1.05) translateY(-8px)" : "scale(1) translateY(0)",
        transition: "all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer effect */}
      {hovered && (
        <div
          className="shimmer"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Index number */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "3rem",
          fontWeight: 700,
          color: `${exp.color}15`,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Duration badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: `${exp.color}15`,
          border: `1px solid ${exp.color}30`,
          borderRadius: "4px",
          padding: "0.2rem 0.6rem",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.65rem",
          color: exp.color,
          marginBottom: "1rem",
        }}
      >
        {exp.duration}
      </div>

      {/* Company */}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: exp.color,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "0.3rem",
        }}
      >
        {exp.company}
      </div>

      {/* Role */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          fontSize: "1.4rem",
          color: "#F0EDE8",
          lineHeight: 1.2,
          marginBottom: "0.5rem",
        }}
      >
        {exp.role}
      </h3>

      {/* Period & location */}
      <div
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.72rem",
          color: "rgba(136, 146, 164, 0.7)",
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <span>{exp.period}</span>
        <span>{exp.location}</span>
      </div>

      {/* Description (shown on hover) */}
      <div
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.8rem",
          color: "rgba(240, 237, 232, 0.6)",
          lineHeight: 1.6,
          marginBottom: "1rem",
          maxHeight: hovered ? "100px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {exp.description}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.highlights.map((tag) => (
          <span
            key={tag}
            style={{
              background: `${exp.color}10`,
              border: `1px solid ${exp.color}25`,
              color: exp.color,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              padding: "0.2rem 0.5rem",
              borderRadius: "3px",
              whiteSpace: "nowrap",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rating stars */}
      <div className="flex items-center gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill={i < exp.rating ? exp.color : "transparent"}
            stroke={exp.color}
            strokeWidth="2"
            style={{ opacity: i < exp.rating ? 1 : 0.3 }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.6rem",
            color: "rgba(136, 146, 164, 0.5)",
            marginLeft: "4px",
          }}
        >
          IMPACT RATING
        </span>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir === "right" ? 340 : -340, behavior: "smooth" });
    }
  };

  return (
    <section id="experience" className="relative py-16" style={{ background: "#050810" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="section-label">CAREER JOURNEY</span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#F0EDE8",
                marginTop: "0.25rem",
              }}
            >
              Work Experience
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(200, 169, 110, 0.1)",
                border: "1px solid rgba(200, 169, 110, 0.2)",
                color: "#C8A96E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200, 169, 110, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200, 169, 110, 0.1)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(200, 169, 110, 0.1)",
                border: "1px solid rgba(200, 169, 110, 0.2)",
                color: "#C8A96E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200, 169, 110, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(200, 169, 110, 0.1)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Netflix row */}
        <div
          ref={rowRef}
          className="netflix-row"
          style={{ paddingBottom: "1.5rem", paddingTop: "0.5rem" }}
        >
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>

        {/* Timeline view */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">CAREER TIMELINE</span>
            <div className="neon-line flex-1" />
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "120px",
                top: 0,
                bottom: 0,
                width: "1px",
                background: "linear-gradient(to bottom, #C8A96E, rgba(200,169,110,0.1))",
              }}
            />
            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-center gap-6" style={{ paddingLeft: "0" }}>
                  {/* Year */}
                  <div
                    style={{
                      width: "100px",
                      textAlign: "right",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.7rem",
                      color: "rgba(136, 146, 164, 0.6)",
                      flexShrink: 0,
                    }}
                  >
                    {exp.period.split("—")[0].trim()}
                  </div>
                  {/* Dot */}
                  <div
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: exp.color,
                      flexShrink: 0,
                      boxShadow: `0 0 10px ${exp.color}60`,
                      marginLeft: "15px",
                    }}
                  />
                  {/* Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", flex: 1 }}>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#F0EDE8",
                      }}
                    >
                      {exp.role}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "0.75rem",
                        color: exp.color,
                      }}
                    >
                      @ {exp.company}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "0.65rem",
                        color: "rgba(136, 146, 164, 0.5)",
                      }}
                    >
                      {exp.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
