/*
 * STELLAR BLACK — AchievementsSection Component
 * Premium achievement cards with golden glow, Kaggle winner highlight
 */

const TIMELINE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663345648637/USHtrkGwNZBa9PVUFF9jTx/timeline-bg-B5UnhNycdHvbRhfpY.webp";

const achievements = [
  {
    title: "Kaggle Competition Winner",
    year: "2018",
    description: "Won the Kaggle competition held between MS & PhD students for the Feature Engineering course (CSCI 5622) at University of Colorado, Spring 2018.",
    link: "https://www.kaggle.com/c/feature-engineering-csci-5622-spring-2018/leaderboard",
    linkLabel: "View Leaderboard",
    color: "#C8A96E",
    icon: "🏆",
    badge: "WINNER",
    badgeColor: "#C8A96E",
  },
  {
    title: "CS Graduate Student Association",
    year: "2018",
    description: "Organized social events and provided support to connect Computer Science students at the University of Colorado Boulder campus.",
    link: null,
    linkLabel: null,
    color: "#4F8EF7",
    icon: "🎓",
    badge: "LEADERSHIP",
    badgeColor: "#4F8EF7",
  },
  {
    title: "Event Coordinator — Riviera & Gravitas",
    year: "2012 / 2014",
    description: "Coordinated international technical festivals at VIT University — Riviera (cultural) and Gravitas (technical) — two of India's largest university fests.",
    link: null,
    linkLabel: null,
    color: "#A78BFA",
    icon: "🎪",
    badge: "COORDINATOR",
    badgeColor: "#A78BFA",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-16" style={{ background: "#050810" }}>
      {/* Timeline background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663345648637/USHtrkGwNZBa9PVUFF9jTx/timeline-bg-B5UnhNycdHvbSB4bnRhfpY.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="section-label">HALL OF FAME</span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#F0EDE8",
                marginTop: "0.25rem",
              }}
            >
              Achievements & Activities
            </h2>
          </div>
          <div className="neon-line flex-1" />
        </div>

        {/* Achievement cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${ach.color}12 0%, ${ach.color}04 100%)`,
                border: `1px solid ${ach.color}25`,
                padding: "2rem",
                transition: "all 0.4s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${ach.color}20`;
                (e.currentTarget as HTMLElement).style.borderColor = `${ach.color}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = `${ach.color}25`;
              }}
            >
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  right: "1.25rem",
                  background: `${ach.badgeColor}15`,
                  border: `1px solid ${ach.badgeColor}30`,
                  borderRadius: "4px",
                  padding: "0.2rem 0.6rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: ach.badgeColor,
                  letterSpacing: "0.1em",
                }}
              >
                {ach.badge}
              </div>

              {/* Icon */}
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{ach.icon}</div>

              {/* Year */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: ach.color,
                  marginBottom: "0.5rem",
                  letterSpacing: "0.1em",
                }}
              >
                {ach.year}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  color: "#F0EDE8",
                  lineHeight: 1.2,
                  marginBottom: "1rem",
                }}
              >
                {ach.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(240, 237, 232, 0.6)",
                  lineHeight: 1.7,
                  marginBottom: ach.link ? "1.25rem" : "0",
                }}
              >
                {ach.description}
              </p>

              {/* Link */}
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: ach.color,
                    textDecoration: "none",
                    letterSpacing: "0.05em",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.7")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
                >
                  {ach.linkLabel}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div
          className="relative overflow-hidden rounded-xl text-center py-16 px-8"
          style={{
            background: "linear-gradient(135deg, rgba(200,169,110,0.08) 0%, rgba(79,142,247,0.05) 100%)",
            border: "1px solid rgba(200, 169, 110, 0.2)",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div className="relative z-10">
            <div className="section-label mb-4">READY TO COLLABORATE</div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "#F0EDE8",
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Let's Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C8A96E, #F0D898)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Extraordinary
              </span>
            </h2>
            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "1rem",
                color: "rgba(240, 237, 232, 0.55)",
                maxWidth: "500px",
                margin: "0 auto 2rem",
                lineHeight: 1.8,
              }}
            >
              10+ years of experience. Proven track record. Ready to drive your next innovation.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:ajaykedia1992@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "linear-gradient(135deg, #C8A96E, #F0D898)",
                  color: "#050810",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  padding: "0.9rem 2.25rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  boxShadow: "0 0 30px rgba(200, 169, 110, 0.4)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(200, 169, 110, 0.7)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(200, 169, 110, 0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                ajaykedia1992@gmail.com
              </a>
              <a
                href="tel:+17202031694"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "transparent",
                  color: "#F0EDE8",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  padding: "0.9rem 2.25rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(200, 169, 110, 0.3)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200, 169, 110, 0.6)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(200, 169, 110, 0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(200, 169, 110, 0.3)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                +1 720-203-1694
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
