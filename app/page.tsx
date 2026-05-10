"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

export default function HomePage() {

  const services = [
    {
      title: "GST Filing",
      desc: "Monthly, quarterly and annual GST filing services.",
      icon: <FileText size={28} />,
    },
    {
      title: "Income Tax",
      desc: "Professional income tax return filing support.",
      icon: <Calculator size={28} />,
    },
    {
      title: "MSME Registration",
      desc: "Fast MSME/Udyam registration assistance.",
      icon: <Briefcase size={28} />,
    },
    {
      title: "Tax Compliance",
      desc: "Complete GST and compliance management.",
      icon: <ShieldCheck size={28} />,
    },
  ];

  return (

    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative px-6 lg:px-12 pt-32 pb-24">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_45%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
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
              MSME registration and business compliance
              solutions for businesses across India.

            </p>

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

            {/* STATS */}
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

          {/* RIGHT CARD */}
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

      {/* SERVICES */}
      <section className="px-6 lg:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-blue-400 font-semibold tracking-widest uppercase">

              Services

            </p>

            <h2 className="text-5xl font-bold mt-4">

              Professional Tax Solutions

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 to-black p-8"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {service.title}

                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">

                  {service.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 lg:px-12 pb-28">

        <div className="max-w-6xl mx-auto rounded-[40px] border border-blue-500/10 bg-gradient-to-r from-blue-600/20 to-black p-12 text-center">

          <h2 className="text-5xl font-bold">

            Need Professional Tax Assistance?

          </h2>

          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">

            Get expert GST filing, Income Tax filing,
            MSME registration and compliance support
            from experienced professionals.

          </p>

          <Link
            href="/contact"
            className="inline-flex mt-10 px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg"
          >

            Contact Now

          </Link>

        </div>

      </section>

  {/* WHY CHOOSE US */}
<section className="px-6 lg:px-12 py-24">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-blue-400 font-semibold tracking-widest uppercase">
        Why Choose Us
      </p>

      <h2 className="text-5xl font-bold mt-4">
        Trusted By Businesses
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-8">
        <h3 className="text-2xl font-bold">
          Expert Guidance
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Professional GST and tax solutions with accurate filing support.
        </p>
      </div>

      <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-8">
        <h3 className="text-2xl font-bold">
          Fast Processing
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Quick registration, filing and compliance processing for businesses.
        </p>
      </div>

      <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-8">
        <h3 className="text-2xl font-bold">
          Reliable Support
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Dedicated customer support and professional consultation assistance.
        </p>
      </div>

    </div>

  </div>

</section>

{/* TESTIMONIALS */}
<section className="px-6 lg:px-12 py-24">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-blue-400 font-semibold tracking-widest uppercase">
        Testimonials
      </p>

      <h2 className="text-5xl font-bold mt-4">
        What Clients Say
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 to-black p-8">
        <p className="text-gray-300 leading-relaxed">
          “Professional and fast GST filing support. Very smooth process.”
        </p>

        <div className="mt-6">
          <h4 className="font-bold text-lg">
            Ravi Kumar
          </h4>

          <p className="text-gray-500">
            Business Owner
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 to-black p-8">
        <p className="text-gray-300 leading-relaxed">
          “Helped us with MSME registration and compliance professionally.”
        </p>

        <div className="mt-6">
          <h4 className="font-bold text-lg">
            Suresh Reddy
          </h4>

          <p className="text-gray-500">
            Startup Founder
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 to-black p-8">
        <p className="text-gray-300 leading-relaxed">
          “Best consultancy support for income tax and GST filings.”
        </p>

        <div className="mt-6">
          <h4 className="font-bold text-lg">
            Priya Sharma
          </h4>

          <p className="text-gray-500">
            Entrepreneur
          </p>
        </div>
      </div>

    </div>

  </div>

</section>

{/* FAQ */}
<section className="px-6 lg:px-12 py-24">

  <div className="max-w-5xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-blue-400 font-semibold tracking-widest uppercase">
        FAQs
      </p>

      <h2 className="text-5xl font-bold mt-4">
        Frequently Asked Questions
      </h2>

    </div>

    <div className="space-y-6">

      <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-8">
        <h3 className="text-2xl font-bold">
          Who needs GST registration?
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Businesses crossing GST turnover limits must register under GST.
        </p>
      </div>

      <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-8">
        <h3 className="text-2xl font-bold">
          How long does MSME registration take?
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          MSME registration is usually completed within 1-2 working days.
        </p>
      </div>

      <div className="rounded-3xl border border-white/5 bg-zinc-900/40 p-8">
        <h3 className="text-2xl font-bold">
          Do you provide income tax filing?
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed">
          Yes, we provide professional income tax filing for individuals and businesses.
        </p>
      </div>

    </div>

  </div>

</section>

    </main>
  );
}