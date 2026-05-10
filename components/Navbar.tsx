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
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4">

      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto"
      >

        <div className="h-16 rounded-2xl border border-blue-500/10 bg-[#050816]/70 backdrop-blur-xl shadow-[0_0_40px_rgba(37,99,235,0.12)] flex items-center justify-between px-5 lg:px-7">

          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-xl lg:text-2xl"
          >

            Siri Tax Consultancy

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">

            {links.map((link) => (

              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-300 hover:text-blue-400 transition"
              >

                {link.name}

              </Link>

            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >

            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}

          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-2xl border border-blue-500/10 bg-[#050816]/90 backdrop-blur-xl overflow-hidden"
            >

              <div className="flex flex-col p-5">

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

      </motion.nav>

    </div>
  );
}