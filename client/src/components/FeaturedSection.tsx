/*
 * STELLAR BLACK — FeaturedSection Component
 * Netflix-style hero banner for current/featured role (Meta)
 * Updated with AI project highlights: analytics agent, Metamate, Manus, GenAI video tool
 */
import { useState } from "react";

const META_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663345648637/USHtrkGwNZBa9PVUFF9jTx/meta-card-bg-EQZUMgkvFZTxcEjhxfKD4e.webp";

const highlights = [
  "Analytics Agent Recipes",
  "Metamate Automation",
  "Manus Framework",
  "GenAI Video Generation",
  "Catalog Manager Scaling",
  "Dynamic Ads Revenue",
  "API Debugging",
  "Meta Ads Ecosystem",
];

const aiProjects = [
  {
    icon: "🤖",
    title: "Analytics Agent Recipes",
    color: "#A78BFA",
    desc: "Built intelligent analytics agent recipes that automate data pipeline orchestration, surface actionable insights from ad performance signals, and generate natural-language summaries for business stakeholders.",
  },
  {
    icon: "⚡",
    title: "Metamate Automation",
    color: "#4F8EF7",
    desc: "Engineered Metamate-powered automation workflows to accelerate internal tooling, reduce manual review cycles, and intelligently route support tickets using LLM-based classification.",
  },
  {
    icon: "🧩",
    title: "Manus Framework Integration",
    color: "#34D399",
    desc: "Leveraged the Manus agentic framework to orchestrate multi-step business workflows — from client onboarding to ad creative review — enabling autonomous task execution with human-in-the-loop checkpoints.",
  },
  {
    icon: "🎬",
    title: "GenAI Video Generation Tool",
    color: "#C8A96E",
    desc: "Created a GenAI-powered video generation tool integrated with Catalog Manager, enabling dynamic ad creatives at scale. Drove measurable Meta revenue lift through automated, personalized video ads for dynamic product catalogs.",
  },
];

export default function FeaturedSection() {
  const [expanded, setExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

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
              background:
                "linear-gradient(to right, rgba(10,15,30,0.98) 0%, rgba(10,15,30,0.7) 60%, rgba(10,15,30,0.2) 100%)",
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
              Leading real-time technical troubleshooting, API debugging, and AI-powered innovation
              for Facebook and Instagram ads. Built GenAI tools, agentic automation frameworks, and
              video generation pipelines that directly drive Meta's advertising revenue.
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
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
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
                    "Built analytics agent recipes for automated insight generation",
                    "Engineered Metamate automation for internal workflow acceleration",
                    "Integrated Manus framework for agentic business task orchestration",
                    "Created GenAI video generation tool for dynamic catalog ads",
                    "Scaled Catalog Manager to boost Meta dynamic ads revenue",
                    "Gathered client requirements through workshops",
                    "Conducted code reviews to ensure best practices",
                    "Analyzed user data to identify trends for product development",
                    "Configured Meta ads ecosystem per best practice guidelines",
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
            className="absolute right-8 top-8 hidden lg:flex flex-col items-center gap-3"
            style={{ zIndex: 10 }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "2px solid transparent",
                background:
                  "linear-gradient(#0A0F1E, #0A0F1E) padding-box, linear-gradient(135deg, #C8A96E, #4F8EF7) border-box",
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

        {/* AI Projects mini-cards row */}
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "#A78BFA",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              ✦ AI INITIATIVES AT META
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "linear-gradient(to right, rgba(167,139,250,0.4), transparent)",
              }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiProjects.map((proj, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(activeProject === i ? null : i)}
                style={{
                  background:
                    activeProject === i
                      ? `linear-gradient(135deg, ${proj.color}18, ${proj.color}06)`
                      : "rgba(255,255,255,0.025)",
                  border: `1px solid ${activeProject === i ? proj.color + "50" : "rgba(255,255,255,0.07)"}`,
                  borderRadius: "10px",
                  padding: "1.25rem",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: activeProject === i ? "translateY(-4px)" : "translateY(0)",
                  boxShadow:
                    activeProject === i
                      ? `0 16px 40px rgba(0,0,0,0.4), 0 0 20px ${proj.color}20`
                      : "none",
                }}
                onMouseEnter={(e) => {
                  if (activeProject !== i) {
                    (e.currentTarget as HTMLElement).style.background = `${proj.color}0D`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}30`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeProject !== i) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }
                }}
              >
                <div style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>{proj.icon}</div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: proj.color,
                    letterSpacing: "0.04em",
                    marginBottom: "0.4rem",
                    lineHeight: 1.3,
                  }}
                >
                  {proj.title}
                </div>
                <div
                  style={{
                    maxHeight: activeProject === i ? "200px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.76rem",
                      color: "rgba(240, 237, 232, 0.6)",
                      lineHeight: 1.65,
                      marginTop: "0.5rem",
                    }}
                  >
                    {proj.desc}
                  </p>
                </div>
                {activeProject !== i && (
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.6rem",
                      color: "rgba(136,146,164,0.45)",
                      marginTop: "0.3rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    TAP TO EXPAND
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
