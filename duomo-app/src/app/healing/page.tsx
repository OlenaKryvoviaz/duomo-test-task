"use client";

import { useRouter } from "next/navigation";

export default function HealingPage() {
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
        className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #60b0f5, transparent)" }}
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
                width: i === 2 ? 20 : 6,
                height: 6,
                background: i === 2 ? "#3b98f0" : "rgba(59,152,240,0.25)",
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
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: "#3b98f0" }}
        >
          TODAY&apos;S SCRIPTURE
        </p>

        <h1
          className="text-2xl font-bold mb-4"
          style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
        >
          Scripture for direction
        </h1>

        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: "#4a6a8a" }}
        >
          As you read, notice one phrase that can guide your next step today.
        </p>

        <div
          className="rounded-2xl px-5 py-5 space-y-4"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(96,176,245,0.2)",
            boxShadow: "0 2px 12px rgba(30,125,212,0.06)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#2a4a6a" }}>
            Imagine you are walking through a forest. At first, the path feels
            familiar. Then it narrows. The signs disappear. You are not sure
            which way to go.
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "#2a4a6a" }}>
            Stress can feel the same way. It can make the next step feel unclear.
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "#2a4a6a" }}>
            But Scripture reminds us that God does not leave us alone in
            uncertainty. His Word can become a lamp for the next step, even when
            the full path is not visible yet.
          </p>

          <p className="text-sm leading-relaxed" style={{ color: "#2a4a6a" }}>
            Today, you do not need to solve everything. Start by noticing one
            phrase that gives you peace or direction.
          </p>
        </div>

        {/* Pull quote */}
        <div
          className="rounded-2xl px-5 py-4 mt-4"
          style={{
            background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(232,210,140,0.05) 100%)",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <p
            className="text-sm italic text-center leading-relaxed"
            style={{ color: "#7a6030", fontFamily: "Georgia, serif" }}
          >
            &ldquo;Trust in the Lord with all your heart and lean not on your own understanding.&rdquo;
          </p>
          <p className="text-xs text-center mt-2 font-semibold" style={{ color: "#c9a84c" }}>
            — Proverbs 3:5
          </p>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-safe pt-4 max-w-sm mx-auto w-full" style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom) + 1.5rem)" }}>
        <button
          onClick={() => router.push("/quiz")}
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
