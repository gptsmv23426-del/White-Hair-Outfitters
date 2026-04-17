"use client";

import { motion } from "framer-motion";
import { OTHER_SERVICES } from "@/lib/constants";

export default function OtherServices() {
  return (
    <section className="py-12 px-6" style={{ backgroundColor: "var(--color-bg-alt)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl font-serif mb-6"
            style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-playfair)" }}
          >
            Other Services Available
          </h2>
          <ul className="space-y-3">
            {OTHER_SERVICES.map((service, i) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
