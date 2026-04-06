import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const marqueeWords = ["CODE", "SYSTEMS", "DESIGN", "UI", "UX"];

const stack = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Java",
  "Django",
];

export default function About() {
  const marqueeRef = useRef(null);

  return (
    <div className="py-24 overflow-hidden">
      {/* SECTION LABEL */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: 11,
          letterSpacing: "0.18em",
          color: "#c97d4e",
          fontWeight: 500,
          marginBottom: 28,
        }}
      >
        ABOUT
      </motion.p>

      {/* TWO-COLUMN SECTION */}
      <div
        className="grid gap-12"
        style={{ gridTemplateColumns: "1fr 1fr", marginBottom: 60 }}
      >
        {/* LEFT: headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            fontSize: "clamp(38px, 6vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
          }}
        >
          <div style={{ color: "#1a1a1a", fontWeight: 300 }}>I obsess</div>
          <div>
            <span style={{ color: "#1a1a1a" }}>over the </span>
            <span style={{ color: "#c97d4e", fontWeight: 300 }}>details</span>
          </div>
          <div style={{ color: "#ccc", fontWeight: 300 }}>others skip.</div>
        </motion.div>

        {/* RIGHT: bio + stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
        >
          <p
            style={{
              fontSize: "clamp(13px, 1.4vw, 16px)",
              color: "#444",
              lineHeight: 1.8,
              marginBottom: 24,
              maxWidth: 520,
            }}
          >
            I am a curious learner and creative developer who likes to build
            both SERVER and CLIENT side application with proper coding
            practices. I like to learn and experiment with new things and also
            like to collaborate and work in complex and feature rich systems.
          </p>
          <p
            style={{
              fontSize: "clamp(13px, 1.4vw, 16px)",
              color: "#444",
              lineHeight: 1.8,
              marginBottom: 36,
              maxWidth: 520,
            }}
          >
            I care about typography, spacing, motion, and those tiny details
            that make a product feel{" "}
            <span style={{ fontWeight: 700, color: "#1a1a1a" }}>alive</span>.
          </p>

          {/* STACK */}
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                color: "#aaa",
                fontWeight: 500,
                marginBottom: 14,
              }}
            >
              STACK
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "clamp(12px, 1.2vw, 15px)",
                    color: "#888",
                    fontWeight: 400,
                    transition: "color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#c97d4e")}
                  onMouseLeave={(e) => (e.target.style.color = "#888")}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* MARQUEE */}
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          marginTop: 150,
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            display: "flex",
            gap: "2rem",
            whiteSpace: "nowrap",
            willChange: "transform",
          }}
        >
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              style={{
                fontSize: "clamp(52px, 9vw, 120px)",
                fontWeight: 700,
                color: "#e8e5df",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {word}
              {i % 4 !== 3 && (
                <span style={{ color: "#d6d3cc", margin: "0 1rem" }}>•</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
