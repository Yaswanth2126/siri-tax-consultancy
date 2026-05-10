"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {

  const services = [
    {
      icon: "₹",
      title: "GST Filing",
      desc: "Accurate GST filing and compliance support for businesses.",
    },
    {
      icon: "📄",
      title: "Income Tax",
      desc: "Professional income tax filing services for individuals and businesses.",
    },
    {
      icon: "🏢",
      title: "MSME Registration",
      desc: "Fast MSME/Udyam registration with complete assistance.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      <BackgroundEffects />

      <Navbar />

      {/* Hero */}
      <section className="relative px-4 sm:px-6 pt-12 md:pt-20 pb-20 md:pb-24 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 md:gap-20 items-center relative z-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl text-blue-400 text-xs sm:text-sm font-medium">

              Trusted GST & Tax Experts

            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">

              Simplifying
              <span className="text-blue-500"> GST</span>,

              <br />

              Tax &
              <span className="text-blue-500"> Compliance</span>

            </h1>

            {/* Description */}
            <p className="mt-6 text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">

              Premium GST filing, Income Tax filing,
              MSME registration and modern business
              compliance solutions for businesses
              across India.

            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <a
                href="/services"
                className="bg-blue-600 hover:bg-blue-700 text-center px-6 py-4 rounded-2xl font-semibold transition shadow-lg shadow-blue-500/20"
              >
                Explore Services
              </a>

              <a
                href="/contact"
                className="border border-zinc-700 bg-zinc-900/40 backdrop-blur-xl hover:border-white text-center px-6 py-4 rounded-2xl font-semibold transition"
              >
                Contact Us
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 md:mt-14">

              <div>

                <h3 className="text-2xl sm:text-3xl font-bold">
                  500+
                </h3>

                <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                  GST Filings
                </p>

              </div>

              <div>

                <h3 className="text-2xl sm:text-3xl font-bold">
                  100+
                </h3>

                <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                  Business Clients
                </p>

              </div>

              <div>

                <h3 className="text-2xl sm:text-3xl font-bold">
                  24/7
                </h3>

                <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                  Support
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >

            <div className="relative bg-zinc-900/70 backdrop-blur-2xl border border-zinc-800 rounded-[32px] md:rounded-[40px] p-6 md:p-8 shadow-2xl overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-blue-500/10 blur-[70px] rounded-full"></div>

              {/* Top */}
              <div className="relative flex items-center justify-between mb-8">

                <div>

                  <p className="text-gray-400 text-sm">
                    Compliance Status
                  </p>

                  <h3 className="text-3xl md:text-4xl font-bold mt-2">
                    Active
                  </h3>

                </div>

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl md:text-3xl">

                  ₹

                </div>

              </div>

              {/* Cards */}
              <div className="relative space-y-4">

                {[
                  {
                    title: "GST Filing",
                    status: "Completed",
                    color: "bg-green-500",
                  },
                  {
                    title: "Income Tax",
                    status: "Processing",
                    color: "bg-yellow-500",
                  },
                  {
                    title: "MSME Registration",
                    status: "Verified",
                    color: "bg-blue-500",
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-black/40 border border-zinc-800 rounded-3xl p-4 md:p-5"
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs sm:text-sm text-gray-500">
                          {item.title}
                        </p>

                        <h4 className="text-lg md:text-xl font-semibold mt-2">
                          {item.status}
                        </h4>

                      </div>

                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Services */}
      <section className="relative px-4 sm:px-6 py-20">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
              Services
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5">
              Professional Financial Services
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[28px] md:rounded-[32px] p-6 md:p-8 transition overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-blue-500/5"></div>

                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl md:text-2xl mb-6">

                  {service.icon}

                </div>

                <h3 className="relative text-xl md:text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="relative text-sm md:text-base text-gray-400 leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
    {/* Testimonials */}
<section className="relative px-4 sm:px-6 py-20">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
        Testimonials
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5">
        Trusted By Businesses
      </h2>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">

      {[
        {
          name: "Ramesh Kumar",
          role: "Business Owner",
          review:
            "Professional GST filing services with very fast response and excellent support.",
        },
        {
          name: "Priya Sharma",
          role: "Startup Founder",
          review:
            "Siri Tax Consultancy helped us simplify compliance and taxation smoothly.",
        },
        {
          name: "Arjun Verma",
          role: "Freelancer",
          review:
            "Very professional income tax filing experience with transparent guidance.",
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
          whileHover={{ scale: 1.02 }}
          className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[32px] p-8"
        >

          {/* Stars */}
          <div className="flex gap-1 text-yellow-400 text-lg">

            ★ ★ ★ ★ ★

          </div>

          {/* Review */}
          <p className="mt-6 text-gray-400 leading-relaxed">

            "{item.review}"

          </p>

          {/* User */}
          <div className="mt-8">

            <h3 className="font-semibold text-lg">
              {item.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {item.role}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* FAQ */}
<section className="relative px-4 sm:px-6 py-20">

  <div className="max-w-4xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
        FAQ
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5">
        Frequently Asked Questions
      </h2>

    </div>

    {/* FAQ Items */}
    <div className="space-y-6">

      {[
        {
          question: "What services do you provide?",
          answer:
            "We provide GST filing, Income Tax filing, MSME registration, accounting and compliance services.",
        },
        {
          question: "Do you support businesses across India?",
          answer:
            "Yes, we provide online consultancy and compliance services for businesses and individuals across India.",
        },
        {
          question: "How quickly can GST filing be completed?",
          answer:
            "Most GST filing processes are completed quickly depending on the availability of required documents.",
        },
        {
          question: "Can startups get compliance assistance?",
          answer:
            "Yes, we help startups with registration, GST setup, MSME registration and taxation support.",
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: index * 0.06,
          }}
          viewport={{ once: true }}
          className="bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[28px] p-6 md:p-8"
        >

          <h3 className="text-xl font-semibold">
            {item.question}
          </h3>

          <p className="mt-4 text-gray-400 leading-relaxed">
            {item.answer}
          </p>

        </motion.div>

      ))}

    </div>

  </div>

</section>
      <Footer />

      <WhatsAppButton />

    </main>
  );
}