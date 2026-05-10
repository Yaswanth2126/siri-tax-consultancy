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
    <div className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-5">

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="max-w-7xl mx-auto"
      >

        <div className="bg-black/50 backdrop-blur-2xl border border-white/10 rounded-[28px] px-6 lg:px-8 h-20 flex items-center justify-between shadow-2xl shadow-black/30">

          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-2xl tracking-tight"
          >
            Siri Tax Consultancy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            {links.map((link) => (

              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition text-sm font-medium"
              >

                {link.name}

              </Link>

            ))}

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >

            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}

          </button>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-black/70 backdrop-blur-2xl border border-white/10 rounded-[28px] overflow-hidden"
            >

              <div className="flex flex-col p-6">

                {links.map((link, index) => (

                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >

                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 text-gray-300 hover:text-white transition text-lg border-b border-white/5 last:border-none"
                    >

                      {link.name}

                    </Link>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </motion.nav>

    </div>
  );
}
