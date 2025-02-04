"use client";

import { motion } from "motion/react";

import { OpacityTextReveal, SlideIn, Transition } from "./ui/Transitions";
import { aboutInfo as about } from "@/temp";
import { SlideLeft } from "@/lib/utils";

const skillsArr = [
  {
    name: "React",
    svgPath: "/react.svg",
    delay: 0.2
  },
  {
    name: "Vue",
    svgPath: "/Vue.svg",
    delay: 0.4
  },
  {
    name: "TypeScript",
    svgPath: "/ts.svg",
    delay: 0.6
  },
  {
    name: "Nextjs",
    svgPath: "/nextjs.svg",
    delay: 0.8
  },

  {
    name: "Wagmi",
    svgPath: "/wagmi.svg",
    delay: 1
  },
  {
    name: "Viem",
    svgPath: "/viem.png",
    delay: 1.2
  },
  {
    name: "Tailwindcss",
    svgPath: "/tailwindcss.svg",
    delay: 0.2
  },
  {
    name: "Git",
    svgPath: "/git.svg",
    delay: 0.4
  },
  {
    name: "Github",
    svgPath: "/github.svg",
    delay: 0.6
  },
  {
    name: "HTML",
    svgPath: "/html.svg",
    delay: 0.8
  },
  {
    name: "Vite",
    svgPath: "/vite.svg",
    delay: 1
  },
  {
    name: "Js",
    svgPath: "/js.svg",
    delay: 1.2
  }
]

const About = () => {

  return (
    <section
      className="grid md:grid-cols-[1.8fr_1fr] gap-x-10 py-20 px-4 md:px-8 relative"
      id="about"
    >
      <div>
        <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
          <SlideIn>
            <OpacityTextReveal>{about.quote}</OpacityTextReveal>
          </SlideIn>
        </h3>
        <Transition
          viewport={{ once: true }}
          className="md:text-4xl tracking-tighter"
        >
          <OpacityTextReveal>{about.description}</OpacityTextReveal>
        </Transition>
      </div>
      <div className="flex flex-col items-start">
        <h3 className="md:text-5xl text-2xl font-bold overflow-hidden uppercase pb-8">
          <SlideIn>
            <OpacityTextReveal>SKILL STACKING</OpacityTextReveal>
          </SlideIn>
        </h3>
        <div className="flex flex-wrap justify-center lg:justify-between gap-10">
          {
            skillsArr.map((item, index) => {
              return <motion.img
                key={index}
                variants={SlideLeft(item.delay)}
                initial="initial"
                whileInView={"animate"}
                src={item.svgPath}
                alt="brand"
                className="w-[60px] md:w-[60px]"
              />
            })
          }
        </div>
      </div>
    </section>
  );
};

export default About;
