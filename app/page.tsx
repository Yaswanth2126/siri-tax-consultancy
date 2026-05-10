"use client";

import Link from "next/link";

import { motion } from "framer-motion";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 pt-32 pb-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_45%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >

            <div className="inline-flex items-center px-5 py-2 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-400 text-sm font-medium">

              Trusted GST & Tax Experts

            </div>

            <h1 className="mt-7 text-5xl md:text-7xl font-bold leading-tight tracking-tight">

              Simplifying
              <span className="text-blue-500"> GST</span>,
              <br />

              Tax &
              <span className="text-blue-500"> Compliance</span>

            </h1>

            <p className="mt-7 text-gray-400 text-xl leading-relaxed max-w-2xl">

              Premium GST filing, Income Tax filing,
              MSME registration and modern business
              compliance solutions for businesses across India.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/services"
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold shadow-lg shadow-blue-500/20"
              >

                Explore Services

              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 rounded-2xl border border-zinc-700 hover:border-blue-500 hover:text-blue-400 transition font-semibold"
              >

                Contact Us

              </Link>

            </div>

            {/* Stats */}
            <div className="flex gap-14 mt-16 flex-wrap">

              <div>

                <h3 className="text-5xl font-bold">

                  500+

                </h3>

                <p className="text-gray-500 mt-2">

                  GST Filings

                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold">

                  100+

                </h3>

                <p className="text-gray-500 mt-2">

                  Business Clients

                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold">

                  24/7

                </h3>

                <p className="text-gray-500 mt-2">

                  Support

                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
          >

            <div className="rounded-[36px] border border-white/5 bg-gradient-to-b from-zinc-900 to-black p-8 shadow-2xl shadow-blue-500/5">

              <div className="flex items-start justify-between">

                <div>

                  <p className="text-gray-400 text-lg">

                    Compliance Status

                  </p>

                  <h2 className="text-5xl font-bold mt-2">

                    Active

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-3xl">

                  ₹

                </div>

              </div>

              <div className="mt-10 space-y-5">

                <div className="rounded-3xl bg-black/60 border border-white/5 p-6 flex items-center justify-between">

                  <div>

                    <p className="text-gray-500">

                      GST Filing

                    </p>

                    <h3 className="text-2xl font-bold mt-2">

                      Completed

                    </h3>

                  </div>

                  <div className="w-4 h-4 rounded-full bg-green-500" />

                </div>

                <div className="rounded-3xl bg-black/60 border border-white/5 p-6 flex items-center justify-between">

                  <div>

                    <p className="text-gray-500">

                      Income Tax

                    </p>

                    <h3 className="text-2xl font-bold mt-2">

                      Processing

                    </h3>

                  </div>

                  <div className="w-4 h-4 rounded-full bg-yellow-400" />

                </div>

                <div className="rounded-3xl bg-black/60 border border-white/5 p-6 flex items-center justify-between">

                  <div>

                    <p className="text-gray-500">

                      MSME Registration

                    </p>

                    <h3 className="text-2xl font-bold mt-2">

                      Verified

                    </h3>

                  </div>

                  <div className="w-4 h-4 rounded-full bg-blue-500" />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}