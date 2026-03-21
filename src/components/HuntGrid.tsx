"use client";

import { motion } from "framer-motion";
import { SPECIES } from "@/lib/constants";
import HuntCard from "./HuntCard";

export default function HuntGrid() {
  return (
    <section id="hunts" className="bg-[#141210] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#c4922a] text-sm tracking-[0.3em] uppercase mb-3">
            What We Hunt
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] mb-4">
            South Texas Big Game
          </h2>
          <p className="text-[#a89880] max-w-2xl mx-auto">
            From native whitetail to world-class exotics, our private ranches
            hold a wide variety of species. These are just a few of the animals
            we guide for — reach out to ask about additional species and
            availability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SPECIES.map((species, i) => (
            <HuntCard key={species.name} species={species} index={i} />
          ))}
        </div>

        {/* More species callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 border border-[#c4922a]/30 rounded-lg p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-[#f5f0e8] mb-2">
              Don&apos;t see your species?
            </h3>
            <p className="text-[#a89880] max-w-xl">
              These are just a few highlights. Eric guides for a wide variety of
              South Texas game — including many species not listed here. Reach
              out and ask about what&apos;s available on your dates.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-[#2a3a2e] hover:bg-[#3a4f3e] text-[#f5f0e8] px-7 py-3 text-sm tracking-[0.15em] uppercase transition-colors duration-200 rounded border border-[#f5f0e8]/20 hover:border-[#f5f0e8]/40"
          >
            Ask Eric
          </a>
        </motion.div>
      </div>
    </section>
  );
}
