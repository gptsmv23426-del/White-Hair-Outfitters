"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroVideo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-60px"]);

  return (
    <section ref={sectionRef} className="relative h-[150vh]">
      {/* Fixed video container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ y: videoY, opacity: videoOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/whitetail-buck.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/video/blindtodeer.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

        {/* Hero content */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <p className="text-[#c4922a] text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Guided Hunts on Private South Texas Ranches
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f5f0e8] font-bold leading-tight mb-6 max-w-4xl">
            South Texas.
            <br />
            Your Hunt. Done Right.
          </h1>
          <a
            href="#contact"
            className="bg-[#2a3a2e] hover:bg-[#3a4f3e] text-[#f5f0e8] px-8 py-3.5 text-sm tracking-[0.15em] uppercase transition-colors duration-200 rounded border border-[#f5f0e8]/20 hover:border-[#f5f0e8]/40"
          >
            Book Your Hunt
          </a>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8"
          >
            <svg
              className="w-6 h-6 text-[#a89880]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
