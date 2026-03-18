/*
 * STELLAR BLACK — Footer Component
 * Minimal dark footer with gold accent
 */
export default function Footer() {
  return (
    <footer
      style={{
        background: "#030508",
        borderTop: "1px solid rgba(200, 169, 110, 0.08)",
        padding: "2rem 0",
      }}
    >
      <div
        className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-3">
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "4px",
              background: "linear-gradient(135deg, #C8A96E, #F0D898)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#050810",
              }}
            >
              AK
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(136, 146, 164, 0.6)",
              letterSpacing: "0.05em",
            }}
          >
            Ajay Kedia · Business Engineer · Meta Platforms
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:ajaykedia1992@gmail.com"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.7rem",
              color: "rgba(136, 146, 164, 0.5)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8A96E")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(136, 146, 164, 0.5)")}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/ajay-kedia"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.7rem",
              color: "rgba(136, 146, 164, 0.5)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8A96E")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(136, 146, 164, 0.5)")}
          >
            LinkedIn
          </a>
          <a
            href="tel:+17202031694"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.7rem",
              color: "rgba(136, 146, 164, 0.5)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8A96E")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(136, 146, 164, 0.5)")}
          >
            +1 720-203-1694
          </a>
        </div>

        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "rgba(136, 146, 164, 0.3)",
            letterSpacing: "0.05em",
          }}
        >
          STELLAR BLACK · 2026
        </div>
      </div>
    </footer>
  );
}
