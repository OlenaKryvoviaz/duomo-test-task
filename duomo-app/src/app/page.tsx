"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(160deg, #dbeeff 0%, #f0f7ff 40%, #e8f4ff 70%, #c8e4ff 100%)",
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl -z-10"
        style={{ background: "radial-gradient(circle, #60b0f5, transparent)" }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full opacity-25 blur-3xl -z-10"
        style={{ background: "radial-gradient(circle, #1e7dd4, transparent)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full opacity-15 blur-2xl -z-10"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
      />

      <div className="w-full max-w-md px-6 py-10 animate-fade-in-up">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          {/* Arch icon */}
          <div className="flex justify-center mb-5">
            <div className="relative">
              <svg
                width="64"
                height="72"
                viewBox="0 0 64 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-md"
              >
                <path
                  d="M8 72V36C8 18.327 18.745 4 32 4C45.255 4 56 18.327 56 36V72"
                  stroke="#1e7dd4"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M8 72V36C8 18.327 18.745 4 32 4C45.255 4 56 18.327 56 36V72"
                  stroke="url(#archGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
                <line
                  x1="4"
                  y1="72"
                  x2="60"
                  y2="72"
                  stroke="#1e7dd4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="32" cy="34" r="6" fill="#c9a84c" opacity="0.85" />
                <defs>
                  <linearGradient id="archGradient" x1="8" y1="4" x2="56" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#60b0f5" />
                    <stop offset="1" stopColor="#1460a8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <h1
            className="text-5xl font-bold tracking-[0.25em] uppercase mb-2"
            style={{ color: "#1460a8", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            DUOMO
          </h1>
          <p
            className="text-sm font-medium tracking-[0.15em] uppercase animate-shimmer"
            style={{ color: "#3b98f0" }}
          >
            Theological Companion
          </p>
        </div>

        {/* Welcome message */}
        <div
          className="text-center mb-8 px-4"
          style={{ animationDelay: "0.15s" }}
        >
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#1a3a5c", fontFamily: "Georgia, serif" }}
          >
            &ldquo;Seek and you will find; knock and the door will be opened.&rdquo;
          </p>
          <p className="text-sm mt-2" style={{ color: "#5a80a0" }}>
            Welcome. Your journey through sacred wisdom begins.
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8 shadow-xl"
          style={{
            background: "rgba(255, 255, 255, 0.72)",
            backdropFilter: "blur(18px)",
            border: "1px solid rgba(96, 176, 245, 0.3)",
            boxShadow:
              "0 8px 40px rgba(30, 125, 212, 0.12), 0 2px 8px rgba(30, 125, 212, 0.08)",
          }}
        >
          <h2
            className="text-xl font-semibold mb-6 text-center"
            style={{ color: "#1460a8" }}
          >
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "#1a3a5c" }}
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(240, 247, 255, 0.9)",
                  border: "1.5px solid rgba(96, 176, 245, 0.4)",
                  color: "#1a2e4a",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1.5px solid #3b98f0";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59, 152, 240, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1.5px solid rgba(96, 176, 245, 0.4)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1.5"
                style={{ color: "#1a3a5c" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(240, 247, 255, 0.9)",
                  border: "1.5px solid rgba(96, 176, 245, 0.4)",
                  color: "#1a2e4a",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1.5px solid #3b98f0";
                  e.target.style.boxShadow = "0 0 0 3px rgba(59, 152, 240, 0.15)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1.5px solid rgba(96, 176, 245, 0.4)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Forgot password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs transition-colors"
                style={{ color: "#3b98f0" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#1460a8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#3b98f0")
                }
              >
                Forgot password?
              </button>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-center" style={{ color: "#c0392b" }}>
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 mt-1"
              style={{
                background: loading
                  ? "#90c4f0"
                  : "linear-gradient(135deg, #3b98f0 0%, #1460a8 100%)",
                color: "#ffffff",
                boxShadow: loading
                  ? "none"
                  : "0 4px 16px rgba(20, 96, 168, 0.35)",
                cursor: loading ? "not-allowed" : "pointer",
                transform: "translateY(0)",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-1px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 6px 20px rgba(20, 96, 168, 0.45)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 16px rgba(20, 96, 168, 0.35)";
              }}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(96, 176, 245, 0.3)" }}
            />
            <span className="text-xs" style={{ color: "#90aec8" }}>
              or
            </span>
            <div
              className="flex-1 h-px"
              style={{ background: "rgba(96, 176, 245, 0.3)" }}
            />
          </div>

          <p className="text-center text-sm" style={{ color: "#5a80a0" }}>
            New to DUOMO?{" "}
            <button
              type="button"
              className="font-semibold transition-colors"
              style={{ color: "#1460a8" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#3b98f0")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#1460a8")
              }
            >
              Create an account
            </button>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs mt-8" style={{ color: "#90aec8" }}>
          © 2026 DUOMO · Guided by faith, illuminated by knowledge
        </p>
      </div>
    </main>
  );
}
