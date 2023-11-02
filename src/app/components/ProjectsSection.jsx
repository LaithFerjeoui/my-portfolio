"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Metaverse Landing Page",
    description: "FrontEnd website in order to master modern UI of nextjs 13, aesthetics of tailwindCSS and framer motion's animaitons",
    image: "/images/projects/1.jpg",
    tag: ["All", "FrontEnd"],
    gitUrl: "https://github.com/LaithFerjeoui/Metaverse.git",
    previewUrl: "https://metaverse-landing.vercel.app",
  },
  {
    id: 2,
    title: "BankERA",
    description: "FrontEnd UI/UX with React JS and Tailwind",
    image: "/images/projects/2.png",
    tag: ["All", "FrontEnd"],
    gitUrl: "https://github.com/LaithFerjeoui/Bankera.git",
    previewUrl: "https://bankera.netlify.app",
  },
  {
    id: 3,
    title: "E-commerce Application One Percent",
    description: "One Percent is a Full Stack e-commerce website that sells gym suppliments made with Laravel and Filament",
    image: "/images/projects/3.png",
    tag: ["All", "Full Stack"],
    gitUrl: "https://github.com/LaithFerjeoui/One-Percent-E-commerce-laravel.git",
    previewUrl: "one-percent-suppliments.netlify.app",
  },
  {
    id: 4,
    title: "E-Poster maker for IPGETS",
    description: "Javascript Poster Editor online ",
    image: "/images/projects/4.jpg",
    tag: ["All", "FrontEnd"],
    gitUrl: "https://github.com/LaithFerjeoui/online-image-editor-ipgets.git",
    previewUrl: "https://e-poster-ipgets.netlify.app",
  },
  {
    id: 5,
    title: "Skybox Gym ",
    description: "FrontEnd gym website for Skybox Gym",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://skybox-gym-kairouan.netlify.app",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="relative  ">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FrontEnd"
          isSelected={tag === "FrontEnd"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
            
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
