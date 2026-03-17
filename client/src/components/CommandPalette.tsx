/*
 * STELLAR BLACK — CommandPalette Component
 * Press Cmd+K (or Ctrl+K) to open a spotlight-style search
 * across all resume sections, projects, skills, and companies
 */
import { useState, useEffect, useRef } from "react";

interface CommandItem {
  id: string;
  icon: string;
  label: string;
  sublabel: string;
  category: string;
  action: () => void;
  color: string;
}

const buildCommands = (): CommandItem[] => [
  // Navigation
  { id: "nav-hero", icon: "🌟", label: "Hero — Ajay Kedia", sublabel: "Go to top", category: "NAVIGATE", color: "#C8A96E", action: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "nav-featured", icon: "🎬", label: "Featured Role — Meta", sublabel: "Current position", category: "NAVIGATE", color: "#4F8EF7", action: () => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "nav-projects", icon: "🚀", label: "Meta Projects Hub", sublabel: "12 projects across 4 categories", category: "NAVIGATE", color: "#A78BFA", action: () => document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "nav-experience", icon: "💼", label: "Experience", sublabel: "7 companies, 10+ years", category: "NAVIGATE", color: "#34D399", action: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "nav-skills", icon: "⚡", label: "Skills & Expertise", sublabel: "35+ technologies", category: "NAVIGATE", color: "#60A5FA", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "nav-education", icon: "🎓", label: "Education", sublabel: "MS CS — Univ. of Colorado", category: "NAVIGATE", color: "#F472B6", action: () => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "nav-achievements", icon: "🏆", label: "Achievements", sublabel: "Kaggle winner & more", category: "NAVIGATE", color: "#C8A96E", action: () => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" }) },
  // Projects
  { id: "proj-analytics", icon: "🧠", label: "Analytics Agent Recipes", sublabel: "AI · 10× faster insights", category: "PROJECT", color: "#A78BFA", action: () => { document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }); } },
  { id: "proj-metamate", icon: "⚡", label: "Metamate Automation", sublabel: "AI · 60% cycle reduction", category: "PROJECT", color: "#C084FC", action: () => document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "proj-manus", icon: "🧩", label: "Manus Framework", sublabel: "Agentic orchestration", category: "PROJECT", color: "#818CF8", action: () => document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "proj-genai", icon: "🎬", label: "GenAI Video Generation", sublabel: "Revenue · $M+ impact", category: "PROJECT", color: "#F472B6", action: () => document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "proj-pltv", icon: "📈", label: "pLTV Model", sublabel: "Revenue · +28% ROAS", category: "PROJECT", color: "#C8A96E", action: () => document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "proj-hec", icon: "🏛️", label: "HEC Compliance", sublabel: "Legal · Housing/Employment/Credit", category: "PROJECT", color: "#60A5FA", action: () => document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }) },
  { id: "proj-nft", icon: "🎨", label: "NFT Airdrop", sublabel: "Web3 · 500K+ NFTs", category: "PROJECT", color: "#F472B6", action: () => document.getElementById("meta-projects")?.scrollIntoView({ behavior: "smooth" }) },
  // Contact
  { id: "contact-email", icon: "📧", label: "Send Email", sublabel: "ajaykedia1992@gmail.com", category: "CONTACT", color: "#34D399", action: () => window.open("mailto:ajaykedia1992@gmail.com") },
  { id: "contact-phone", icon: "📞", label: "Call Ajay", sublabel: "+1 720-203-1694", category: "CONTACT", color: "#4F8EF7", action: () => window.open("tel:+17202031694") },
  { id: "contact-linkedin", icon: "💼", label: "LinkedIn Profile", sublabel: "linkedin.com/in/ajay-kedia", category: "CONTACT", color: "#0A66C2", action: () => window.open("https://linkedin.com/in/ajay-kedia", "_blank") },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const commands = buildCommands();

  const filtered = query.trim()
    ? commands.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.sublabel.toLowerCase().includes(query.toLowerCase()) ||
          c.category.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((s) => Math.min(s + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((s) => Math.max(s - 1, 0));
    } else if (e.key === "Enter" && filtered[selected]) {
      filtered[selected].action();
      setOpen(false);
    }
  };

  if (!open) {
    return (
      <button
        onClick={() => { setOpen(true); setQuery(""); setSelected(0); }}
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 9000,
          background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))",
          border: "1px solid rgba(200,169,110,0.3)",
          borderRadius: "10px",
          padding: "0.6rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          cursor: "pointer",
          backdropFilter: "blur(12px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(200,169,110,0.1)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(200,169,110,0.2)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(200,169,110,0.1)";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#C8A96E", fontWeight: 600, letterSpacing: "0.05em" }}>
          Search
        </span>
        <kbd style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", color: "rgba(200,169,110,0.6)", background: "rgba(200,169,110,0.1)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: "4px", padding: "0.1rem 0.35rem" }}>
          ⌘K
        </kbd>
      </button>
    );
  }

  // Group filtered by category
  const grouped: Record<string, CommandItem[]> = {};
  filtered.forEach((c) => {
    if (!grouped[c.category]) grouped[c.category] = [];
    grouped[c.category].push(c);
  });

  let globalIndex = 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "15vh",
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        animation: "cinematic-reveal 0.2s ease",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          width: "min(620px, 90vw)",
          background: "#0A0F1E",
          border: "1px solid rgba(200,169,110,0.25)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 40px rgba(200,169,110,0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 1.25rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, skills, sections..."
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.95rem",
              color: "#F0EDE8",
              caretColor: "#C8A96E",
            }}
          />
          <kbd
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.6rem",
              color: "rgba(136,146,164,0.5)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              padding: "0.15rem 0.4rem",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: "400px", overflowY: "auto", padding: "0.5rem" }}>
          {filtered.length === 0 ? (
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(136,146,164,0.5)",
              }}
            >
              No results for "{query}"
            </div>
          ) : (
            Object.entries(grouped).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: "0.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    color: "rgba(136,146,164,0.4)",
                    letterSpacing: "0.2em",
                    padding: "0.4rem 0.75rem 0.2rem",
                  }}
                >
                  {cat}
                </div>
                {items.map((item) => {
                  const idx = globalIndex++;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { item.action(); setOpen(false); }}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.65rem 0.75rem",
                        borderRadius: "8px",
                        background: selected === idx ? `${item.color}15` : "transparent",
                        border: `1px solid ${selected === idx ? item.color + "30" : "transparent"}`,
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                        textAlign: "left",
                      }}
                      onMouseEnter={() => setSelected(idx)}
                    >
                      <span
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "8px",
                          background: `${item.color}15`,
                          border: `1px solid ${item.color}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.9rem",
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.82rem",
                            fontWeight: 600,
                            color: selected === idx ? item.color : "#F0EDE8",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontFamily: "'Manrope', sans-serif",
                            fontSize: "0.68rem",
                            color: "rgba(136,146,164,0.55)",
                            lineHeight: 1.3,
                          }}
                        >
                          {item.sublabel}
                        </div>
                      </div>
                      {selected === idx && (
                        <kbd
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.6rem",
                            color: item.color,
                            background: `${item.color}15`,
                            border: `1px solid ${item.color}30`,
                            borderRadius: "4px",
                            padding: "0.15rem 0.4rem",
                            flexShrink: 0,
                          }}
                        >
                          ↵
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "0.6rem 1.25rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {[
            { key: "↑↓", label: "Navigate" },
            { key: "↵", label: "Select" },
            { key: "ESC", label: "Close" },
          ].map((hint) => (
            <div key={hint.key} className="flex items-center gap-1.5">
              <kbd
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.58rem",
                  color: "rgba(136,146,164,0.5)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "4px",
                  padding: "0.1rem 0.35rem",
                }}
              >
                {hint.key}
              </kbd>
              <span
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.62rem",
                  color: "rgba(136,146,164,0.4)",
                }}
              >
                {hint.label}
              </span>
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.6rem",
              color: "rgba(200,169,110,0.4)",
              letterSpacing: "0.1em",
            }}
          >
            STELLAR BLACK · ULTRA PRIME
          </span>
        </div>
      </div>
    </div>
  );
}
