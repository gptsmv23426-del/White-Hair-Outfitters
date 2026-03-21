"use client";

import { motion } from "framer-motion";
import { CONTACT } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#1e1a16] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#c4922a] text-sm tracking-[0.3em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-[#f5f0e8] mb-4">
            Ready to Book Your Hunt?
          </h2>
          <div className="w-16 h-0.5 bg-[#c4922a] mx-auto mb-8" />
          <p className="text-[#a89880] text-lg mb-14 max-w-xl mx-auto">
            Reach out directly and let&apos;s talk about your hunt. Eric is
            happy to answer any questions about species, availability, and what
            to expect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {/* Phone */}
          <div className="bg-[#141210] border border-[#a89880]/20 rounded-lg p-8 flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-[#2a3a2e] rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#c4922a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#a89880] text-xs uppercase tracking-wider mb-2">
                Call or Text
              </p>
              <p className="text-[#f5f0e8] font-semibold text-base">{CONTACT.phone}</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#141210] border border-[#a89880]/20 rounded-lg p-8 flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-[#2a3a2e] rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#c4922a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="text-[#a89880] text-xs uppercase tracking-wider mb-2">
                Email
              </p>
              <p className="text-[#f5f0e8] font-semibold text-base">ericpainter25</p>
              <p className="text-[#c4922a] text-sm font-medium">@gmail.com</p>
            </div>
          </div>

          {/* Facebook */}
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#141210] border border-[#a89880]/20 hover:border-[#c4922a]/50 rounded-lg p-8 flex flex-col items-center gap-4 transition-colors duration-200"
          >
            <div className="w-12 h-12 bg-[#2a3a2e] rounded-full flex items-center justify-center group-hover:bg-[#3a4f3e] transition-colors">
              <svg
                className="w-5 h-5 text-[#c4922a]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <p className="text-[#a89880] text-xs uppercase tracking-wider mb-2">
                Facebook
              </p>
              <p className="text-[#f5f0e8] font-semibold text-base">White Hair Outfitters</p>
              <p className="text-[#c4922a] text-sm font-medium">Visit page</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
