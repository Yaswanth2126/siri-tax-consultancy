"use client";

import { motion } from "framer-motion";

import PageWrapper from "@/components/PageWrapper";

export default function AboutPage() {

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
              About Us
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">

              Modern Tax Consultancy
              <span className="text-blue-500"> For Businesses</span>

            </h1>

            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-3xl">

              Siri Tax Consultancy provides professional GST filing,
              Income Tax filing, MSME registration and business
              compliance solutions for startups, individuals and
              businesses across India.

            </p>

          </motion.div>

        </div>

      </section>

      {/* Stats */}
      <section className="px-6 py-12">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            {
              number: "500+",
              label: "GST Filings",
            },
            {
              number: "100+",
              label: "Business Clients",
            },
            {
              number: "24/7",
              label: "Client Support",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-10 text-center"
            >

              <h3 className="text-5xl font-bold text-blue-500">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-16">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[36px] p-10"
          >

            <p className="text-blue-500 text-sm uppercase tracking-widest font-semibold">
              Our Mission
            </p>

            <h2 className="text-3xl font-bold mt-5">
              Simplifying Tax Compliance
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">

              Our mission is to simplify taxation and compliance
              through modern digital processes, professional support
              and transparent services for businesses and individuals.

            </p>

          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            viewport={{ once: true }}
            className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[36px] p-10"
          >

            <p className="text-blue-500 text-sm uppercase tracking-widest font-semibold">
              Why Choose Us
            </p>

            <h2 className="text-3xl font-bold mt-5">
              Trusted Professional Support
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">

              We focus on fast response times, accurate filing,
              client transparency and modern financial solutions
              tailored for growing businesses.

            </p>

          </motion.div>

        </div>

      </section>

    </PageWrapper>
  );
}