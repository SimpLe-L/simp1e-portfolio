"use client";

import { gsap } from "gsap";
import { useEffect } from "react";

const TextEasing = () => {

  useEffect(() => {
    const slideTL = gsap.timeline();
    const maskTL = gsap.timeline();
    const mainTL = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        gsap.set('#texttwo', { opacity: 0 });
        gsap.set('#bar', { scaleY: 0.1 });
        gsap.set('#textone span', { opacity: 1 });
      }
    });

    mainTL.add(slideTL).add(maskTL, 1.5);
    slideTL.to('#bar', { duration: 1, y: 60, scaleY: 1, ease: "back.Out" })
      .to('#slide', { duration: 1.5, x: 440, delay: 0.5, ease: "back.inOut(0.8)" })
      .to('#slide', { duration: 1.5, x: 0, delay: 0.5, ease: "back.inOut(0.8)" })
      .to('#slide', { duration: 1.5, x: 440, delay: 0.5, ease: "back.inOut(0.8)" })
      .to('#bar', { duration: 1, y: 140, scaleY: 0.1, ease: "back.Out" });

    maskTL.to('#textone', { duration: 1.5, ease: "back.inOut(0.8)", "clip-path": "polygon(0 0, 91% 0%, 81% 100%, 0% 100%)", onComplete: () => { gsap.set('#texttwo', { opacity: 1 }) } })
      .to('#textone', { duration: 1.5, delay: 0.5, ease: "back.inOut(0.8)", "clip-path": "polygon(0 0, 18% 0%, 8% 100%, 0% 100%)", onComplete: () => { gsap.set('#textone span', { opacity: 0 }) } })
      .to('#textone', { duration: 1.5, delay: 0.5, ease: "back.inOut(0.8)", "clip-path": "polygon(0 0, 91% 0%, 81% 100%, 0% 100%)" });

    gsap.set('#texttwo', { opacity: 0 });
    gsap.set('#bar', { scaleY: 0.1 });

    // 清理动画
    return () => {
      slideTL.kill();
      maskTL.kill();
      mainTL.kill();
    };
  }, []);

  return (
    <div className="w-full h-24 relative overflow-hidden">
      <div id="slide" className="w-2 h-52 absolute top-1/2 left-[80px] z-10 -translate-y-1/2 rounded-xl rotate-[20deg]">
        <div id="bar" className="w-full h-24 rounded-xl bg-purple-600"></div>
      </div>
      <div id="textone" className="absolute w-full h-full grid place-items-center">
        <span className="md:text-7xl text-4xl font-bold italic tracking-2 relative perspective-500 preserve-3d">Front-end</span>
      </div>
      <div id="texttwo" className="absolute w-full h-full grid place-items-center">
        <span className="md:text-7xl text-4xl font-bold italic tracking-2 relative perspective-500 preserve-3d">Developer</span>
      </div>
    </div>
  )
}

export default TextEasing