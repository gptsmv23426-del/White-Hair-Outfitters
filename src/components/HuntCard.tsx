"use client";

import { motion } from "framer-motion";
import type { Species } from "@/lib/constants";

export default function HuntCard({
  species,
  index,
}: {
  species: Species;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg aspect-[4/5] cursor-pointer"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${species.image})`, backgroundPosition: species.bgPosition ?? "center", backgroundSize: species.bgSize ?? "cover" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl text-[#f5f0e8] mb-2">
          {species.name}
        </h3>
        <p className="text-[#a89880] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {species.description}
        </p>
      </div>
    </motion.div>
  );
}
