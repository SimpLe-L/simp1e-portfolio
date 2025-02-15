"use client";

import { SlideIn, Transition } from "./ui/Transitions";
import LoadingWrapper from "./loading-wrapper";
import { aboutInfo } from "@/configs/website";
import { TypeIntro } from "./intro-comp";
import IntroScrollMouse from "./mouse-scroll";

const Hero = () => {
  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <Transition>
        <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      </Transition>
      <LoadingWrapper>
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <Transition>
              <img
                src="./avatar.png"
                alt="avatar"
                className="rounded-full size-28 object-cover"
              />
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
                <SlideIn>Hello! I&apos;m {aboutInfo.name}</SlideIn>
              </h2>
              <TypeIntro />
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                {aboutInfo.subTitle.split(" ").map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </p>
            </Transition>
            <div className="mt-20">
              <Transition viewport={{ once: true }}>
                <IntroScrollMouse />
              </Transition>
            </div>
          </div>
        </div>
      </LoadingWrapper>
    </section>
  );
};

export default Hero;
