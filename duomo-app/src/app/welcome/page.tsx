"use client";

import { useRouter } from "next/navigation";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen flex flex-col items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(175deg, #070f1e 0%, #0b1830 40%, #0d2048 70%, #091525 100%)",
      }}
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { top: "8%", left: "12%", size: 2, opacity: 0.6 },
          { top: "14%", left: "78%", size: 1.5, opacity: 0.5 },
          { top: "22%", left: "35%", size: 1, opacity: 0.4 },
          { top: "6%", left: "55%", size: 2.5, opacity: 0.7 },
          { top: "30%", left: "88%", size: 1.5, opacity: 0.5 },
          { top: "18%", left: "5%", size: 1, opacity: 0.3 },
          { top: "40%", left: "92%", size: 1, opacity: 0.4 },
          { top: "10%", left: "42%", size: 1.5, opacity: 0.6 },
        ].map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: star.size * 2,
              height: star.size * 2,
              opacity: star.opacity,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Top logo */}
      <div className="pt-14 flex flex-col items-center z-10">
        <svg
          width="40"
          height="46"
          viewBox="0 0 64 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 72V36C8 18.327 18.745 4 32 4C45.255 4 56 18.327 56 36V72"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <line
            x1="4"
            y1="72"
            x2="60"
            y2="72"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="32" cy="34" r="6" fill="#c9a84c" opacity="0.9" />
        </svg>
        <p
          className="text-xs tracking-[0.22em] uppercase mt-2 opacity-60"
          style={{ color: "#90c0f0" }}
        >
          DUOMO
        </p>
      </div>

      {/* Central arch / doorway illustration */}
      <div className="flex-1 flex items-center justify-center z-10 relative my-6">
        <div className="relative">
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(ellipse, #c9a84c22 0%, transparent 70%)",
              width: "320px",
              height: "320px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <svg
            width="240"
            height="300"
            viewBox="0 0 240 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background arch outline (outer) */}
            <path
              d="M20 300 V140 C20 63 65 10 120 10 C175 10 220 63 220 140 V300"
              stroke="#1e4a7a"
              strokeWidth="2"
              fill="none"
            />
            {/* Inner arch fill – warm golden glow */}
            <path
              d="M38 300 V145 C38 75 75 26 120 26 C165 26 202 75 202 145 V300"
              fill="url(#doorGlow)"
            />
            {/* Door frame */}
            <path
              d="M38 300 V145 C38 75 75 26 120 26 C165 26 202 75 202 145 V300"
              stroke="#c9a84c"
              strokeWidth="1.5"
              strokeOpacity="0.6"
              fill="none"
            />
            {/* Light rays from top */}
            {[120, 100, 80, 140, 160].map((x, i) => (
              <line
                key={i}
                x1={120}
                y1={26}
                x2={x - 40 + i * 20}
                y2={300}
                stroke="#c9a84c"
                strokeOpacity={0.04 - i * 0.005}
                strokeWidth="1"
              />
            ))}
            {/* Cross at top */}
            <line
              x1="120"
              y1="50"
              x2="120"
              y2="90"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeOpacity="0.7"
            />
            <line
              x1="106"
              y1="66"
              x2="134"
              y2="66"
              stroke="#c9a84c"
              strokeWidth="2"
              strokeOpacity="0.7"
            />
            {/* Floor line */}
            <line
              x1="10"
              y1="299"
              x2="230"
              y2="299"
              stroke="#1e4a7a"
              strokeWidth="1.5"
            />
            {/* Gradient definition */}
            <defs>
              <radialGradient
                id="doorGlow"
                cx="50%"
                cy="30%"
                r="70%"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="240"
                y2="300"
              >
                <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.18" />
                <stop offset="35%" stopColor="#3b98f0" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#0a1628" stopOpacity="0.0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Bottom content */}
      <div className="w-full max-w-sm px-8 pb-14 z-10 animate-fade-in-up space-y-5">
        <div className="text-center space-y-3">
          <h1
            className="text-4xl font-bold tracking-tight text-white"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Welcome!
          </h1>
          <p
            className="text-base leading-relaxed"
            style={{ color: "rgba(176, 210, 255, 0.75)" }}
          >
            Your spiritual journey is lifelong, but discovering God&apos;s path
            for you starts now
          </p>
        </div>

        <button
          onClick={() => router.push("/today")}
          className="w-full py-4 rounded-2xl font-semibold text-white text-base tracking-wide transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #3b98f0 0%, #1460a8 100%)",
            boxShadow: "0 6px 24px rgba(59, 152, 240, 0.45)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 8px 28px rgba(59, 152, 240, 0.6)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 6px 24px rgba(59, 152, 240, 0.45)";
          }}
        >
          Begin your story
        </button>
      </div>
    </main>
  );
}
