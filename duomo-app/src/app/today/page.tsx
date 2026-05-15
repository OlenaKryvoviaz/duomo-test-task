"use client";

import { useRouter } from "next/navigation";

const activities = [
  {
    id: "prayer",
    label: "Prayer for peace",
    description: "A calming prayer to slow down",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.71-5.12L8.7 12.3a.9963.9963 0 010-1.41c.39-.39 1.02-.39 1.41 0l2.18 2.18 5.09-5.09c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-5.79 5.79a.9963.9963 0 01-1.41 0z"
          fill="#3b98f0"
        />
      </svg>
    ),
    color: "#3b98f0",
  },
  {
    id: "scripture",
    label: "Scripture for direction",
    description: "A verse to guide your next step",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
          fill="#3b98f0"
        />
      </svg>
    ),
    color: "#3b98f0",
  },
  {
    id: "reflection",
    label: "Quick reflection",
    description: "Find clarity in 2 minutes",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
          fill="#3b98f0"
        />
      </svg>
    ),
    color: "#3b98f0",
  },
  {
    id: "action",
    label: "One small action",
    description: "A step toward growing in confidence",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="#3b98f0"
        />
      </svg>
    ),
    color: "#3b98f0",
  },
];

export default function TodayPage() {
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
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60b0f5, transparent)" }}
      />
      <div
        className="absolute bottom-0 -left-20 w-56 h-56 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #1e7dd4, transparent)" }}
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
            <path
              d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              fill="#1460a8"
            />
          </svg>
        </button>

        {/* Step dots */}
        <div className="flex gap-1.5 items-center">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 0 ? 20 : 6,
                height: 6,
                background: i === 0 ? "#3b98f0" : "rgba(59,152,240,0.25)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => router.push("/")}
          className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"
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
      <div className="flex-1 px-5 pt-6 pb-4 max-w-sm mx-auto w-full animate-fade-in-up">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: "#3b98f0" }}>
            Your first spiritual plan
          </p>
          <h1
            className="text-2xl font-bold leading-snug mb-3"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
          >
            Your plan is built around you
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#5a80a0" }}>
            Based on your answers, stress and lack of direction seem to be making it harder to feel clear and confident.
          </p>
          <p className="text-sm leading-relaxed mt-2" style={{ color: "#5a80a0" }}>
            So we&apos;ll start with a simple 5-minute session to help you slow down, reconnect with God, and take one small step toward growing in confidence.
          </p>
        </div>

        {/* Activity cards */}
        <div className="space-y-3 mb-5">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-150 cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(96, 176, 245, 0.2)",
                boxShadow: "0 2px 12px rgba(30,125,212,0.07)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(59,152,240,0.1)" }}
              >
                {activity.icon}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm" style={{ color: "#1a2e4a" }}>
                  {activity.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#5a80a0" }}>
                  {activity.description}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"
                  fill="rgba(59,152,240,0.5)"
                />
              </svg>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom button */}
      <div className="px-5 pb-12 pt-4 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.push("/prayer")}
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
          Start my first step
        </button>
      </div>
    </main>
  );
}
