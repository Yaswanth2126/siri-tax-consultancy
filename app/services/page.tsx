"use client";

import { motion } from "framer-motion";

import {
  FileText,
  Landmark,
  Building2,
  Calculator,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

import PageWrapper from "@/components/PageWrapper";

export default function ServicesPage() {

  const services = [
    {
      icon: FileText,
      title: "GST Filing",
      description:
        "Monthly, quarterly and annual GST filing services with complete compliance support.",
    },
    {
      icon: Landmark,
      title: "Income Tax Filing",
      description:
        "Professional income tax return filing for salaried individuals and businesses.",
    },
    {
      icon: Building2,
      title: "MSME Registration",
      description:
        "Fast MSME/Udyam registration with complete business assistance.",
    },
    {
      icon: Calculator,
      title: "Accounting Services",
      description:
        "Bookkeeping, accounting and financial reporting solutions for businesses.",
    },
    {
      icon: Briefcase,
      title: "Business Registration",
      description:
        "Company registration, startup setup and compliance guidance.",
    },
    {
      icon: ShieldCheck,
      title: "Tax Compliance",
      description:
        "Professional support for maintaining GST and Income Tax compliance.",
    },
  ];

  return (
    <PageWrapper>

      {/* Hero */}
      <section className="px-6 pt-24 pb-16">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl"
          >

            <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
              Our Services
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">

              Professional Financial
              <span className="text-blue-500"> Solutions</span>

            </h1>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-3xl">

              We provide professional GST filing, Income Tax filing,
              MSME registration and business compliance services
              for startups, businesses and individuals across India.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Services Grid */}
      <section className="px-6 py-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                }}
                className="group relative overflow-hidden bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[36px] p-8 transition"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/5"></div>

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">

                  <Icon className="text-blue-500 w-8 h-8" />

                </div>

                {/* Title */}
                <h2 className="relative text-2xl font-bold">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="relative mt-5 text-gray-400 leading-relaxed">

                  {service.description}

                </p>

                {/* Button */}
                <button className="relative mt-8 border border-zinc-700 hover:border-blue-500 px-5 py-3 rounded-2xl transition text-sm font-semibold">

                  Learn More

                </button>

              </motion.div>

            );

          })}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-20">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-[40px] border border-zinc-800 bg-gradient-to-r from-zinc-900/90 to-blue-950/70 backdrop-blur-xl p-14 md:p-20 text-center"
        >

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Need Professional Tax Assistance?
          </h2>

          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Connect with Siri Tax Consultancy for trusted financial and compliance solutions.
          </p>

          <a
            href="https://wa.me/918977756656"
            target="_blank"
            className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-blue-500/20"
          >
            Contact On WhatsApp
          </a>

        </motion.div>

      </section>

    </PageWrapper>
  );
}