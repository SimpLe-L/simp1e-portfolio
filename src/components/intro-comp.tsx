"use client";

import * as React from "react";
import { TypeAnimation } from "react-type-animation";

export const TypeIntro = () => {
  return (
    <TypeAnimation
      className="text-2xl tracking-widest md:text-5xl"
      sequence={[
        500,
        "Front-end Developer",
        1000,
        "Exploring web3",
        1000,
      ]}
      speed={10}
      repeat={Infinity}
    />
  );
};