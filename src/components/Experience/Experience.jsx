import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    duration: "Jan 2026 - Date.now()",
    role: "Backend Developer",
    roleAccent: "Trainee",
    company: "Aricalot Technologies",
    description:
      "Working on backend projects using Java and JakartaEE and developing APIs",
    tags: ["JAVA", "BACKEND"],
  },
  {
    duration: "May 2024 — Dec 2025",
    role: "Frontend & Spatial Computing",
    roleAccent: "Intern",
    company: "SMaRC",
    description:
      "Built WebAR experiences using Three.js, A-Frame, and MindAR. Led development of a gamified cybersecurity platform with React Three Fiber. Conducted web development workshops and delivered game dev classes.",
    tags: ["REACT", "THREE.JS", "WEBXR"],
  },
  {
    duration: "2021 — 2022",
    role: "Shop",
    roleAccent: "Manager",
    company: "V Light",
    description:
      "Managed daily operations, supervised staff, handled inventory, and ensured smooth customer service.",
    tags: ["OPERATIONS", "MANAGEMENT"],
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="py-24">
      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-end gap-3 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(36px, 5.5vw, 68px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          <span style={{ color: "#1a1a1a" }}>Experi</span>
          <span style={{ color: "#bbb", fontWeight: 300 }}>ence</span>
        </motion.h2>

        {/* CV BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex gap-3 items-center pb-1"
        >
          <a
            href="/portfolio/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "#666",
              border: "1px solid #d6d3cc",
              borderRadius: 999,
              padding: "7px 18px",
              textDecoration: "none",
              transition: "all 0.2s",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#1a1a1a";
              e.target.style.color = "#fff";
              e.target.style.borderColor = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#666";
              e.target.style.borderColor = "#d6d3cc";
            }}
          >
            VIEW CV
          </a>
          <a
            href="/portfolio/Resume.pdf"
            download
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "#c97d4e",
              border: "1px solid #c97d4e",
              borderRadius: 999,
              padding: "7px 18px",
              textDecoration: "none",
              transition: "all 0.2s",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#c97d4e";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#c97d4e";
            }}
          >
            DOWNLOAD CV
          </a>
        </motion.div>
      </div>

      {/* TOP DIVIDER */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: 1,
          background: "#d6d3cc",
          transformOrigin: "left",
          marginBottom: 0,
        }}
      />

      {/* EXPERIENCE LIST */}
      <div className="flex flex-col">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(index)}
            onTouchEnd={() => setHovered(null)}
            className="border-b border-gray-300/60 py-8"
          >
            {/* MOBILE: stacked layout */}
            <div className="block sm:hidden">
              {/* Duration */}
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.08em",
                  color: "#aaa",
                  fontFamily: "monospace",
                  display: "block",
                  marginBottom: 8,
                }}
              >
                {exp.duration}
              </span>

              {/* Role + Company */}
              <div style={{ marginBottom: 10 }}>
                <h3
                  style={{
                    fontSize: "clamp(20px, 5vw, 26px)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: 0,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {exp.role}{" "}
                  <span style={{ color: "#c97d4e" }}>{exp.roleAccent}</span>
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: hovered === index ? "#c97d4e" : "#aaa",
                    margin: "4px 0 0",
                    transition: "color 0.25s",
                  }}
                >
                  {exp.company}
                </p>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.7,
                  margin: "0 0 12px",
                }}
              >
                {exp.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {exp.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    animate={{ color: hovered === index ? "#c97d4e" : "#bbb" }}
                    transition={{ duration: 0.25 }}
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* DESKTOP: grid layout */}
            <div
              className="hidden sm:grid items-start"
              style={{
                gridTemplateColumns: "160px 1fr 1fr auto",
                gap: "2rem",
              }}
            >
              {/* DURATION */}
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: "#aaa",
                  fontFamily: "monospace",
                  paddingTop: 6,
                }}
              >
                {exp.duration}
              </span>

              {/* ROLE + COMPANY */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(18px, 2.2vw, 30px)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: 0,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {exp.role}{" "}
                  <span style={{ color: "#c97d4e" }}>{exp.roleAccent}</span>
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: hovered === index ? "#c97d4e" : "#aaa",
                    margin: "4px 0 0",
                    transition: "color 0.25s",
                  }}
                >
                  {exp.company}
                </p>
              </div>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: 13,
                  color: "#666",
                  lineHeight: 1.7,
                  margin: 0,
                  maxWidth: 360,
                  paddingTop: 4,
                }}
              >
                {exp.description}
              </p>

              {/* TAGS */}
              <div
                className="flex flex-col items-end gap-1"
                style={{ paddingTop: 4 }}
              >
                {exp.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    animate={{ color: hovered === index ? "#c97d4e" : "#bbb" }}
                    transition={{ duration: 0.25 }}
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
