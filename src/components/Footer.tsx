import { CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0e0d0b] border-t border-[#a89880]/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-[family-name:var(--font-heading)] text-[#f5f0e8] text-lg tracking-[0.15em] mb-3">
              WHITE HAIR OUTFITTERS
            </p>
            <p className="text-[#a89880] text-sm leading-relaxed">
              Premium guided hunts across private South Texas ranches. Over 15
              years of experience putting hunters on game.
            </p>
          </div>

          {/* Quick Links + Contact side by side */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick links */}
            <div>
              <p className="text-[#f5f0e8] text-sm tracking-[0.2em] uppercase mb-4">
                Quick Links
              </p>
              <div className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-[#a89880] hover:text-[#c4922a] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[#f5f0e8] text-sm tracking-[0.2em] uppercase mb-4">
                Contact
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-[#a89880]">{CONTACT.phone}</p>
                <p className="text-[#a89880]">{CONTACT.email}</p>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#a89880] hover:text-[#c4922a] transition-colors mt-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#a89880]/10 mt-10 pt-6 text-center">
          <p className="text-[#a89880]/50 text-xs">
            &copy; 2026 White Hair Outfitters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
