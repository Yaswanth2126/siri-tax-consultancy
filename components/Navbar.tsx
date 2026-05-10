"use client";

import { useState } from "react";

import Image from "next/image";

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
    <nav className="sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 md:pt-6">

        <div className="flex items-center justify-between px-5 sm:px-8 py-4 rounded-3xl bg-zinc-900/50 backdrop-blur-2xl border border-zinc-800/50 shadow-xl">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3"
          >

            <Image
              src="/logo.png"
              alt="Siri Tax Consultancy"
              width={42}
              height={42}
              className="rounded-xl"
            />

            <div>

              <h1 className="text-lg sm:text-xl font-bold text-white leading-none">
                Siri Tax
              </h1>

              <p className="text-xs text-gray-400 mt-1">
                Consultancy
              </p>

            </div>

          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">

            {links.map((link) => (

              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.name}
              </a>

            ))}

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >

            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
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
              className="md:hidden mt-4"
            >

              <div className="rounded-3xl bg-zinc-900/80 backdrop-blur-2xl border border-zinc-800/50 p-6 shadow-2xl">

                <div className="flex flex-col gap-5">

                  {links.map((link, index) => (

                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className="text-gray-300 hover:text-white transition text-base"
                      onClick={() => setMenuOpen(false)}
                    >

                      {link.name}

                    </motion.a>

                  ))}

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </nav>
  );
}