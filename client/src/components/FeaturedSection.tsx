/*
 * STELLAR BLACK — FeaturedSection Component
 * Netflix-style hero banner for current/featured role (Meta)
 * Full-width cinematic card with tech background, role details, tags
 */
import { useState } from "react";

const META_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663345648637/USHtrkGwNZBa9PVUFF9jTx/meta-card-bg-EQZUMgkvFZTxcEjhxfKD4e.webp";

const highlights = [
  "Real-time API Debugging",
  "Facebook & Instagram Ads",
  "Cross-functional Leadership",
  "Business Solutions Architecture",
  "Performance Analytics",
  "Meta Ads Ecosystem",
];

export default function FeaturedSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="featured" className="relative py-8" style={{ background: "#050810" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">FEATURED ROLE</span>
          <div className="neon-line flex-1" />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.65rem",
              color: "#4ade80",
              letterSpacing: "0.15em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span className="pulse-dot" style={{ width: "6px", height: "6px" }} />
            CURRENTLY ACTIVE
          </span>
        </div>

        {/* Featured card */}
        <div
          className="relative overflow-hidden rounded-xl"
          style={{
            background: "#0A0F1E",
            border: "1px solid rgba(200, 169, 110, 0.2)",
            minHeight: "420px",
          }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${META_BG})`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              opacity: 0.4,
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, rgba(10,15,30,0.98) 0%, rgba(10,15,30,0.7) 60%, rgba(10,15,30,0.2) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-10 lg:p-14 max-w-2xl">
            {/* Company badge */}
            <div className="flex items-center gap-3 mb-6">
              <div
                style={{
                  background: "linear-gradient(135deg, rgba(79,142,247,0.2), rgba(79,142,247,0.05))",
                  border: "1px solid rgba(79,142,247,0.3)",
                  borderRadius: "6px",
                  padding: "0.4rem 1rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#4F8EF7",
                  letterSpacing: "0.1em",
                }}
              >
                META PLATFORMS INC.
              </div>
              <div
                style={{
                  background: "rgba(200, 169, 110, 0.1)",
                  border: "1px solid rgba(200, 169, 110, 0.25)",
                  borderRadius: "4px",
                  padding: "0.3rem 0.75rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#C8A96E",
                }}
              >
                Mar 2020 — Present
              </div>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                color: "#F0EDE8",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Business Engineer
            </h2>

            {/* Location */}
            <div
              className="flex items-center gap-2 mb-5"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(136, 146, 164, 0.8)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Seattle, WA, USA
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(240, 237, 232, 0.65)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Leading real-time technical troubleshooting, API debugging, and integration support
              for Facebook and Instagram ads. Driving business innovation through cross-functional
              collaboration and strategic solution delivery.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-6">
              {highlights.map((h) => (
                <span key={h} className="skill-tag">{h}</span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setExpanded(!expanded)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(255,255,255,0.1)",
                  color: "#F0EDE8",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  padding: "0.6rem 1.25rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
                {expanded ? "LESS INFO" : "MORE INFO"}
              </button>
              <a
                href="https://www.meta.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(136, 146, 164, 0.7)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8A96E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(136, 146, 164, 0.7)")}
              >
                Visit Company →
              </a>
            </div>

            {/* Expanded details */}
            {expanded && (
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(200, 169, 110, 0.15)",
                  animation: "cinematic-reveal 0.5s ease forwards",
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Lead real-time technical troubleshooting and API debugging",
                    "Designed and maintained software applications for diverse businesses",
                    "Provided technical support for clients with complex needs",
                    "Gathered client requirements through workshops",
                    "Conducted code reviews to ensure best practices",
                    "Analyzed user data to identify trends for product development",
                    "Configured Meta ads ecosystem per best practice guidelines",
                    "Documented common problems and maintained knowledge base",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "0.82rem",
                        color: "rgba(240, 237, 232, 0.6)",
                        lineHeight: 1.6,
                      }}
                    >
                      <span style={{ color: "#C8A96E", marginTop: "2px", flexShrink: 0 }}>◆</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right side: tenure badge */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
            style={{ zIndex: 10 }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "2px solid transparent",
                background: "linear-gradient(#0A0F1E, #0A0F1E) padding-box, linear-gradient(135deg, #C8A96E, #4F8EF7) border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 30px rgba(200, 169, 110, 0.2)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#C8A96E",
                  lineHeight: 1,
                }}
              >
                5+
              </span>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.55rem",
                  color: "rgba(200, 169, 110, 0.7)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                YEARS
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.6rem",
                color: "rgba(136, 146, 164, 0.6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              TENURE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
