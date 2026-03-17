/*
 * STELLAR BLACK — EducationSection Component
 * Cinematic education cards with course highlights
 */
import { useState } from "react";

const education = [
  {
    degree: "Masters of Science",
    field: "Computer Science",
    institution: "University of Colorado",
    location: "Boulder, CO, USA",
    period: "Aug 2017 — Aug 2019",
    color: "#4F8EF7",
    courses: ["NLP", "Computer Vision", "Machine Learning", "Big Data", "Probability & Statistics"],
    icon: "🎓",
    gpa: "Graduate",
    highlight: "Kaggle Competition Winner 2018",
  },
  {
    degree: "B.Tech",
    field: "Information Technology",
    institution: "Vellore Institute of Technology",
    location: "Vellore, India",
    period: "Jul 2011 — May 2015",
    color: "#C8A96E",
    courses: ["Data Structure", "Artificial Intelligence", "Data Mining", "OS", "Computer Graphics"],
    icon: "🏛️",
    gpa: "Undergraduate",
    highlight: "Event Coordinator — Riviera & Gravitas",
  },
];

export default function EducationSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="education" className="relative py-16" style={{ background: "#050810" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="section-label">ACADEMIC FOUNDATION</span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#F0EDE8",
                marginTop: "0.25rem",
              }}
            >
              Education
            </h2>
          </div>
          <div className="neon-line flex-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer"
              style={{
                background: hovered === i
                  ? `linear-gradient(135deg, ${edu.color}18 0%, ${edu.color}06 100%)`
                  : `linear-gradient(135deg, ${edu.color}0D 0%, ${edu.color}03 100%)`,
                border: `1px solid ${hovered === i ? edu.color + "50" : edu.color + "20"}`,
                padding: "2rem",
                transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hovered === i ? `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${edu.color}15` : "none",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background number */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.5rem",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "6rem",
                  fontWeight: 700,
                  color: `${edu.color}08`,
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {edu.icon}
              </div>

              {/* Degree */}
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: edu.color,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                {edu.gpa} · {edu.period}
              </div>

              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "1.8rem",
                  color: "#F0EDE8",
                  lineHeight: 1.1,
                  marginBottom: "0.25rem",
                }}
              >
                {edu.degree}
              </h3>

              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: edu.color,
                  marginBottom: "0.5rem",
                }}
              >
                {edu.field}
              </div>

              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.82rem",
                  color: "rgba(136, 146, 164, 0.8)",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                {edu.institution} · {edu.location}
              </div>

              {/* Courses */}
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  color: "rgba(136, 146, 164, 0.6)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                KEY COURSES
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    style={{
                      background: `${edu.color}10`,
                      border: `1px solid ${edu.color}25`,
                      color: edu.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.65rem",
                      padding: "0.25rem 0.6rem",
                      borderRadius: "4px",
                    }}
                  >
                    {course}
                  </span>
                ))}
              </div>

              {/* Highlight */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: `${edu.color}08`,
                  border: `1px solid ${edu.color}20`,
                  borderRadius: "6px",
                  padding: "0.6rem 0.9rem",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill={edu.color} stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.78rem",
                    color: edu.color,
                    fontWeight: 500,
                  }}
                >
                  {edu.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
