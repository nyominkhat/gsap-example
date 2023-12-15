"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollContainer = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const scrollSection = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.fromTo(
      scrollSection.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.2,
          markers: true,
          pin: true,
          snap: 1 / 2,
        },
      }
    );

    return () => {
      ctx.kill();
    };
  }, []);

  return (
    <div ref={container} className='bg-neutral-800'>
      <div
        ref={scrollSection}
        className='w-[300vw] flex overflow-hidden bg-black text-4xl font-semibold text-white'
      >
        <div className='flex items-center justify-center w-screen h-screen'>
          Who
        </div>
        <div className='flex items-center justify-center w-screen h-screen text-white bg-cyan-600'>
          are
        </div>
        <div className='flex items-center justify-center w-screen h-screen bg-pink-600'>
          you ?
        </div>
      </div>
    </div>
  );
};

export default ScrollContainer;
