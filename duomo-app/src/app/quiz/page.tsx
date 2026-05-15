"use client";

import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();

  return (
    <main
      className="min-h-screen flex flex-col relative"
      style={{
        background:
          "linear-gradient(175deg, #f0f7ff 0%, #f8fbff 50%, #e8f4ff 100%)",
      }}
    >
      {/* Background blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b98f0, transparent)" }}
      />

      {/* Top navigation */}
      <div className="flex items-center justify-between px-5 pt-12 pb-2 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.back()}
          className="w-9 h-9 flex items-center justify-center rounded-full"
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
                width: 6,
                height: 6,
                background: "rgba(59,152,240,0.25)",
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
      <div className="flex-1 flex flex-col px-5 pt-6 pb-4 max-w-sm mx-auto w-full animate-fade-in-up">
        {/* Header with badge */}
        <div className="flex items-center gap-3 mb-2">
          <h1
            className="text-2xl font-bold"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
          >
            Scripture reflection
          </h1>
          <span
            className="px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide uppercase"
            style={{
              background: "linear-gradient(135deg, #3b98f0, #1460a8)",
              color: "#fff",
            }}
          >
            Quiz
          </span>
        </div>

        {/* Center illustration */}
        <div className="flex-1 flex flex-col items-center justify-center py-8">
          {/* Quiz icon illustration */}
          <div className="mb-8 relative">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(59,152,240,0.12) 0%, rgba(20,96,168,0.08) 100%)",
                border: "2px solid rgba(59,152,240,0.2)",
              }}
            >
              <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
                {/* Open book */}
                <path
                  d="M32 12 C32 12 18 8 8 10 L8 52 C18 50 32 54 32 54 C32 54 46 50 56 52 L56 10 C46 8 32 12 32 12Z"
                  fill="rgba(59,152,240,0.15)"
                  stroke="#3b98f0"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <line x1="32" y1="12" x2="32" y2="54" stroke="#3b98f0" strokeWidth="2" />
                {/* Lines on left page */}
                <line x1="14" y1="22" x2="28" y2="20" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                <line x1="14" y1="28" x2="28" y2="26" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                <line x1="14" y1="34" x2="26" y2="32" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                {/* Lines on right page */}
                <line x1="36" y1="20" x2="50" y2="22" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                <line x1="36" y1="26" x2="50" y2="28" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                <line x1="36" y1="32" x2="48" y2="34" stroke="#3b98f0" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />
                {/* Question mark */}
                <text x="22" y="46" fontSize="12" fill="#c9a84c" fontWeight="bold">?</text>
                <text x="38" y="46" fontSize="12" fill="#c9a84c" fontWeight="bold">✓</text>
              </svg>
            </div>
            {/* Floating dots */}
            <div
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8d28c)" }}
            >
              <span className="text-white text-xs font-bold">4</span>
            </div>
          </div>

          {/* Quiz description */}
          <div className="text-center space-y-3 px-2">
            <p
              className="text-xl font-bold leading-snug"
              style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
            >
              Reflect on today&apos;s Scripture
            </p>
            <p className="text-sm" style={{ color: "#5a80a0" }}>
              in just 4 quick questions
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-4 mt-7">
            {[
              { icon: "⚡", label: "Quick", desc: "~2 min" },
              { icon: "📖", label: "Scripture", desc: "based" },
              { icon: "✨", label: "Daily", desc: "growth" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg"
                  style={{
                    background: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(96,176,245,0.2)",
                    boxShadow: "0 2px 8px rgba(30,125,212,0.06)",
                  }}
                >
                  {stat.icon}
                </div>
                <p className="text-xs font-semibold" style={{ color: "#1a2e4a" }}>
                  {stat.label}
                </p>
                <p className="text-xs" style={{ color: "#5a80a0" }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-12 pt-4 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.push("/quiz/question")}
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
          Start reflection
        </button>
      </div>
    </main>
  );
}
