"use client";

import { motion } from "motion/react";
import { SectionHeading, TextReveal } from "./ui/Typography";
import { SlideIn, Transition } from "./ui/Transitions";
import ProjectCard from "./project-card";

const projects = [
  {
    title: "NFT Marketplace",
    description: "Description for Project 1",
    _id: "1",
    imageUrl: "/nft.png"
  },
  {
    title: "Swap Demo",
    description: "Description for Project 1",
    _id: "2",
    imageUrl: "/swap.png"
  }
];

const Projects = () => {

  return (
    <section className="md:p-8 p-4 mt-10 relative" id="projects">
      <SectionHeading className="md:pl-12">
        <SlideIn className="text-white/40">Web3</SlideIn>
        <br />
        <SlideIn>Demos</SlideIn>
      </SectionHeading>

      <motion.div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-3 relative">
        {projects
          .map((project, index) => (
            <Transition
              transition={{ delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              key={project._id}
              layoutId={project._id}
            >
              <ProjectCard projectInfo={project} />
            </Transition>
          ))}
      </motion.div>
    </section>
  );
}

export default Projects;