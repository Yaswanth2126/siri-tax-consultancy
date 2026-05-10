"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "GST Calculator", href: "/gst-calculator" },
    { name: "Rules", href: "/rules" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050816]/95 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">

        <div className="h-16 rounded-2xl bg-gradient-to-r from-[#0a1020] to-[#121a33] border border-blue-500/10 shadow-lg shadow-blue-500/5 px-6 flex items-center justify-between">

          <Link
            href="/"
            className="text-white font-bold text-2xl tracking-tight"
          >
            Siri Tax Consultancy
          </Link>

          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-blue-400 transition text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-white"
          >

            {menuOpen ? <X size={24} /> : <Menu size={24} />}

          </button>

        </div>

        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-2xl border border-blue-500/10 bg-[#0a1020]/95 backdrop-blur-xl overflow-hidden"
            >

              <div className="px-6 py-5 flex flex-col">

                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="py-4 text-gray-300 hover:text-blue-400 transition border-b border-white/5 last:border-none"
                  >
                    {link.name}
                  </Link>
                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </header>
  );
}