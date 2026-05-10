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

const services = [
  {
    title: "GST Filing",
    description:
      "Monthly, quarterly and annual GST filing services with complete compliance support.",
    icon: FileText,
  },
  {
    title: "Income Tax Filing",
    description:
      "Professional income tax return filing for salaried individuals and businesses.",
    icon: Landmark,
  },
  {
    title: "MSME Registration",
    description:
      "Fast MSME/Udyam registration with complete business assistance.",
    icon: Building2,
  },
  {
    title: "Accounting Services",
    description:
      "Bookkeeping, accounting and financial reporting solutions for businesses.",
    icon: Calculator,
  },
  {
    title: "Business Registration",
    description:
      "Company registration, startup setup and compliance guidance.",
    icon: Briefcase,
  },
  {
    title: "Tax Compliance",
    description:
      "Professional support for maintaining GST and Income Tax compliance.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {

  return (
    <PageWrapper>

      <section className="min-h-screen bg-black text-white px-4 sm:px-6 pt-28 pb-20">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >

            <p className="text-blue-500 uppercase tracking-[0.3em] text-sm font-semibold">
              Professional Services
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

              Complete Tax &
              <span className="text-blue-500"> Business Solutions</span>

            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">

              Professional GST filing, Income Tax filing,
              MSME registration, accounting and business
              compliance services for businesses and individuals.

            </p>

          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="group bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-[32px] p-8 hover:border-blue-500/40 transition-all duration-300"
                >

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">

                    <Icon
                      size={36}
                      className="text-blue-500"
                    />

                  </div>

                  {/* Title */}
                  <h2 className="mt-8 text-3xl font-bold leading-tight">

                    {service.title}

                  </h2>

                  {/* Description */}
                  <p className="mt-5 text-gray-400 leading-relaxed text-lg">

                    {service.description}

                  </p>

                  {/* Button */}
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center mt-10 border border-zinc-700 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400 transition rounded-2xl px-6 py-3 text-sm font-medium"
                  >

                    Learn More

                  </a>

                </motion.div>

              );
            })}

          </div>

        </div>

      </section>

    </PageWrapper>
  );
}