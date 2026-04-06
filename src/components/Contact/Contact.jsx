import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const phrases = [
  "something wild.",
  "something real.",
  "something bold.",
  "something great.",
];

const socials = [
  { label: "GH", url: "https://github.com/AashutoshDahal22" },
  { label: "LI", url: "https://linkedin.com/in/aashutosh-dahal" },
  { label: "EM", url: "mailto:aashutoshdahal22@gmail.com" },
];

export default function Contact() {
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(phrases[0]);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => {
          const next = (prev + 1) % phrases.length;
          setDisplayed(phrases[next]);
          return next;
        });
        setFading(false);
      }, 500);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 flex flex-col min-h-[60vh] justify-between">
      {/* SECTION LABEL */}
      <div>
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
          CONTACT
        </motion.p>

        {/* HEADLINE */}
        <div
          style={{
            fontSize: "clamp(40px, 6.5vw, 90px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 48,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ color: "#1a1a1a" }}
          >
            Let's make
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span style={{ color: "#1a1a1a" }}>something </span>
            <span
              style={{
                color: "#c97d4e",
                fontWeight: 300,
                transition: "opacity 0.5s ease",
                opacity: fading ? 0 : 1,
                display: "inline-block",
              }}
            >
              {displayed.replace("something ", "")}
            </span>
          </motion.div>
        </div>

        {/* EMAIL + PHONE + SOCIALS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-between gap-6"
        >
          {/* LEFT: email + phone */}
          <div className="flex flex-col gap-3">
            <a
              href="mailto:aashutoshdahal22@gmail.com"
              className="flex items-center gap-3 group"
              style={{ textDecoration: "none" }}
            >
              <span
                style={{
                  fontSize: "clamp(14px, 1.6vw, 20px)",
                  color: "#1a1a1a",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#c97d4e")}
                onMouseLeave={(e) => (e.target.style.color = "#1a1a1a")}
              >
                aashutoshdahal22@gmail.com
              </span>
              <span style={{ color: "#aaa", fontSize: 18 }}>→</span>
            </a>

            <a
              href="tel:+9779803133855"
              className="flex items-center gap-3"
              style={{ textDecoration: "none" }}
            >
              <span
                style={{
                  fontSize: "clamp(14px, 1.6vw, 20px)",
                  color: "#1a1a1a",
                  fontWeight: 400,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#c97d4e")}
                onMouseLeave={(e) => (e.target.style.color = "#1a1a1a")}
              >
                +977 9803133855, 9706770437
              </span>
              <span style={{ color: "#aaa", fontSize: 18 }}>→</span>
            </a>
          </div>

          {/* RIGHT: socials */}
          <div className="flex items-center gap-6">
            {socials.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "clamp(14px, 1.4vw, 18px)",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "#ccc",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#c97d4e")}
                onMouseLeave={(e) => (e.target.style.color = "#ccc")}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          marginTop: 80,
          borderTop: "1px solid #d6d3cc",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.16em",
            color: "#bbb",
            fontWeight: 500,
          }}
        >
          DESIGNED &amp; BUILT WITH INTENTION
        </span>
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.12em",
            color: "#bbb",
            fontFamily: "monospace",
          }}
        >
          2026
        </span>
      </motion.div>
    </div>
  );
}
