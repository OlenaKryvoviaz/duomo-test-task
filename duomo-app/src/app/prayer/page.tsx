"use client";

import { useRouter } from "next/navigation";

export default function PrayerPage() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen flex flex-col relative"
      style={{
        background:
          "linear-gradient(175deg, #f0f7ff 0%, #f8fbff 50%, #e8f4ff 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60b0f5, transparent)" }}
      />

      {/* Top navigation */}
      <div className="flex items-center justify-between px-5 pt-12 pb-2 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"
          style={{ background: "rgba(59,152,240,0.1)" }}
          aria-label="Back"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1460a8" />
          </svg>
        </button>

        <div className="flex gap-1.5 items-center">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-full"
              style={{
                width: i === 1 ? 20 : 6,
                height: 6,
                background: i === 1 ? "#3b98f0" : "rgba(59,152,240,0.25)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => router.push("/")}
          className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: "rgba(59,152,240,0.1)" }}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              fill="#5a80a0"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pt-4 pb-4 max-w-sm mx-auto w-full animate-fade-in-up overflow-y-auto">
        {/* Key illustration */}
        <div className="flex justify-center mb-6">
          <svg
            width="130"
            height="130"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft glow behind key */}
            <circle cx="80" cy="72" r="52" fill="rgba(201,168,76,0.08)" />

            {/* Key – head circle */}
            <circle cx="74" cy="60" r="30" stroke="#c9a84c" strokeWidth="4" fill="rgba(201,168,76,0.07)" />
            <circle cx="74" cy="60" r="18" stroke="#c9a84c" strokeWidth="2.5" fill="none" strokeOpacity="0.5" />
            <circle cx="74" cy="60" r="6" fill="#c9a84c" fillOpacity="0.5" />

            {/* Key – shaft */}
            <rect x="70" y="88" width="8" height="52" rx="4" fill="#c9a84c" />
            {/* Key – teeth */}
            <rect x="78" y="114" width="14" height="7" rx="3" fill="#c9a84c" />
            <rect x="78" y="128" width="10" height="7" rx="3" fill="#c9a84c" />

            {/* Olive branch – left side */}
            <path d="M46 72 C32 68 24 56 28 44" stroke="#4a7c59" strokeWidth="2" fill="none" strokeLinecap="round" />
            <ellipse cx="32" cy="52" rx="7" ry="4" fill="#5a9e6e" transform="rotate(-30 32 52)" opacity="0.8" />
            <ellipse cx="26" cy="62" rx="6" ry="3.5" fill="#5a9e6e" transform="rotate(-15 26 62)" opacity="0.7" />
            <ellipse cx="38" cy="44" rx="5" ry="3" fill="#7ab88a" transform="rotate(-45 38 44)" opacity="0.7" />

            {/* Olive branch – right side */}
            <path d="M104 68 C118 64 126 50 122 38" stroke="#4a7c59" strokeWidth="2" fill="none" strokeLinecap="round" />
            <ellipse cx="118" cy="48" rx="7" ry="4" fill="#5a9e6e" transform="rotate(30 118 48)" opacity="0.8" />
            <ellipse cx="124" cy="58" rx="6" ry="3.5" fill="#5a9e6e" transform="rotate(15 124 58)" opacity="0.7" />
            <ellipse cx="112" cy="40" rx="5" ry="3" fill="#7ab88a" transform="rotate(45 112 40)" opacity="0.7" />

            {/* Tiny berries */}
            <circle cx="28" cy="44" r="3" fill="#c9a84c" opacity="0.7" />
            <circle cx="122" cy="38" r="3" fill="#c9a84c" opacity="0.7" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#3b98f0" }}
          >
            Daily Prayer
          </p>
          <h1
            className="text-3xl font-bold mb-1"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
          >
            Prayer for peace and clarity
          </h1>
        </div>

        {/* Personalised intro */}
        <p
          className="text-sm leading-relaxed text-center mb-6 px-1"
          style={{ color: "#4a6a8a" }}
        >
          Today, we&apos;ll bring your stress to God and ask for peace, clarity,
          and confidence for the next step.
        </p>

        {/* Prayer letter */}
        <div
          className="rounded-2xl px-5 py-4"
          style={{
            background: "rgba(255,255,255,0.7)",
            border: "1px solid rgba(96,176,245,0.2)",
            boxShadow: "0 2px 12px rgba(30,125,212,0.06)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#2a4a6a" }}>
            <span className="font-semibold" style={{ fontFamily: "Georgia, serif" }}>
              Heavenly Father,
            </span>
            <br /><br />
            As I bring my stress before You today, Lord, I ask for Your peace,
            clarity, and the confidence to take my next step. Help me to
            understand how Your Word guides my life, my character, and my
            relationships. Knowing that You will guide my heart, mind, and soul
            — thank You for always being near.
            <br /><br />
            Thank You for Your love. Thank You for Your strength. Thank You for
            Your Grace.
            <br /><br />
            <span className="font-medium" style={{ fontFamily: "Georgia, serif" }}>
              Amen.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-12 pt-4 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.push("/first-step")}
          className="w-full py-4 rounded-2xl font-semibold text-white text-base tracking-wide transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #3b98f0 0%, #1460a8 100%)",
            boxShadow: "0 4px 18px rgba(20, 96, 168, 0.35)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 6px 22px rgba(20, 96, 168, 0.45)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 4px 18px rgba(20, 96, 168, 0.35)";
          }}
        >
          Next
        </button>
      </div>
    </main>
  );
}
