"use client";

import { motion } from "framer-motion";

const blocks = [
  {
    image: "/images/eric-blind.jpg",
    alt: "Hunting from the blind",
    title: "The Setup",
    text: "Every hunt starts long before you arrive. Blinds are positioned based on weeks of scouting — trail cameras checked, feeders monitored, wind patterns studied. When you sit down, you're not hoping to see game. You're waiting for what's already been showing up.",
  },
  {
    image: "/images/hunters-deer.jpg",
    alt: "Hunters with whitetail deer",
    title: "The Moment",
    text: "There's nothing quite like the feeling when it all comes together — the early morning calm, the rustle in the brush, and the shot you've been waiting for. Whether it's your first harvest or your fiftieth, we make sure every moment counts.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-[#1e1a16] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c4922a] text-sm tracking-[0.3em] uppercase mb-3">
            The Experience
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8]">
            More Than Just a Hunt
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-28">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${
                i % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-lg aspect-[4/3] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${block.image})` }}
                />
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-[#f5f0e8] mb-4">
                  {block.title}
                </h3>
                <div className="w-12 h-0.5 bg-[#c4922a] mb-5" />
                <p className="text-[#a89880] leading-relaxed text-base md:text-lg">
                  {block.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
