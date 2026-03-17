/*
 * STELLAR BLACK — SkillsSection Component
 * Interactive skill constellation canvas + categorized skill rows
 * Animated progress bars, skill tags, category filters
 */
import { useEffect, useRef, useState } from "react";

const CONSTELLATION_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663345648637/USHtrkGwNZBa9PVUFF9jTx/skills-constellation-bg-7MxgQ44FF9UPbYSopDBHyN.webp";

const skillCategories = [
  {
    label: "Languages & Databases",
    icon: "💻",
    color: "#4F8EF7",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 90 },
      { name: "React", level: 88 },
      { name: "GraphQL", level: 82 },
      { name: "MySQL", level: 85 },
      { name: "Elasticsearch", level: 80 },
      { name: "Firebase", level: 78 },
      { name: "Cassandra", level: 75 },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    icon: "☁️",
    color: "#C8A96E",
    skills: [
      { name: "AWS", level: 88 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 80 },
      { name: "Kafka", level: 82 },
      { name: "GCP", level: 75 },
      { name: "Prometheus", level: 78 },
      { name: "Grafana", level: 76 },
      { name: "Aerospike", level: 72 },
    ],
  },
  {
    label: "AI & Machine Learning",
    icon: "🤖",
    color: "#A78BFA",
    skills: [
      { name: "OpenAI", level: 88 },
      { name: "TensorFlow", level: 85 },
      { name: "LLAMA", level: 80 },
      { name: "GenAI", level: 82 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 78 },
      { name: "Sklearn", level: 88 },
      { name: "XGBoost", level: 82 },
    ],
  },
  {
    label: "Marketing & Business",
    icon: "📊",
    color: "#34D399",
    skills: [
      { name: "Meta Ad Platform", level: 95 },
      { name: "Ads Manager", level: 92 },
      { name: "Marketing APIs", level: 88 },
      { name: "CRM Integration", level: 85 },
      { name: "Signal Resilience", level: 82 },
      { name: "Event Manager", level: 85 },
      { name: "Catalog Manager", level: 80 },
      { name: "Business Manager", level: 88 },
    ],
  },
];

const softSkills = [
  "Collaboration", "Analytics", "Decision Making", "Leadership",
  "Problem-Solving", "Creativity", "Teamwork", "Adaptability",
  "Time Management", "Initiative", "Flexibility", "Open Minded",
];

function SkillBar({ name, level, color, delay = 0 }: { name: string; level: number; color: string; delay?: number }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ marginBottom: "0.75rem" }}>
      <div className="flex items-center justify-between mb-1.5">
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "0.78rem",
            fontWeight: 500,
            color: "#F0EDE8",
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: color,
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "4px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: animated ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color} 0%, ${color}CC 50%, ${color} 100%)`,
            backgroundSize: "200% 100%",
            animation: animated ? "progress-shimmer 2s linear infinite" : "none",
            borderRadius: "2px",
            transition: `width 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="relative py-16" style={{ background: "#050810" }}>
      {/* Constellation background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${CONSTELLATION_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="section-label">TECHNICAL ARSENAL</span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#F0EDE8",
                marginTop: "0.25rem",
              }}
            >
              Skills & Expertise
            </h2>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {skillCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "6px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background: activeCategory === i ? `${cat.color}20` : "rgba(255,255,255,0.04)",
                border: `1px solid ${activeCategory === i ? cat.color + "50" : "rgba(255,255,255,0.08)"}`,
                color: activeCategory === i ? cat.color : "rgba(136, 146, 164, 0.7)",
                boxShadow: activeCategory === i ? `0 0 20px ${cat.color}20` : "none",
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: skill bars */}
          <div
            className="gradient-border p-6"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <div
              className="flex items-center gap-3 mb-6"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: skillCategories[activeCategory].color,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <span>{skillCategories[activeCategory].icon}</span>
              {skillCategories[activeCategory].label}
            </div>
            {skillCategories[activeCategory].skills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skillCategories[activeCategory].color}
                delay={i * 80}
              />
            ))}
          </div>

          {/* Right: skill cloud + stats */}
          <div className="flex flex-col gap-6">
            {/* All skills cloud */}
            <div
              className="gradient-border p-6 flex-1"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "#C8A96E",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                ALL TECHNOLOGIES
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java", "Python", "Hack", "React", "Bloks", "GraphQL", "MySQL",
                  "Cassandra", "Sybase", "Elasticsearch", "Vertica", "Firebase",
                  "AWS", "Docker", "Kubernetes", "Aerospike", "Kafka", "Zookeeper",
                  "Prometheus", "Grafana", "Kibana", "GCP", "SpringMVC", "Hadoop",
                  "Spark", "Storm", "Agile", "Flutter", "MongoDB", "ML", "NLP",
                  "Big Data", "WebServices", "OpenAI", "LLAMA", "GenAI",
                ].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div
              className="gradient-border p-6"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "#34D399",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                SOFT SKILLS
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: "rgba(52, 211, 153, 0.08)",
                      border: "1px solid rgba(52, 211, 153, 0.2)",
                      color: "#34D399",
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      padding: "0.3rem 0.75rem",
                      borderRadius: "20px",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "35+", label: "Technologies", color: "#4F8EF7" },
            { value: "4", label: "Skill Domains", color: "#C8A96E" },
            { value: "10+", label: "Years Coding", color: "#A78BFA" },
            { value: "∞", label: "Learning Mindset", color: "#34D399" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="gradient-border p-5 text-center"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: "2.2rem",
                  color: stat.color,
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(136, 146, 164, 0.7)",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
