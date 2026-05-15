"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EmotionsPage() {
  const router = useRouter();
  const [action, setAction] = useState("");

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
        className="absolute top-10 right-0 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60b0f5, transparent)" }}
      />
      <div
        className="absolute bottom-20 -left-10 w-40 h-40 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
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
                width: i === 3 ? 20 : 6,
                height: 6,
                background: i === 3 ? "#3b98f0" : "rgba(59,152,240,0.25)",
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
      <div className="flex-1 px-5 pt-5 pb-4 max-w-sm mx-auto w-full animate-fade-in-up overflow-y-auto">
        {/* Header with badge */}
        <div className="flex items-center gap-3 mb-4">
          <h1
            className="text-2xl font-bold"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
          >
            One small action
          </h1>
          <span
            className="px-2.5 py-1 rounded-lg text-xs font-bold tracking-wide uppercase"
            style={{
              background: "linear-gradient(135deg, #3b98f0, #1460a8)",
              color: "#fff",
            }}
          >
            TODAY&apos;S STEP
          </span>
        </div>

        {/* Free label */}
        <div className="flex items-center gap-2 mb-5">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{ background: "rgba(59,152,240,0.1)", border: "1px solid rgba(59,152,240,0.2)" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
                fill="#3b98f0"
              />
            </svg>
            <span className="text-xs font-semibold" style={{ color: "#3b98f0" }}>
              1-minute step
            </span>
          </div>
        </div>

        {/* Main instruction card */}
        <div
          className="rounded-2xl px-5 py-5 mb-4"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(96,176,245,0.2)",
            boxShadow: "0 2px 12px rgba(30,125,212,0.07)",
          }}
        >
          <p className="text-sm font-semibold leading-relaxed mb-3" style={{ color: "#1a2e4a" }}>
            Choose one small step for today.
          </p>

          <p className="text-sm leading-relaxed mb-3" style={{ color: "#2a4a6a" }}>
            Stand in front of a mirror, take one slow breath, and say:
          </p>

          {/* Affirmation quote */}
          <div
            className="rounded-xl px-4 py-3 mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(232,210,140,0.05) 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <p
              className="text-sm italic leading-relaxed text-center"
              style={{ color: "#7a6030", fontFamily: "Georgia, serif" }}
            >
              &ldquo;God is with me. I do not need to solve everything today. I can take one clear step.&rdquo;
            </p>
          </div>

          <p className="text-sm leading-relaxed mb-3" style={{ color: "#2a4a6a" }}>
            Then write down one small step you can take today.
          </p>

          {/* Textarea */}
          <textarea
            value={action}
            onChange={(e) => setAction(e.target.value)}
            placeholder="My one small step..."
            rows={4}
            className="w-full text-sm rounded-xl px-4 py-3 outline-none resize-none transition-all duration-200"
            style={{
              background: "rgba(240,247,255,0.9)",
              border: "1.5px solid rgba(96,176,245,0.3)",
              color: "#1a2e4a",
              lineHeight: "1.6",
            }}
            onFocus={(e) => {
              e.target.style.border = "1.5px solid #3b98f0";
              e.target.style.boxShadow = "0 0 0 3px rgba(59,152,240,0.12)";
            }}
            onBlur={(e) => {
              e.target.style.border = "1.5px solid rgba(96,176,245,0.3)";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Ratify prayer */}
        <div
          className="rounded-2xl px-5 py-4"
          style={{
            background: "linear-gradient(135deg, rgba(59,152,240,0.06) 0%, rgba(20,96,168,0.04) 100%)",
            border: "1px solid rgba(59,152,240,0.15)",
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded flex items-center justify-center mt-0.5 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #3b98f0, #1460a8)",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                  fill="white"
                />
              </svg>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#2a4a6a" }}>
              I completed my step. I paused, spoke truth over my day, and chose one clear next step.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-12 pt-4 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.push("/day-complete")}
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
