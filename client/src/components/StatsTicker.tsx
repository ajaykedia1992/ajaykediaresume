/*
 * STELLAR BLACK — StatsTicker Component
 * Infinite scrolling ticker of career highlights and stats
 * Like a financial terminal / Bloomberg ticker but for a resume
 */

const tickerItems = [
  { label: "YEARS EXPERIENCE", value: "10+", color: "#C8A96E" },
  { label: "COMPANIES", value: "7", color: "#4F8EF7" },
  { label: "META PROJECTS", value: "12", color: "#A78BFA" },
  { label: "PRODUCTS SCALED", value: "30M+", color: "#34D399" },
  { label: "COUNTRIES", value: "4", color: "#F472B6" },
  { label: "TECHNOLOGIES", value: "35+", color: "#60A5FA" },
  { label: "KAGGLE WINNER", value: "2018", color: "#C8A96E" },
  { label: "GENAI PROJECTS", value: "4", color: "#A78BFA" },
  { label: "ROAS LIFT", value: "+28%", color: "#34D399" },
  { label: "CTR IMPROVEMENT", value: "+35%", color: "#F472B6" },
  { label: "AUTOMATION RATE", value: "70%", color: "#4F8EF7" },
  { label: "COMPLIANCE RATE", value: "100%", color: "#60A5FA" },
  { label: "VIDEO GEN SPEED", value: "<30s", color: "#C8A96E" },
  { label: "WIFI CONNECTIONS", value: "10M+", color: "#34D399" },
  { label: "NFTs DISTRIBUTED", value: "500K+", color: "#F472B6" },
  { label: "CURRENT ROLE", value: "META", color: "#4F8EF7" },
  { label: "LOCATION", value: "SEATTLE", color: "#A78BFA" },
];

// Duplicate for seamless loop
const allItems = [...tickerItems, ...tickerItems];

export default function StatsTicker() {
  return (
    <div
      style={{
        background: "#030508",
        borderTop: "1px solid rgba(200,169,110,0.1)",
        borderBottom: "1px solid rgba(200,169,110,0.1)",
        overflow: "hidden",
        padding: "0.6rem 0",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to right, #030508, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to left, #030508, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Scrolling track */}
      <div
        style={{
          display: "flex",
          animation: "ticker-scroll 60s linear infinite",
          width: "max-content",
        }}
      >
        {allItems.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0 2rem",
              flexShrink: 0,
            }}
          >
            {/* Separator dot */}
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: item.color,
                boxShadow: `0 0 6px ${item.color}80`,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.62rem",
                fontWeight: 600,
                color: "rgba(136,146,164,0.5)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: item.color,
                letterSpacing: "0.05em",
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
