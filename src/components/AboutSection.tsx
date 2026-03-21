"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#1e1a16] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Eric's photo */}
          <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 w-full">
            <Image
              src="/images/eric-portrait.jpg"
              alt="Eric Painter — White Hair Outfitters guide"
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Gold accent line */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-[#c4922a]/30 rounded -z-10" />
          </div>

          {/* Bio text */}
          <div>
            <p className="text-[#c4922a] text-sm tracking-[0.3em] uppercase mb-3">
              About Your Guide
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-[#f5f0e8] mb-6">
              Eric Painter
            </h2>
            <div className="w-16 h-0.5 bg-[#c4922a] mb-6" />
            <div className="space-y-4 text-[#a89880] leading-relaxed">
              <p>
                With over 15 years of guiding experience across South Texas,
                Eric Painter knows this land like the back of his hand. From the
                dense brush country to the wide-open senderos, every hunt is
                built on decades of firsthand knowledge and a deep respect for
                the sport.
              </p>
              <p>
                Operating across multiple private ranches — each carefully
                managed for quality game — Eric offers a hunting experience you
                won&apos;t find on public land or overcrowded leases. Small
                groups, personalized setups, and an honest approach to guiding
                are what set White Hair Outfitters apart.
              </p>
              <p>
                Whether you&apos;re a seasoned hunter chasing a trophy buck or
                bringing your family out for the first time, Eric will put you
                in position and make sure you leave with a story worth telling.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
