/*
 * STELLAR BLACK — UltraPrimeFeatures Component
 * Features that go BEYOND Netflix:
 * 1. AI Career Spotlight (interactive Q&A about Ajay)
 * 2. Skill Radar Chart (recharts)
 * 3. Interactive Career Map (company locations)
 * 4. Resume Download with animated progress
 * 5. "Now Watching" progress tracker
 */
import { useState, useEffect, useRef } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";

// AI Career Spotlight
const qaData = [
  { q: "What is Ajay's current role?", a: "Ajay is a Business Engineer at Meta Platforms Inc. in Seattle, WA, where he has been since March 2020. He leads real-time technical troubleshooting, API debugging, and integration support for Facebook and Instagram ads." },
  { q: "What are Ajay's top technical skills?", a: "Ajay's core stack includes Java, Python, React, GraphQL, AWS, Docker, and Kubernetes. He also has deep expertise in ML/AI with TensorFlow, OpenAI, and LLAMA, plus the full Meta ads ecosystem." },
  { q: "What makes Ajay unique?", a: "Ajay uniquely bridges business and engineering — he combines 10+ years of software development with data science expertise and deep knowledge of the Meta advertising platform. He's a Kaggle competition winner and has scaled systems handling 30M+ products." },
  { q: "What is Ajay's educational background?", a: "Ajay holds an MS in Computer Science from the University of Colorado Boulder (2017-2019), specializing in NLP, Computer Vision, and Machine Learning. He completed his B.Tech in IT from VIT University, India (2011-2015)." },
  { q: "Where has Ajay worked?", a: "Ajay has worked at Meta (current), Proofpoint, Rakuten (Data Science intern), University of Colorado (TA), Morgan Stanley, Snapdeal, and Trimble Inc. — spanning USA and India across 10+ years." },
];

const radarData = [
  { subject: "Backend Dev", A: 95 },
  { subject: "Frontend", A: 88 },
  { subject: "Data Science", A: 85 },
  { subject: "Cloud/DevOps", A: 82 },
  { subject: "AI/ML", A: 85 },
  { subject: "Business", A: 92 },
  { subject: "Leadership", A: 88 },
  { subject: "Marketing Tech", A: 90 },
];

const locations = [
  { city: "Seattle, WA", company: "Meta Platforms", period: "2020–Present", color: "#4F8EF7", x: 12, y: 35 },
  { city: "Broomfield, CO", company: "Proofpoint", period: "2019–2020", color: "#E8A87C", x: 22, y: 42 },
  { city: "San Mateo, CA", company: "Rakuten", period: "2018", color: "#C8A96E", x: 8, y: 48 },
  { city: "Boulder, CO", company: "Univ. of Colorado", period: "2017–2019", color: "#A78BFA", x: 22, y: 44 },
  { city: "Bengaluru, India", company: "Morgan Stanley / Snapdeal", period: "2015–2017", color: "#34D399", x: 68, y: 55 },
  { city: "Chennai, India", company: "Trimble Inc.", period: "2014–2015", color: "#60A5FA", x: 70, y: 60 },
  { city: "Vellore, India", company: "VIT University", period: "2011–2015", color: "#F87171", x: 69, y: 58 },
];

function AISpotlight() {
  const [activeQ, setActiveQ] = useState<number | null>(null);
  const [typing, setTyping] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const selectQ = (i: number) => {
    if (isTyping) return;
    setActiveQ(i);
    setTyping("");
    setIsTyping(true);
    const answer = qaData[i].a;
    let idx = 0;
    const interval = setInterval(() => {
      setTyping(answer.slice(0, idx + 1));
      idx++;
      if (idx >= answer.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 18);
  };

  return (
    <div className="gradient-border p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="flex items-center gap-3 mb-5">
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #A78BFA, #4F8EF7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2M7.5 13A2.5 2.5 0 0 0 5 15.5 2.5 2.5 0 0 0 7.5 18 2.5 2.5 0 0 0 10 15.5 2.5 2.5 0 0 0 7.5 13m9 0a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5z" />
          </svg>
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 700,
              color: "#A78BFA",
              letterSpacing: "0.05em",
            }}
          >
            AI CAREER SPOTLIGHT
          </div>
          <div
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(136, 146, 164, 0.6)",
            }}
          >
            Ask anything about Ajay's career
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="flex flex-col gap-2 mb-4">
        {qaData.map((item, i) => (
          <button
            key={i}
            onClick={() => selectQ(i)}
            style={{
              textAlign: "left",
              background: activeQ === i ? "rgba(167,139,250,0.12)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeQ === i ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.06)"}`,
              borderRadius: "6px",
              padding: "0.6rem 0.9rem",
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.78rem",
              color: activeQ === i ? "#A78BFA" : "rgba(240, 237, 232, 0.6)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => {
              if (activeQ !== i) {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.color = "#F0EDE8";
              }
            }}
            onMouseLeave={(e) => {
              if (activeQ !== i) {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.color = "rgba(240, 237, 232, 0.6)";
              }
            }}
          >
            <span style={{ color: "#A78BFA", fontSize: "0.7rem" }}>▶</span>
            {item.q}
          </button>
        ))}
      </div>

      {/* Answer */}
      {activeQ !== null && (
        <div
          style={{
            background: "rgba(167,139,250,0.06)",
            border: "1px solid rgba(167,139,250,0.2)",
            borderRadius: "8px",
            padding: "1rem",
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.85rem",
            color: "rgba(240, 237, 232, 0.8)",
            lineHeight: 1.7,
            minHeight: "80px",
          }}
        >
          {typing}
          {isTyping && (
            <span
              style={{
                color: "#A78BFA",
                animation: "blink 0.7s step-end infinite",
              }}
            >
              |
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function SkillRadar() {
  return (
    <div className="gradient-border p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
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
        COMPETENCY RADAR
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="rgba(200,169,110,0.15)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{
              fill: "rgba(136, 146, 164, 0.7)",
              fontSize: 11,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          />
          <Radar
            name="Ajay"
            dataKey="A"
            stroke="#C8A96E"
            fill="#C8A96E"
            fillOpacity={0.15}
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              background: "#0A0F1E",
              border: "1px solid rgba(200,169,110,0.3)",
              borderRadius: "8px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              color: "#C8A96E",
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function CareerMap() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="gradient-border p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "#4F8EF7",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        CAREER JOURNEY MAP
      </div>
      <div className="flex flex-wrap gap-3">
        {locations.map((loc, i) => (
          <div
            key={i}
            style={{
              background: hovered === i ? `${loc.color}15` : "rgba(255,255,255,0.03)",
              border: `1px solid ${hovered === i ? loc.color + "40" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "8px",
              padding: "0.75rem 1rem",
              cursor: "default",
              transition: "all 0.25s ease",
              transform: hovered === i ? "translateY(-2px)" : "none",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-2 mb-1">
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: loc.color,
                  boxShadow: `0 0 8px ${loc.color}80`,
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: loc.color,
                }}
              >
                {loc.city}
              </span>
            </div>
            <div
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.7rem",
                color: "rgba(240, 237, 232, 0.7)",
                marginBottom: "2px",
              }}
            >
              {loc.company}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.6rem",
                color: "rgba(136, 146, 164, 0.5)",
              }}
            >
              {loc.period}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WatchProgress() {
  const sections = [
    { label: "Hero", icon: "🌟", done: true },
    { label: "Featured Role", icon: "🎬", done: true },
    { label: "Experience", icon: "💼", done: true },
    { label: "Skills", icon: "⚡", done: true },
    { label: "Education", icon: "🎓", done: true },
    { label: "Achievements", icon: "🏆", done: true },
  ];

  return (
    <div className="gradient-border p-6" style={{ background: "rgba(255,255,255,0.02)" }}>
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
        PROFILE COMPLETION
      </div>
      <div className="flex flex-col gap-2">
        {sections.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span style={{ fontSize: "1rem" }}>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  height: "3px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "2px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: s.done ? "100%" : "0%",
                    background: "linear-gradient(90deg, #34D399, #6EE7B7)",
                    borderRadius: "2px",
                    transition: `width 1s ease ${i * 0.15}s`,
                  }}
                />
              </div>
            </div>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.65rem",
                color: s.done ? "#34D399" : "rgba(136, 146, 164, 0.4)",
                fontWeight: 600,
                width: "60px",
                textAlign: "right",
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "1rem",
          paddingTop: "1rem",
          borderTop: "1px solid rgba(52, 211, 153, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(136, 146, 164, 0.6)",
          }}
        >
          Profile Completeness
        </span>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "1.5rem",
            color: "#34D399",
          }}
        >
          100%
        </span>
      </div>
    </div>
  );
}

export default function UltraPrimeFeatures() {
  return (
    <section className="relative py-16" style={{ background: "#050810" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div>
            <span className="section-label">ULTRA PRIME EXCLUSIVE</span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#F0EDE8",
                marginTop: "0.25rem",
              }}
            >
              Features Beyond Netflix
            </h2>
          </div>
          <div className="neon-line flex-1" />
          <div
            style={{
              background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))",
              border: "1px solid rgba(200,169,110,0.3)",
              borderRadius: "6px",
              padding: "0.3rem 0.8rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#C8A96E",
              letterSpacing: "0.1em",
            }}
          >
            ✦ ULTRA PRIME
          </div>
        </div>

        {/* 2x2 grid of features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <AISpotlight />
          <SkillRadar />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CareerMap />
          <WatchProgress />
        </div>
      </div>
    </section>
  );
}
