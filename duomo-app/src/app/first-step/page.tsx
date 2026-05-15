"use client";

import { useRouter } from "next/navigation";

export default function FirstStepPage() {
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
      <div className="flex-1 px-5 pt-4 pb-4 max-w-sm mx-auto w-full animate-fade-in-up overflow-y-auto flex flex-col justify-center">

        {/* Illustration — soft radiant dove */}
        <div className="flex justify-center mb-6">
          <svg
            width="130"
            height="130"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer soft glow */}
            <circle cx="80" cy="80" r="58" fill="rgba(59,152,240,0.05)" />
            <circle cx="80" cy="80" r="44" fill="rgba(201,168,76,0.07)" />

            {/* Radiant rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 80 + 30 * Math.cos(rad);
              const y1 = 80 + 30 * Math.sin(rad);
              const x2 = 80 + 52 * Math.cos(rad);
              const y2 = 80 + 52 * Math.sin(rad);
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#c9a84c"
                  strokeWidth="1.5"
                  strokeOpacity="0.35"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Inner circle ring */}
            <circle cx="80" cy="80" r="28" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.2" fill="rgba(255,255,255,0.6)" />

            {/* Dove body */}
            <path
              d="M68 82 C62 78 58 70 64 66 C66 64 70 65 72 67 C74 63 80 60 86 62 C92 64 94 70 90 76 C96 74 100 78 96 83 C92 87 86 86 82 83 L78 90 L74 83 C71 85 66 86 68 82 Z"
              fill="rgba(255,255,255,0.9)"
              stroke="#90aec8"
              strokeWidth="1.2"
            />
            {/* Wing detail */}
            <path
              d="M72 67 C76 65 82 66 86 70"
              stroke="#5a80a0"
              strokeWidth="1"
              fill="none"
              strokeOpacity="0.5"
              strokeLinecap="round"
            />
            {/* Dove eye */}
            <circle cx="88" cy="68" r="1.5" fill="#1a2e4a" fillOpacity="0.6" />
            {/* Olive twig in beak */}
            <path
              d="M96 75 C100 72 104 74 103 78"
              stroke="#4a7c59"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            <ellipse cx="101" cy="73" rx="3.5" ry="2" fill="#5a9e6e" transform="rotate(-20 101 73)" opacity="0.8" />
            <ellipse cx="104" cy="76" rx="3" ry="1.8" fill="#7ab88a" transform="rotate(10 104 76)" opacity="0.7" />

            {/* Completion checkmark ring */}
            <circle cx="80" cy="110" r="10" fill="rgba(59,152,240,0.1)" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.4" />
            <path
              d="M75 110 L78.5 113.5 L85 107"
              stroke="#3b98f0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity="0.8"
            />
          </svg>
        </div>

        {/* Label */}
        <div className="text-center mb-4">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#3b98f0" }}
          >
            FIRST STEP COMPLETE
          </p>

          {/* Title */}
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
          >
            Well done
          </h1>

          {/* Main copy */}
          <p
            className="text-base leading-relaxed mb-2 px-2"
            style={{ color: "#1a3a5c" }}
          >
            You took your first step toward growing in faith and confidence.
          </p>

          {/* Support copy */}
          <p
            className="text-sm leading-relaxed px-3"
            style={{ color: "#4a6a8a" }}
          >
            You paused, brought your stress to God, and made space for peace and clarity.
          </p>
        </div>

        {/* Verse card */}
        <div
          className="rounded-2xl px-5 py-4 mt-5"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(201,168,76,0.25)",
            boxShadow: "0 2px 12px rgba(201,168,76,0.08)",
          }}
        >
          <svg width="20" height="14" viewBox="0 0 24 18" fill="none" className="mb-2 opacity-40">
            <path
              d="M0 18V8.4C0 3.6 3.12 0.72 9.36 0L10.56 2.04C7.68 2.52 5.88 3.72 5.04 5.64H8.4V18H0ZM13.6 18V8.4C13.6 3.6 16.72 0.72 22.96 0L24 2.04C21.12 2.52 19.36 3.72 18.64 5.64H22V18H13.6Z"
              fill="#c9a84c"
            />
          </svg>
          <p
            className="text-sm leading-relaxed italic"
            style={{ color: "#1a3a5c", fontFamily: "Georgia, serif" }}
          >
            Your word is a lamp to my feet and a light to my path
          </p>
          <p className="text-xs mt-2 font-semibold" style={{ color: "#c9a84c" }}>
            — Psalm 119:105
          </p>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-12 pt-4 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.push("/healing")}
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
