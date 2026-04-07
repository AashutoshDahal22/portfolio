import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Ev Repair",
    subtitle: "Web Platform",
    description:
      "EV repair website built for advertisement and service bookings with real-time availability.",
    tags: ["NEXT.JS", "TAILWIND", "STRIPE"],
    year: "2024",
    url: "https://ev-repair.vercel.app",
  },
  {
    id: "02",
    title: "Technouniverse",
    subtitle: "Website",
    description:
      "Company Website for Technouniverse, which has solutions for all the technical problems.",
    tags: ["NEXT JS", "FRAMER MOTION", "VERCEL"],
    year: "2025",
    url: "https://technouniversenp.vercel.app/",
  },
  {
    id: "03",
    title: "Medisys",
    subtitle: "Health Platform",
    description:
      "Health tracking web application with dashboards, reminders, and doctor integrations.",
    tags: ["TYPESCRIPT", "D3.JS", "NODE.JS"],
    year: "2024",
    url: "https://medisys.vercel.app",
  },
  {
    id: "04",
    title: "Kala-Kriti",
    subtitle: "Commerce",
    description: "E-commerce platform for handcraft items and art pieces.",
    tags: ["NEXT.JS", "FRAMER MOTION", "DJANGO"],
    year: "2025",
    url: "https://kala-kriti-three.vercel.app/",
  },
  {
    id: "05",
    title: "BMKS",
    subtitle: "Website",
    description: "Informative Website for a religious organization",
    tags: ["REACT JS"],
    year: "2023",
    url: "https://bmks-seven.vercel.app/",
  },
  {
    id: "06",
    title: "Pentagon Legal Associates",
    subtitle: "Website",
    description:
      "Informative and Blog website for Pentagon Legal Associates Law Firm",
    tags: ["NEXT JS", "VERCEL"],
    year: "2026",
    url: "https://pentagonlegalassociates.vercel.app/",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="py-24">
      {/* HEADER */}
      <div className="flex justify-between items-end mb-4">
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
          <span style={{ color: "#1a1a1a" }}>Selected</span>{" "}
          <span style={{ color: "#bbb", fontWeight: 300 }}>work</span>
        </motion.h2>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          style={{
            fontSize: 11,
            letterSpacing: "0.3em",
            color: "#aaa",
            fontFamily: "monospace",
            paddingBottom: 6,
          }}
        >
          {String(projects.length).padStart(2, "0")} PROJECTS
        </motion.span>
      </div>

      {/* DIVIDER */}
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

      {/* PROJECT LIST */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onTouchStart={() => setHovered(index)}
            onTouchEnd={() => setHovered(null)}
            className="border-b border-gray-300/60 py-7"
          >
            {/* MOBILE: stacked layout */}
            <div className="block sm:hidden">
              {/* Top row: number + year + arrow */}
              <div className="flex items-center justify-between mb-2">
                <motion.span
                  animate={{
                    color:
                      hovered === index
                        ? "#c97d4e"
                        : index === 0
                          ? "#e8c9ae"
                          : "#e0ddd8",
                  }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    userSelect: "none",
                  }}
                >
                  {project.id}
                </motion.span>

                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontSize: 12,
                      color: "#aaa",
                      letterSpacing: "0.05em",
                      fontFamily: "monospace",
                    }}
                  >
                    {project.year}
                  </span>
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    animate={{
                      color: hovered === index ? "#c97d4e" : "#ccc",
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontSize: 18,
                      display: "inline-block",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    aria-label={`Open ${project.title}`}
                  >
                    →
                  </motion.a>
                </div>
              </div>

              {/* Title + subtitle */}
              <div style={{ marginBottom: 8 }}>
                <h3
                  style={{
                    fontSize: "clamp(22px, 5.5vw, 30px)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: 0,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(14px, 3.5vw, 18px)",
                    fontWeight: 300,
                    color: "#bbb",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 13,
                  color: "#666",
                  margin: "0 0 10px",
                  lineHeight: 1.65,
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    animate={{ color: hovered === index ? "#c97d4e" : "#aaa" }}
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
              className="hidden sm:grid items-center"
              style={{
                gridTemplateColumns: "72px 1fr 1fr auto",
                gap: "2rem",
              }}
            >
              {/* NUMBER */}
              <motion.span
                animate={{
                  color:
                    hovered === index
                      ? "#c97d4e"
                      : index === 0
                        ? "#e8c9ae"
                        : "#e0ddd8",
                }}
                transition={{ duration: 0.25 }}
                style={{
                  fontSize: "clamp(34px, 4vw, 52px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  userSelect: "none",
                }}
              >
                {project.id}
              </motion.span>

              {/* TITLE + SUBTITLE */}
              <div>
                <h3
                  style={{
                    fontSize: "clamp(20px, 2.6vw, 36px)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: 0,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(16px, 1.8vw, 26px)",
                    fontWeight: 300,
                    color: "#bbb",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* DESCRIPTION + TAGS */}
              <div>
                <p
                  style={{
                    fontSize: 16,
                    color: "#666",
                    margin: "0 0 10px",
                    lineHeight: 1.65,
                    maxWidth: 340,
                  }}
                >
                  {project.description}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      animate={{
                        color: hovered === index ? "#c97d4e" : "#aaa",
                      }}
                      transition={{ duration: 0.25 }}
                      style={{
                        fontSize: 14,
                        letterSpacing: "0.15em",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* YEAR + ARROW */}
              <div
                className="flex flex-col items-end gap-2"
                style={{ minWidth: 52 }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: "#aaa",
                    letterSpacing: "0.05em",
                    fontFamily: "monospace",
                  }}
                >
                  {project.year}
                </span>
                <motion.a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{
                    x: hovered === index ? 5 : 0,
                    color: hovered === index ? "#c97d4e" : "#ccc",
                  }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: 18,
                    display: "inline-block",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                  aria-label={`Open ${project.title}`}
                >
                  →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
