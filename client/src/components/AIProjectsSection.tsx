/*
 * STELLAR BLACK — MetaProjectsHub Component
 * Full showcase of all Meta projects across 4 categories:
 * 🤖 AI & Agentic  |  💰 Revenue & Attribution  |  ⚖️ Legal & Compliance  |  🚀 Product Innovation
 */
import { useState } from "react";

interface Project {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  impact: string;
  impactLabel: string;
  description: string;
  techStack: string[];
  howItWorks: string[];
  metrics: { label: string; value: string }[];
}

interface Category {
  id: string;
  label: string;
  icon: string;
  color: string;
  tagline: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    id: "ai",
    label: "AI & Agentic",
    icon: "🤖",
    color: "#A78BFA",
    tagline: "LLM-powered automation and generative intelligence",
    projects: [
      {
        id: "analytics-agent",
        emoji: "🧠",
        title: "Analytics Agent Recipes",
        subtitle: "Automated insight generation via LLM orchestration",
        color: "#A78BFA",
        impact: "10×",
        impactLabel: "Faster Insights",
        description:
          "Designed and deployed a library of analytics agent recipes that autonomously orchestrate data pipelines, query Vertica/Elasticsearch clusters, and generate natural-language performance summaries for Meta advertisers. Each recipe is a composable LLM-driven workflow triggered by ad performance anomalies.",
        techStack: ["OpenAI", "LLAMA", "Python", "Vertica", "Elasticsearch", "Kafka", "GraphQL"],
        howItWorks: [
          "Signal ingested from Meta Ads telemetry via Kafka",
          "Analytics Agent classifies anomaly type using LLAMA",
          "Recipe executor fetches relevant data from Vertica",
          "LLM synthesizes natural-language insight report",
          "Report delivered to advertiser dashboard in real-time",
        ],
        metrics: [
          { label: "Recipes Built", value: "24+" },
          { label: "Avg. Latency", value: "<2s" },
          { label: "Accuracy", value: "94%" },
        ],
      },
      {
        id: "metamate",
        emoji: "⚡",
        title: "Metamate Automation",
        subtitle: "LLM-powered internal workflow acceleration",
        color: "#C084FC",
        impact: "60%",
        impactLabel: "Cycle Reduction",
        description:
          "Engineered Metamate-powered automation workflows that eliminated repetitive manual review cycles across the ads support pipeline. Built LLM-based ticket classification, auto-routing, and response suggestion systems that reduced engineer toil and improved SLA compliance for high-value advertisers.",
        techStack: ["Metamate", "Python", "Hack", "React", "Cassandra", "Prometheus"],
        howItWorks: [
          "Incoming support ticket parsed by Metamate NLU layer",
          "Intent classified into 12 issue taxonomy categories",
          "Auto-routed to correct engineering team via Hack service",
          "Suggested resolution generated from knowledge base",
          "Engineer reviews, approves, and closes — one click",
        ],
        metrics: [
          { label: "Tickets Automated", value: "70%" },
          { label: "SLA Improvement", value: "+40%" },
          { label: "Hours Saved/mo", value: "200+" },
        ],
      },
      {
        id: "manus",
        emoji: "🧩",
        title: "Manus Framework",
        subtitle: "Agentic orchestration for business workflows",
        color: "#818CF8",
        impact: "∞",
        impactLabel: "Scalability",
        description:
          "Integrated the Manus agentic framework to orchestrate multi-step, long-horizon business workflows — from advertiser onboarding to ad creative compliance review. Implemented human-in-the-loop checkpoints enabling fully auditable AI-driven operations.",
        techStack: ["Manus", "GenAI", "Python", "AWS Lambda", "Firebase", "Docker", "Kubernetes"],
        howItWorks: [
          "Business workflow defined as a Manus task graph",
          "Agent decomposes task into atomic executable steps",
          "Each step executed with tool use (APIs, DB queries)",
          "Human-in-the-loop checkpoint triggered on ambiguity",
          "Workflow state persisted; resumes after approval",
        ],
        metrics: [
          { label: "Workflows Automated", value: "15+" },
          { label: "Steps per Workflow", value: "Up to 40" },
          { label: "Human Reviews", value: "–85%" },
        ],
      },
      {
        id: "genai-video",
        emoji: "🎬",
        title: "GenAI Video Generation",
        subtitle: "Dynamic video ads at scale via Catalog Manager",
        color: "#F472B6",
        impact: "$M+",
        impactLabel: "Revenue Impact",
        description:
          "Built a GenAI-powered video generation tool integrated into Meta's Catalog Manager, enabling advertisers to automatically produce personalized video ads from product catalog data. Scaled dynamic video ad creation from hours to seconds, driving measurable Meta advertising revenue uplift.",
        techStack: ["GenAI", "OpenAI", "Python", "Catalog Manager", "Meta Ads API", "AWS S3"],
        howItWorks: [
          "Product catalog data ingested from Catalog Manager API",
          "GenAI model selects scene template per product category",
          "Video frames rendered with product imagery + copy",
          "Voiceover synthesized from product description via TTS",
          "Final video asset published to Dynamic Ads pipeline",
        ],
        metrics: [
          { label: "Video Gen Speed", value: "<30s" },
          { label: "CTR Improvement", value: "+35%" },
          { label: "Catalog Coverage", value: "100%" },
        ],
      },
    ],
  },
  {
    id: "revenue",
    label: "Revenue & Attribution",
    icon: "💰",
    color: "#C8A96E",
    tagline: "Measurement, optimization and value modeling at scale",
    projects: [
      {
        id: "pltv",
        emoji: "📈",
        title: "pLTV — Predicted Lifetime Value",
        subtitle: "ML model to predict advertiser customer lifetime value",
        color: "#C8A96E",
        impact: "+28%",
        impactLabel: "ROAS Lift",
        description:
          "Built and deployed a Predicted Lifetime Value (pLTV) model that enables Meta advertisers to optimize campaigns toward high-value customers rather than short-term conversions. The model ingests first-party signals, purchase history, and behavioral data to score users by predicted long-term revenue contribution, feeding directly into Meta's auction bidding system.",
        techStack: ["Python", "XGBoost", "TensorFlow", "Meta Ads API", "Kafka", "Vertica", "Aerospike"],
        howItWorks: [
          "First-party signals ingested via Conversions API",
          "XGBoost model scores users by predicted LTV bucket",
          "pLTV scores fed into Meta's real-time bidding engine",
          "Campaigns auto-optimized toward high-LTV audiences",
          "A/B test validates ROAS lift vs. standard optimization",
        ],
        metrics: [
          { label: "ROAS Improvement", value: "+28%" },
          { label: "Model Precision", value: "91%" },
          { label: "Advertisers Impacted", value: "500+" },
        ],
      },
      {
        id: "value-opt",
        emoji: "🎯",
        title: "Project Value Optimization",
        subtitle: "Bid strategy optimization for maximum advertiser ROI",
        color: "#F59E0B",
        impact: "+22%",
        impactLabel: "Conversion Value",
        description:
          "Led the implementation of Value Optimization (VO) bid strategies for Meta advertisers, enabling the ads system to automatically allocate budget toward the highest-value conversion events. Worked with engineering to integrate value signals into the auction, and with advertisers to configure Pixel events and CAPI for accurate value reporting.",
        techStack: ["Meta Pixel", "CAPI", "GraphQL", "Python", "Ads Manager", "Vertica"],
        howItWorks: [
          "Advertiser configures purchase value events via Pixel/CAPI",
          "Value signals normalized and ingested into auction system",
          "Bid adjusted in real-time based on predicted conversion value",
          "Budget auto-allocated to highest expected-value impressions",
          "Reporting dashboard shows value-based ROAS metrics",
        ],
        metrics: [
          { label: "Conversion Value", value: "+22%" },
          { label: "Setup Success Rate", value: "96%" },
          { label: "Avg. ROAS", value: "4.2×" },
        ],
      },
      {
        id: "passback",
        emoji: "🔁",
        title: "Custom Passback Attribution",
        subtitle: "Offline-to-online conversion attribution pipeline",
        color: "#34D399",
        impact: "3×",
        impactLabel: "Attribution Accuracy",
        description:
          "Designed and shipped a Custom Passback Attribution system allowing advertisers to send offline conversion events back to Meta for closed-loop measurement. Built the ingestion pipeline, data validation layer, and matching logic that connects offline purchase events to Meta ad exposures using privacy-safe identity resolution.",
        techStack: ["Conversions API", "Python", "Kafka", "Aerospike", "GraphQL", "AWS", "Spark"],
        howItWorks: [
          "Advertiser sends offline events via Conversions API",
          "Events validated and deduplicated in ingestion layer",
          "Privacy-safe identity matching against ad exposure log",
          "Attribution credit assigned using configurable window",
          "Results surfaced in Ads Manager attribution report",
        ],
        metrics: [
          { label: "Attribution Accuracy", value: "3×" },
          { label: "Match Rate", value: "78%" },
          { label: "Latency", value: "<5min" },
        ],
      },
    ],
  },
  {
    id: "legal",
    label: "Legal & Compliance",
    icon: "⚖️",
    color: "#60A5FA",
    tagline: "Privacy-first engineering for regulated advertising categories",
    projects: [
      {
        id: "hec",
        emoji: "🏛️",
        title: "HEC — Housing, Employment & Credit",
        subtitle: "Special Ad Category compliance for regulated verticals",
        color: "#60A5FA",
        impact: "100%",
        impactLabel: "Compliance Rate",
        description:
          "Led technical implementation and advertiser enablement for Meta's Special Ad Category (SAC) framework covering Housing, Employment, and Credit — regulated verticals under the Fair Housing Act, Equal Credit Opportunity Act, and EEOC guidelines. Built tooling to enforce SAC restrictions on audience targeting, lookalike modeling, and ad delivery to ensure non-discriminatory ad distribution.",
        techStack: ["Meta Ads API", "Ads Manager", "Python", "GraphQL", "React", "Hack"],
        howItWorks: [
          "Advertiser selects Special Ad Category during campaign setup",
          "System enforces restricted targeting parameters automatically",
          "Lookalike audiences expanded to reduce demographic skew",
          "Ad delivery algorithm adjusted for equitable distribution",
          "Compliance audit log generated for regulatory review",
        ],
        metrics: [
          { label: "Compliance Rate", value: "100%" },
          { label: "Advertisers Migrated", value: "1,200+" },
          { label: "Policy Violations", value: "0" },
        ],
      },
      {
        id: "ccpa",
        emoji: "🔒",
        title: "CCPA Compliance Engineering",
        subtitle: "California Consumer Privacy Act technical implementation",
        color: "#38BDF8",
        impact: "Zero",
        impactLabel: "Violations",
        description:
          "Engineered technical controls and advertiser-facing tooling to ensure Meta's ads platform complies with the California Consumer Privacy Act (CCPA). Built data subject request (DSR) workflows, opt-out signal propagation pipelines, and Limited Data Use (LDU) flag enforcement across the ads delivery stack.",
        techStack: ["CAPI", "LDU Flags", "Python", "GraphQL", "Kafka", "Aerospike", "React"],
        howItWorks: [
          "Opt-out signal captured via CCPA consent management platform",
          "LDU flag appended to all events from California users",
          "Events with LDU flag excluded from ad targeting models",
          "Data Subject Requests processed within 45-day SLA",
          "Audit trail maintained for regulatory inspection",
        ],
        metrics: [
          { label: "DSR SLA Compliance", value: "100%" },
          { label: "LDU Flag Accuracy", value: "99.9%" },
          { label: "Regulatory Audits Passed", value: "4" },
        ],
      },
      {
        id: "gdpr",
        emoji: "🇪🇺",
        title: "GDPR Compliance Framework",
        subtitle: "EU General Data Protection Regulation enforcement",
        color: "#818CF8",
        impact: "€0",
        impactLabel: "Fines Incurred",
        description:
          "Contributed to Meta's GDPR compliance engineering for the ads platform — implementing consent-based data processing controls, data minimization pipelines, and purpose-limitation enforcement for EU user data. Worked cross-functionally with legal, policy, and engineering teams to translate regulatory requirements into technical specifications.",
        techStack: ["Consent API", "Python", "Kafka", "Vertica", "GraphQL", "Docker", "Hack"],
        howItWorks: [
          "User consent captured and stored in Consent Management Platform",
          "Consent signal propagated to all downstream data processors",
          "Purpose-limitation checks enforced at data access layer",
          "Data minimization applied — only necessary fields retained",
          "Right-to-erasure requests fulfilled within 30-day window",
        ],
        metrics: [
          { label: "Consent Signal Coverage", value: "100%" },
          { label: "Erasure SLA", value: "30 days" },
          { label: "DPA Audits Passed", value: "6" },
        ],
      },
    ],
  },
  {
    id: "product",
    label: "Product Innovation",
    icon: "🚀",
    color: "#34D399",
    tagline: "Cutting-edge ad products from offline retail to Web3",
    projects: [
      {
        id: "long-consideration",
        emoji: "🏠",
        title: "Long Consideration Optimization",
        subtitle: "Ads optimization for high-intent, long-funnel verticals",
        color: "#34D399",
        impact: "+41%",
        impactLabel: "Lead Quality",
        description:
          "Built optimization strategies for long consideration cycle verticals — real estate, automotive, financial services, and higher education — where purchase decisions span weeks or months. Developed multi-touch attribution models and upper-funnel engagement signals that enable Meta's algorithm to identify and target high-intent users early in their decision journey.",
        techStack: ["Meta Ads API", "Lead Ads", "CAPI", "Python", "Vertica", "XGBoost", "GraphQL"],
        howItWorks: [
          "Multi-touch signals collected across 90-day attribution window",
          "Engagement scoring model identifies high-intent micro-conversions",
          "Upper-funnel optimization objective configured in campaign",
          "Algorithm learns from downstream conversion signals over time",
          "Lead quality score fed back to improve audience targeting",
        ],
        metrics: [
          { label: "Lead Quality", value: "+41%" },
          { label: "Cost per Qualified Lead", value: "–33%" },
          { label: "Verticals Covered", value: "4" },
        ],
      },
      {
        id: "instore-offer",
        emoji: "🏪",
        title: "In-Store Offer Ads",
        subtitle: "Digital-to-physical retail conversion via Meta Offers",
        color: "#4ADE80",
        impact: "O2O",
        impactLabel: "Attribution",
        description:
          "Engineered the technical integration for In-Store Offer Ads — a Meta product that bridges digital ad exposure to physical retail conversions. Built the offer redemption tracking pipeline, offline store visit attribution, and the merchant-facing tooling for creating and managing digital coupons that drive foot traffic and in-store purchases.",
        techStack: ["Meta Offers API", "Offline Conversions API", "Python", "React", "GraphQL", "Kafka"],
        howItWorks: [
          "Merchant creates digital offer via Offers Manager",
          "Offer served to targeted users in Facebook/Instagram feed",
          "User saves offer to their account with one tap",
          "In-store purchase tracked via loyalty card or receipt upload",
          "Offline conversion attributed back to ad exposure",
        ],
        metrics: [
          { label: "Offer Save Rate", value: "12%" },
          { label: "In-Store Redemption", value: "8%" },
          { label: "Merchants Onboarded", value: "300+" },
        ],
      },
      {
        id: "fbwifi",
        emoji: "📶",
        title: "FBWifi",
        subtitle: "Free WiFi access exchange for Facebook engagement",
        color: "#22D3EE",
        impact: "10M+",
        impactLabel: "Connections",
        description:
          "Contributed to the FBWifi product — a Meta initiative enabling businesses to offer free WiFi to customers in exchange for Facebook check-ins or page likes. Built the router integration API, session management layer, and the business-facing dashboard for managing WiFi access points and tracking customer engagement metrics.",
        techStack: ["FBWifi API", "Python", "React", "MySQL", "AWS", "OAuth", "GraphQL"],
        howItWorks: [
          "Business registers WiFi router in FBWifi Business Portal",
          "Customer connects to WiFi and is redirected to Facebook",
          "User completes engagement action (check-in / page like)",
          "Session token issued; internet access granted",
          "Business receives engagement analytics in dashboard",
        ],
        metrics: [
          { label: "WiFi Connections", value: "10M+" },
          { label: "Business Locations", value: "50K+" },
          { label: "Avg. Session", value: "45 min" },
        ],
      },
      {
        id: "nft-airdrop",
        emoji: "🎨",
        title: "NFT Airdrop",
        subtitle: "Web3 digital collectibles distribution on Meta platforms",
        color: "#F472B6",
        impact: "Web3",
        impactLabel: "Innovation",
        description:
          "Worked on Meta's NFT Airdrop feature — enabling creators and brands to distribute digital collectibles (NFTs) directly to their Facebook and Instagram followers. Built the wallet connection flow, blockchain verification layer, and the creator-facing tooling for configuring airdrop campaigns with eligibility criteria and distribution logic.",
        techStack: ["Web3.js", "Ethereum", "Polygon", "Python", "React", "GraphQL", "AWS"],
        howItWorks: [
          "Creator configures NFT airdrop campaign with eligibility rules",
          "Eligible followers notified via in-app notification",
          "User connects crypto wallet via WalletConnect protocol",
          "Smart contract verifies eligibility and mints/transfers NFT",
          "Digital collectible displayed on user's Meta profile",
        ],
        metrics: [
          { label: "NFTs Distributed", value: "500K+" },
          { label: "Creator Campaigns", value: "200+" },
          { label: "Wallet Connect Rate", value: "34%" },
        ],
      },
    ],
  },
];

function ProjectCard({
  project,
  categoryColor,
  isActive,
  onClick,
}: {
  project: Project;
  categoryColor: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        width: "100%",
        background: isActive
          ? `linear-gradient(135deg, ${project.color}20, ${project.color}08)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${isActive ? project.color + "60" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "10px",
        padding: "1rem 1.1rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: isActive ? "translateX(4px)" : "translateX(0)",
        boxShadow: isActive ? `0 8px 30px rgba(0,0,0,0.4), inset 0 0 0 1px ${project.color}30` : "none",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.background = `${project.color}0D`;
          (e.currentTarget as HTMLElement).style.borderColor = `${project.color}30`;
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.025)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
        }
      }}
    >
      {isActive && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "3px",
            background: `linear-gradient(to bottom, ${project.color}, ${project.color}40)`,
            borderRadius: "10px 0 0 10px",
          }}
        />
      )}
      <div className="flex items-center gap-2.5">
        <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>{project.emoji}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: isActive ? project.color : "#F0EDE8",
              lineHeight: 1.3,
              marginBottom: "0.15rem",
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.65rem",
              color: "rgba(136,146,164,0.6)",
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {project.subtitle}
          </div>
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: isActive ? project.color : "rgba(136,146,164,0.4)",
            flexShrink: 0,
          }}
        >
          {project.impact}
        </div>
      </div>
    </button>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <div
      key={project.id}
      style={{
        background: `linear-gradient(135deg, ${project.color}12, ${project.color}04)`,
        border: `1px solid ${project.color}35`,
        borderRadius: "16px",
        padding: "2rem",
        height: "100%",
        animation: "cinematic-reveal 0.35s ease forwards",
      }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "14px",
            background: `${project.color}18`,
            border: `1px solid ${project.color}35`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.6rem",
            flexShrink: 0,
            boxShadow: `0 0 20px ${project.color}20`,
          }}
        >
          {project.emoji}
        </div>
        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#F0EDE8",
              lineHeight: 1.15,
              marginBottom: "0.2rem",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(136,146,164,0.7)",
            }}
          >
            {project.subtitle}
          </p>
        </div>
        <div
          style={{
            textAlign: "center",
            background: `${project.color}15`,
            border: `1px solid ${project.color}35`,
            borderRadius: "10px",
            padding: "0.5rem 0.9rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "1.6rem",
              color: project.color,
              lineHeight: 1,
            }}
          >
            {project.impact}
          </div>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.5rem",
              color: `${project.color}80`,
              letterSpacing: "0.08em",
              marginTop: "2px",
            }}
          >
            {project.impactLabel}
          </div>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "0.86rem",
          color: "rgba(240,237,232,0.62)",
          lineHeight: 1.8,
          marginBottom: "1.25rem",
          paddingBottom: "1.25rem",
          borderBottom: `1px solid ${project.color}15`,
        }}
      >
        {project.description}
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        {project.metrics.map((m, i) => (
          <div
            key={i}
            style={{
              background: `${project.color}0D`,
              border: `1px solid ${project.color}20`,
              borderRadius: "8px",
              padding: "0.65rem 0.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: project.color,
                lineHeight: 1,
                marginBottom: "0.2rem",
              }}
            >
              {m.value}
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.58rem",
                color: "rgba(136,146,164,0.55)",
                letterSpacing: "0.04em",
              }}
            >
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 700,
          color: "rgba(136,146,164,0.45)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "0.65rem",
        }}
      >
        HOW IT WORKS
      </div>
      <div className="flex flex-col gap-2 mb-4">
        {project.howItWorks.map((step, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: `${project.color}18`,
                border: `1px solid ${project.color}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: "1px",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.58rem",
                  color: project.color,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.76rem",
                color: "rgba(240,237,232,0.6)",
                lineHeight: 1.5,
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.6rem",
          fontWeight: 700,
          color: "rgba(136,146,164,0.45)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "0.5rem",
        }}
      >
        TECH STACK
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            style={{
              background: `${project.color}10`,
              border: `1px solid ${project.color}25`,
              color: project.color,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.62rem",
              padding: "0.2rem 0.55rem",
              borderRadius: "4px",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = `${project.color}20`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 8px ${project.color}30`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = `${project.color}10`;
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function AIProjectsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState("ai");
  const [activeProjectId, setActiveProjectId] = useState("analytics-agent");

  const activeCategory = categories.find((c) => c.id === activeCategoryId)!;
  const activeProject = activeCategory.projects.find((p) => p.id === activeProjectId) ?? activeCategory.projects[0];

  const handleCategoryChange = (catId: string) => {
    setActiveCategoryId(catId);
    const cat = categories.find((c) => c.id === catId)!;
    setActiveProjectId(cat.projects[0].id);
  };

  return (
    <section
      id="meta-projects"
      className="relative py-16"
      style={{ background: "linear-gradient(to bottom, #050810, #070B16, #050810)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <span className="section-label" style={{ color: "#C8A96E" }}>
              META PLATFORMS · 2020–PRESENT
            </span>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                color: "#F0EDE8",
                marginTop: "0.25rem",
              }}
            >
              Projects & Initiatives
            </h2>
          </div>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, rgba(200,169,110,0.4), transparent)",
            }}
          />
          <div
            style={{
              background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))",
              border: "1px solid rgba(200,169,110,0.3)",
              borderRadius: "6px",
              padding: "0.3rem 0.8rem",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.62rem",
              fontWeight: 700,
              color: "#C8A96E",
              letterSpacing: "0.1em",
            }}
          >
            {categories.reduce((acc, c) => acc + c.projects.length, 0)} PROJECTS
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-7">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.55rem 1.25rem",
                borderRadius: "8px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.25s ease",
                background:
                  activeCategoryId === cat.id
                    ? `${cat.color}18`
                    : "rgba(255,255,255,0.04)",
                border: `1px solid ${activeCategoryId === cat.id ? cat.color + "50" : "rgba(255,255,255,0.08)"}`,
                color: activeCategoryId === cat.id ? cat.color : "rgba(136,146,164,0.65)",
                boxShadow: activeCategoryId === cat.id ? `0 0 20px ${cat.color}18` : "none",
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
              <span
                style={{
                  background: activeCategoryId === cat.id ? `${cat.color}25` : "rgba(255,255,255,0.06)",
                  borderRadius: "10px",
                  padding: "0.1rem 0.45rem",
                  fontSize: "0.6rem",
                  color: activeCategoryId === cat.id ? cat.color : "rgba(136,146,164,0.4)",
                }}
              >
                {cat.projects.length}
              </span>
            </button>
          ))}
        </div>

        {/* Category tagline */}
        <div
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "0.82rem",
            color: "rgba(136,146,164,0.55)",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span style={{ color: activeCategory.color, fontSize: "0.9rem" }}>{activeCategory.icon}</span>
          {activeCategory.tagline}
        </div>

        {/* Main grid: project list + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Project selector */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {activeCategory.projects.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                categoryColor={activeCategory.color}
                isActive={activeProject.id === p.id}
                onClick={() => setActiveProjectId(p.id)}
              />
            ))}

            {/* Category stats */}
            <div
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "10px",
                padding: "1rem 1.1rem",
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  color: "rgba(136,146,164,0.4)",
                  letterSpacing: "0.15em",
                  marginBottom: "0.75rem",
                }}
              >
                CATEGORY OVERVIEW
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      fontSize: "1.8rem",
                      color: activeCategory.color,
                      lineHeight: 1,
                    }}
                  >
                    {activeCategory.projects.length}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.6rem",
                      color: "rgba(136,146,164,0.5)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Projects
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: "0.72rem",
                    color: "rgba(136,146,164,0.5)",
                    maxWidth: "160px",
                    textAlign: "right",
                    lineHeight: 1.5,
                  }}
                >
                  {activeCategory.tagline}
                </div>
              </div>
            </div>
          </div>

          {/* Project detail panel */}
          <div className="lg:col-span-3">
            <ProjectDetail project={activeProject} />
          </div>
        </div>
      </div>
    </section>
  );
}
