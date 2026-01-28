import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projectData = [
    {
      title: "Ev Repair",
      description: "EV repair website built for advertisement",
      image: "/portfolio/ev.png",
      link: "https://ev-repair.vercel.app/",
      id: 1,
    },
    {
      title: "Bhasalaya",
      description: "Web application for learning Nepali, Samajik and Sanskrit",
      image: "/portfolio/bhasa.png",
      link: "",
      id: 2,
    },
    {
      title: "Medisys",
      description: "Health tracking web application",
      image: "/portfolio/medisys.png",
      link: "https://github.com/AashutoshDL/Clinic-Management-System",
      id: 3,
    },
    {
      title: "VROOM",
      description: "Car rental web application",
      image: "/portfolio/vroom.png",
      link: "https://github.com/AashutoshDL/VROOM.git",
      id: 5,
    },
    {
      title: "Sticker Mash",
      description: "Simple React Native sticker editing app",
      image: "/portfolio/image2.jpg",
      link: "https://github.com/AashutoshDL/StickerMash",
      id: 6,
    },
    {
      title: "TechnoUniverse",
      description: "Company website built with Next.js",
      image: "/portfolio/techno.png",
      link: "https://technouniversenp.vercel.app/",
      id: 7,
    },
    {
      title: "Fylm",
      description:
        "Movie recommendations with friends – share, discover, and build your watchlist together",
      image: "/portfolio/techno.png",
      link: "https://github.com/AashutoshDahal22/Fylm",
      id: 8,
    },
    {
      title: "Tution Tracker",
      description: "Tution tracker made with Next.js and Prisma ORM",
      image: "/portfolio/techno.png",
      link: "https://github.com/AashutoshDahal22/tution-tracker",
      id: 9,
    },
    {
      title: "Kala-Kriti",
      description:
        "A platform powered with Augmented Reality for buying and selling arts and crafts",
      image: "/portfolio/techno.png",
      link: "https://kala-kriti-three.vercel.app/",
      id: 10,
    },
    {
      title: "Clip-stack",
      description: "custom clipboard using python",
      image: "/portfolio/techno.png",
      link: "https://github.com/AashutoshDahal22/clipstack",
      id: 11,
    },
    {
      title: "Sudoku Solver",
      description: "sudoku solver using python which solves 9x9 sudoku",
      image: "/portfolio/techno.png",
      link: "https://github.com/AashutoshDahal22/Sudoku-Solver",
      id: 12,
    },
    {
      title: "VLight-IT",
      description: "e-commerce project for v-light IT shop",
      image: "/portfolio/techno.png",
      link: "https://github.com/AashutoshDahal22/V-Light-IT",
      id: 13,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-4xl font-semibold text-gray-900 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className="group rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="h-56 w-full overflow-hidden rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-6 flex-grow">
                {project.description}
              </p>

              <a
                href={project.link || "#"}
                className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600 transition"
              >
                View project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
