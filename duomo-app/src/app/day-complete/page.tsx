"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function getFeelingLabel(value: number): string {
  if (value <= 2) return "Still feeling stressed";
  if (value === 3) return "Neutral";
  if (value === 4) return "More peaceful";
  return "Calm and clear";
}

type ProgressContent = {
  title: string;
  support: string;
  rows: { from: string; to: string; note: string }[];
};

function getProgressContent(value: number): ProgressContent {
  if (value <= 2) {
    return {
      title: "Your first progress",
      support: "Even if you still feel stressed, you showed up today. That's the first step.",
      rows: [
        { from: "Stress", to: "Named", note: "You noticed what you're carrying." },
        { from: "No direction", to: "First light", note: "You reflected on Scripture for guidance." },
        { from: "Confidence", to: "Started", note: "You chose one clear action for today." },
      ],
    };
  }
  if (value <= 3) {
    return {
      title: "Your first progress",
      support: "Your first 5-minute session helped you pause and take one step forward.",
      rows: [
        { from: "Stress", to: "A little calmer", note: "You brought your stress to God." },
        { from: "No direction", to: "Next step", note: "You reflected on Scripture for guidance." },
        { from: "Confidence", to: "Started", note: "You chose one clear action for today." },
      ],
    };
  }
  return {
    title: "Your first progress",
    support: "Today's session helped you move from stress toward peace and clarity.",
    rows: [
      { from: "Stress", to: "Peace", note: "You brought your stress to God." },
      { from: "No direction", to: "Clarity", note: "You reflected on Scripture for guidance." },
      { from: "Confidence", to: "First step", note: "You chose one clear action for today." },
    ],
  };
}

export default function DayCompletePage() {
  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(3);
  const [hasInteracted, setHasInteracted] = useState(false);

  return (
    <main
      className="min-h-screen flex flex-col items-center relative"
      style={{
        background:
          "linear-gradient(175deg, #f0f7ff 0%, #f8fbff 50%, #e8f4ff 100%)",
      }}
    >
      {/* Background blobs */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
      />
      <div
        className="absolute bottom-0 -left-16 w-56 h-56 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60b0f5, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #5a9e6e, transparent)" }}
      />

      {/* Top nav */}
      <div className="flex items-center justify-between px-5 pt-12 pb-2 max-w-sm mx-auto w-full">
        <div className="w-9" />
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
        <div className="w-9" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 max-w-sm mx-auto w-full py-4 animate-fade-in-up">
        {/* Plant / olive branch illustration */}
        <div className="mb-4 relative">
          {/* Soft glow */}
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background: "radial-gradient(ellipse, rgba(90,158,110,0.18) 0%, transparent 70%)",
              width: "120px",
              height: "120px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          <svg
            width="110"
            height="110"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main stem */}
            <path
              d="M100 170 C100 170 100 110 100 80 C100 50 90 30 80 15"
              stroke="#5a7a50"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />

            {/* Branch left – bottom */}
            <path
              d="M100 140 C88 135 72 138 62 132"
              stroke="#5a7a50"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="75" cy="137" rx="11" ry="6" fill="#6ab87a" transform="rotate(-20 75 137)" opacity="0.85" />
            <ellipse cx="63" cy="132" rx="9" ry="5" fill="#82c894" transform="rotate(-10 63 132)" opacity="0.8" />

            {/* Branch right – bottom */}
            <path
              d="M100 130 C112 126 126 130 138 124"
              stroke="#5a7a50"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="124" cy="128" rx="11" ry="6" fill="#6ab87a" transform="rotate(20 124 128)" opacity="0.85" />
            <ellipse cx="138" cy="124" rx="9" ry="5" fill="#82c894" transform="rotate(10 138 124)" opacity="0.8" />

            {/* Branch left – middle */}
            <path
              d="M100 108 C86 104 70 108 58 100"
              stroke="#5a7a50"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="72" cy="106" rx="12" ry="6.5" fill="#5aad70" transform="rotate(-25 72 106)" opacity="0.85" />
            <ellipse cx="59" cy="100" rx="10" ry="5.5" fill="#7ac88e" transform="rotate(-15 59 100)" opacity="0.8" />

            {/* Branch right – middle */}
            <path
              d="M100 96 C115 92 130 96 142 88"
              stroke="#5a7a50"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="128" cy="93" rx="12" ry="6.5" fill="#5aad70" transform="rotate(25 128 93)" opacity="0.85" />
            <ellipse cx="142" cy="88" rx="10" ry="5.5" fill="#7ac88e" transform="rotate(15 142 88)" opacity="0.8" />

            {/* Branch left – upper */}
            <path
              d="M96 72 C82 68 68 70 56 62"
              stroke="#5a7a50"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="70" cy="68" rx="11" ry="6" fill="#4a9e60" transform="rotate(-30 70 68)" opacity="0.85" />
            <ellipse cx="57" cy="62" rx="9" ry="5" fill="#6ab880" transform="rotate(-20 57 62)" opacity="0.8" />

            {/* Branch right – upper */}
            <path
              d="M100 60 C115 56 126 60 136 50"
              stroke="#5a7a50"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="124" cy="57" rx="11" ry="6" fill="#4a9e60" transform="rotate(30 124 57)" opacity="0.85" />
            <ellipse cx="136" cy="50" rx="9" ry="5" fill="#6ab880" transform="rotate(20 136 50)" opacity="0.8" />

            {/* Tip leaves */}
            <ellipse cx="80" cy="16" rx="10" ry="6" fill="#3a8a50" transform="rotate(-40 80 16)" opacity="0.85" />
            <ellipse cx="88" cy="10" rx="8" ry="5" fill="#5aad70" transform="rotate(-20 88 10)" opacity="0.8" />

            {/* Golden berries / olive fruits */}
            <circle cx="62" cy="132" r="3.5" fill="#c9a84c" opacity="0.85" />
            <circle cx="138" cy="124" r="3.5" fill="#c9a84c" opacity="0.85" />
            <circle cx="58" cy="100" r="3" fill="#e8c46c" opacity="0.8" />
            <circle cx="142" cy="88" r="3" fill="#e8c46c" opacity="0.8" />
            <circle cx="56" cy="62" r="2.5" fill="#c9a84c" opacity="0.7" />
            <circle cx="136" cy="50" r="2.5" fill="#c9a84c" opacity="0.7" />
          </svg>
        </div>

        {/* Title */}
        <div className="text-center space-y-3 mb-6">
          <p
            className="text-xs font-semibold tracking-widest uppercase"
            style={{ color: "#3b98f0" }}
          >
            DAY 1 COMPLETE
          </p>
          <h1
            className="text-3xl font-bold leading-snug"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            You completed your first day
          </h1>

          <p
            className="text-sm leading-relaxed px-2"
            style={{ color: "#1a3a5c" }}
          >
            Today, you prayed about stress, reflected on Scripture, and chose one clear step toward peace and confidence.
          </p>
        </div>

        {/* Recap card */}
        <div
          className="w-full rounded-2xl px-5 py-4 mb-4"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(201,168,76,0.2)",
            boxShadow: "0 2px 12px rgba(201,168,76,0.08)",
          }}
        >
          <p
            className="text-xs font-semibold tracking-wide uppercase mb-3"
            style={{ color: "#5a80a0" }}
          >
            Today you completed:
          </p>
          <div className="flex flex-col gap-2">
            {[
              { emoji: "🙏", label: "Prayer for peace and clarity" },
              { emoji: "📖", label: "Scripture for direction" },
              { emoji: "✦", label: "Scripture reflection" },
              { emoji: "✅", label: "One small step" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className="text-base leading-none" style={{ color: "#c9a84c", minWidth: "1.25rem", textAlign: "center" }}>
                  {item.emoji}
                </span>
                <span className="text-sm" style={{ color: "#1a3a5c" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Support copy */}
        <p
          className="text-sm text-center leading-relaxed px-2 mb-4"
          style={{ color: "#5a80a0" }}
        >
          Small daily steps can build a stronger faith routine.
        </p>

        {/* Emotional check-in */}
        <div className="w-full mb-4">
          <p
            className="text-base font-semibold text-center mb-1"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            How do you feel after today&rsquo;s session?
          </p>
          <p
            className="text-xs text-center mb-5"
            style={{ color: "#5a80a0" }}
          >
            Take a moment to notice what changed for you.
          </p>

          {/* Slider */}
          <div
            className="rounded-2xl px-5 py-4"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(59,152,240,0.15)",
              boxShadow: "0 2px 10px rgba(59,152,240,0.06)",
            }}
          >
            {/* Track labels */}
            <div className="flex justify-between mb-2">
              <span className="text-xs" style={{ color: "#5a80a0" }}>Stressed</span>
              <span className="text-xs" style={{ color: "#5a80a0" }}>Calm</span>
            </div>

            {/* Range input */}
            <div className="relative">
              <style>{`
                @keyframes progressReveal {
                  from { opacity: 0; transform: translateY(8px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                .progress-reveal {
                  animation: progressReveal 0.4s ease both;
                }
                .feeling-slider {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 100%;
                  height: 6px;
                  border-radius: 9999px;
                  outline: none;
                  cursor: pointer;
                  background: linear-gradient(
                    to right,
                    #3b98f0 0%,
                    #3b98f0 ${((sliderValue - 1) / 4) * 100}%,
                    rgba(59,152,240,0.18) ${((sliderValue - 1) / 4) * 100}%,
                    rgba(59,152,240,0.18) 100%
                  );
                }
                .feeling-slider::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 26px;
                  height: 26px;
                  border-radius: 50%;
                  background: #ffffff;
                  border: 2.5px solid #3b98f0;
                  box-shadow: 0 2px 8px rgba(59,152,240,0.30);
                  cursor: pointer;
                  transition: box-shadow 0.15s ease;
                }
                .feeling-slider::-webkit-slider-thumb:active {
                  box-shadow: 0 0 0 6px rgba(59,152,240,0.15), 0 2px 8px rgba(59,152,240,0.30);
                }
                .feeling-slider::-moz-range-thumb {
                  width: 26px;
                  height: 26px;
                  border-radius: 50%;
                  background: #ffffff;
                  border: 2.5px solid #3b98f0;
                  box-shadow: 0 2px 8px rgba(59,152,240,0.30);
                  cursor: pointer;
                }
              `}</style>
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={sliderValue}
                onChange={(e) => {
                  setSliderValue(Number(e.target.value));
                  if (!hasInteracted) setHasInteracted(true);
                }}
                className="feeling-slider"
              />
            </div>

            {/* Feeling label */}
            <p
              className="text-center text-sm mt-3 transition-all duration-200"
              style={{ color: "#1a3a5c", minHeight: "1.25rem" }}
            >
              {getFeelingLabel(sliderValue)}
            </p>
          </div>
        </div>

        {/* First progress block — revealed after slider interaction */}
        {hasInteracted && (() => {
          const progress = getProgressContent(sliderValue);
          return (
            <div
              key={sliderValue}
              className="w-full mb-4 progress-reveal"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(90,158,110,0.18)",
                borderRadius: "16px",
                padding: "16px 20px",
              }}
            >
              <p
                className="text-xs font-semibold tracking-wide uppercase mb-3"
                style={{ color: "#5a9e6e", letterSpacing: "0.08em" }}
              >
                {progress.title}
              </p>
              <div className="flex flex-col gap-3">
                {progress.rows.map((row) => (
                  <div key={row.from}>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-sm"
                        style={{ color: "#7a9ab8" }}
                      >
                        {row.from}
                      </span>
                      <span
                        className="text-xs mx-1 flex-shrink-0"
                        style={{ color: "#b0c8d8" }}
                        aria-hidden="true"
                      >
                        →
                      </span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: "#1a3a5c" }}
                      >
                        {row.to}
                      </span>
                    </div>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: "#9ab4c8", paddingLeft: "0.1rem" }}
                    >
                      {row.note}
                    </p>
                  </div>
                ))}
              </div>
              <p
                className="text-xs leading-relaxed mt-3 pt-3"
                style={{
                  color: "#7a9ab8",
                  borderTop: "1px solid rgba(90,158,110,0.10)",
                }}
              >
                {progress.support}
              </p>
            </div>
          );
        })()}

        {/* Tomorrow preview card */}
        <div
          className="w-full rounded-2xl px-5 py-5"
          style={{
            background: "linear-gradient(135deg, rgba(59,152,240,0.07) 0%, rgba(20,96,168,0.05) 100%)",
            border: "1px solid rgba(59,152,240,0.18)",
          }}
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#3b98f0" }}
          >
            Tomorrow&rsquo;s step
          </p>
          <p
            className="text-sm leading-relaxed mb-2"
            style={{ color: "#1a3a5c" }}
          >
            We&rsquo;ll help you keep building clarity one step at a time.
          </p>
          <p
            className="text-xs leading-relaxed"
            style={{ color: "#5a80a0" }}
          >
            Your next 5-minute session will be ready tomorrow.
          </p>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-10 pt-3 max-w-sm mx-auto w-full">
        <button
          onClick={() => router.push("/")}
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
          Continue tomorrow
        </button>
      </div>
    </main>
  );
}
