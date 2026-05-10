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

    <header className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-6xl mx-auto px-4 pt-4">

        <div className="h-14 rounded-xl bg-black/25 backdrop-blur-2xl border border-blue-500/10 shadow-[0_0_30px_rgba(37,99,235,0.08)] px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-xl tracking-tight"
          >

            Siri Tax Consultancy

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7">

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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-white"
          >

            {menuOpen ? <X size={22} /> : <Menu size={22} />}

          </button>

        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>

          {menuOpen && (

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 rounded-xl border border-blue-500/10 bg-black/70 backdrop-blur-2xl overflow-hidden"
            >

              <div className="px-5 py-4 flex flex-col">

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