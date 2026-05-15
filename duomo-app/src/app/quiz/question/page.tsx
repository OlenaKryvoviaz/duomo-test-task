"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    question: "Which Psalm describes God as a lamp to our feet and a light to our path?",
    options: ["Psalm 23", "Psalm 119", "Psalm 91", "Psalm 46"],
    correct: 1,
  },
  {
    id: 2,
    question: "When we are faced with temptation, what does God promise according to 1 Corinthians 10:13?",
    options: [
      "He will remove the temptation immediately",
      "He will provide a way out so we can endure it",
      "He will punish those who tempt us",
      "He will strengthen us to never feel tempted",
    ],
    correct: 1,
  },
  {
    id: 3,
    question: "What does 'healing' in the spiritual sense primarily refer to?",
    options: [
      "Physical recovery from illness",
      "Restoration of relationship with God and others",
      "Financial prosperity",
      "Relief from emotional pain only",
    ],
    correct: 1,
  },
  {
    id: 4,
    question: "According to Scripture, what is the fruit of the Spirit that helps us manage our emotions?",
    options: [
      "Courage and boldness",
      "Love, joy, peace, and self-control",
      "Wisdom and wealth",
      "Power and authority",
    ],
    correct: 1,
  },
];

export default function QuizQuestionPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const question = questions[currentQ];
  const isLast = currentQ === questions.length - 1;

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
  }

  function handleNext() {
    if (isLast) {
      router.push("/emotions");
    } else {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setAnswered(false);
    }
  }

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
        className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b98f0, transparent)" }}
      />

      {/* Top navigation */}
      <div className="flex items-center justify-between px-5 pt-12 pb-2 max-w-sm mx-auto w-full">
        <button
          onClick={() => {
            if (currentQ > 0) {
              setCurrentQ((q) => q - 1);
              setSelected(null);
              setAnswered(false);
            } else {
              router.back();
            }
          }}
          className="w-9 h-9 flex items-center justify-center rounded-full"
          style={{ background: "rgba(59,152,240,0.1)" }}
          aria-label="Back"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#1460a8" />
          </svg>
        </button>

        {/* Progress fraction */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: "#1460a8" }}>
            {currentQ + 1}
          </span>
          <span className="text-sm" style={{ color: "#90aec8" }}>
            / {questions.length}
          </span>
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

      {/* Progress bar */}
      <div className="px-5 max-w-sm mx-auto w-full mt-2">
        <div
          className="w-full h-1.5 rounded-full overflow-hidden"
          style={{ background: "rgba(59,152,240,0.15)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${((currentQ + 1) / questions.length) * 100}%`,
              background: "linear-gradient(90deg, #3b98f0, #1460a8)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pt-6 pb-4 max-w-sm mx-auto w-full animate-fade-in-up">
        {/* Question */}
        <div
          className="rounded-2xl px-5 py-5 mb-5"
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid rgba(96,176,245,0.2)",
            boxShadow: "0 2px 12px rgba(30,125,212,0.07)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-lg"
              style={{ background: "rgba(59,152,240,0.1)", color: "#3b98f0" }}
            >
              Question {currentQ + 1}
            </span>
          </div>
          <p
            className="text-base font-semibold leading-snug"
            style={{ color: "#1a2e4a", fontFamily: "Georgia, serif" }}
          >
            {question.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((opt, idx) => {
            let bg = "rgba(255,255,255,0.85)";
            let border = "1px solid rgba(96,176,245,0.2)";
            let textColor = "#2a4a6a";
            let icon = null;

            if (answered) {
              if (idx === question.correct) {
                bg = "rgba(34,197,94,0.1)";
                border = "1px solid rgba(34,197,94,0.4)";
                textColor = "#166534";
                icon = (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,197,94,0.2)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                        fill="#16a34a"
                      />
                    </svg>
                  </div>
                );
              } else if (idx === selected) {
                bg = "rgba(239,68,68,0.08)";
                border = "1px solid rgba(239,68,68,0.3)";
                textColor = "#991b1b";
                icon = (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(239,68,68,0.15)" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        fill="#dc2626"
                      />
                    </svg>
                  </div>
                );
              }
            } else if (idx === selected) {
              bg = "rgba(59,152,240,0.1)";
              border = "1.5px solid #3b98f0";
              textColor = "#1460a8";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={answered}
                className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-150"
                style={{ background: bg, border, cursor: answered ? "default" : "pointer" }}
              >
                <div
                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0"
                  style={{
                    borderColor:
                      answered && idx === question.correct
                        ? "#16a34a"
                        : answered && idx === selected
                        ? "#dc2626"
                        : idx === selected
                        ? "#3b98f0"
                        : "rgba(96,176,245,0.4)",
                    background:
                      idx === selected && !answered
                        ? "rgba(59,152,240,0.15)"
                        : "transparent",
                  }}
                >
                  {!answered && idx === selected && (
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: "#3b98f0" }}
                    />
                  )}
                </div>
                <p className="text-sm font-medium flex-1" style={{ color: textColor }}>
                  {opt}
                </p>
                {icon}
              </button>
            );
          })}
        </div>

        {/* Answer feedback */}
        {answered && (
          <div
            className="mt-4 rounded-2xl px-4 py-3 animate-fade-in-up"
            style={{
              background:
                selected === question.correct
                  ? "rgba(34,197,94,0.08)"
                  : "rgba(59,152,240,0.08)",
              border:
                selected === question.correct
                  ? "1px solid rgba(34,197,94,0.25)"
                  : "1px solid rgba(59,152,240,0.2)",
            }}
          >
            <p
              className="text-sm font-semibold mb-1"
              style={{
                color: selected === question.correct ? "#166534" : "#1460a8",
              }}
            >
              {selected === question.correct ? "✓ Correct!" : "Not quite — but you're learning!"}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "#5a80a0" }}>
              {selected === question.correct
                ? "Well done! God's Word lights our path."
                : `The correct answer is: "${question.options[question.correct]}"`}
            </p>
          </div>
        )}
      </div>

      {/* Bottom button */}
      <div className="px-5 pb-12 pt-4 max-w-sm mx-auto w-full">
        <button
          onClick={handleNext}
          disabled={!answered}
          className="w-full py-4 rounded-2xl font-semibold text-white text-base tracking-wide transition-all duration-200"
          style={{
            background: answered
              ? "linear-gradient(135deg, #3b98f0 0%, #1460a8 100%)"
              : "rgba(59,152,240,0.3)",
            boxShadow: answered ? "0 4px 18px rgba(20, 96, 168, 0.35)" : "none",
            cursor: answered ? "pointer" : "not-allowed",
          }}
          onMouseEnter={(e) => {
            if (answered) {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 6px 22px rgba(20, 96, 168, 0.45)";
            }
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = answered
              ? "0 4px 18px rgba(20, 96, 168, 0.35)"
              : "none";
          }}
        >
          {isLast ? "Finish" : "Next"}
        </button>
      </div>
    </main>
  );
}
