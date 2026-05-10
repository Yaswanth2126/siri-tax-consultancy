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
    <header className="sticky top-0 z-50 w-full border-b border-blue-500/10 bg-[#050816]/95 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="h-20 flex items-center justify-between">

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
                className="text-gray-300 hover:text-blue-400 transition duration-200 text-sm font-medium"
              >

                {link.name}

              </Link>

            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center text-white"
          >

            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}

          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-blue-500/10 bg-[#050816]"
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

    </header>
  );
}