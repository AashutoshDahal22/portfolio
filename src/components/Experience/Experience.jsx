import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "SMaRC (Skill Museum and Research Center)",
      role: "Frontend & Spatial Computing Intern",
      duration: "May 2024 – December 2025",
      description: (
        <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
          <li>
            Developed an interactive riddle game for events at Kavya College,
            improving engagement and logical thinking.
          </li>
          <li>
            Organized large-scale events such as Herald PUBG and Islington
            Mario, strengthening leadership and coordination skills.
          </li>
          <li>
            Completed 3D web development training and took ownership of SMaRC’s
            3D website development.
          </li>
          <li>
            Showcased innovative projects at Futurama events hosted by multiple
            colleges, increasing visibility and outreach.
          </li>
          <li>
            Designed AR and 3D web experiences for brochures and promotional
            materials at Islington College Kathmandu.
          </li>
          <li>
            Built WebAR experiences using Google Model Viewer, Three.js,
            A-Frame, and MindAR.
          </li>
          <li>
            Presented Final Year Project and AR demos at BIC Experience events
            and trained volunteers.
          </li>
          <li>
            Led development of a gamified cybersecurity learning platform using
            React Three Fiber as acting team lead.
          </li>
          <li>
            Delivered game development classes for the Skill Enrichment Program.
          </li>
          <li>
            Conducted web development workshops for the Global Professional
            Pathway Course.
          </li>
          <li>
            Researched AR optimization techniques to improve performance and
            reduce latency.
          </li>
          <li>
            Contributed to content development for robotics kits (Grades 4–9).
          </li>
          <li>
            Collaborated on revamping a gamified cybersecurity experience using
            Unity.
          </li>
        </ul>
      ),
    },
    {
      company: "V Light",
      role: "Shop Manager",
      duration: "2021 – 2022",
      description: (
        <p className="text-gray-600 text-sm">
          Managed daily shop operations, supervised staff, handled inventory,
          and ensured smooth customer service.
        </p>
      ),
    },
  ];

  return (
    <section className="bg-white py-24 px-6 max-w-5xl mx-auto">
      <motion.h2
        className="text-4xl font-semibold text-gray-900 mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      {/* CV Buttons */}
      <div className="flex justify-center gap-4 mb-16">
        <a
          href="/portfolio/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white transition"
        >
          View CV
        </a>

        <a
          href="/portfolio/Resume.pdf"
          download
          className="px-6 py-2.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-800 hover:bg-gray-900 hover:text-white transition"
        >
          Download CV
        </a>
      </div>

      <div className="flex flex-col gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="rounded-xl bg-gray-100/60 border border-gray-300/50 shadow-sm hover:shadow-lg transition-all p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 gap-1">
              <h3 className="text-xl font-medium text-gray-900">
                {exp.company}
              </h3>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>

            <h4 className="text-sm font-medium text-gray-700 mb-4">
              {exp.role}
            </h4>

            {exp.description}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
