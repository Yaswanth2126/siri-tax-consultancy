"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import PageWrapper from "@/components/PageWrapper";

export default function ContactPage() {

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const formData = new FormData(form);

    const response = await fetch(
      "https://formspree.io/f/xlgzonpg",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {

      setSuccess(true);

      form.reset();

    }

    setLoading(false);
  }

  return (
    <PageWrapper>

      <section className="px-4 sm:px-6 pt-24 pb-20">

        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >

            <p className="text-blue-500 uppercase tracking-widest text-sm font-semibold">
              Contact Us
            </p>

            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

              Let’s Discuss Your
              <span className="text-blue-500"> Tax Requirements</span>

            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">

              Contact Siri Tax Consultancy for GST filing,
              Income Tax filing, MSME registration and
              business compliance services.

            </p>

          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="mt-16 bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 rounded-[36px] p-6 sm:p-10"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>

                <label className="block text-sm text-gray-400 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* Phone */}
              <div>

                <label className="block text-sm text-gray-400 mb-3">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block text-sm text-gray-400 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
                />

              </div>

              {/* Service */}
              <div>

                <label className="block text-sm text-gray-400 mb-3">
                  Select Service
                </label>

                <select
                  name="service"
                  required
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition"
                >

                  <option value="">Choose Service</option>

                  <option>GST Filing</option>

                  <option>Income Tax Filing</option>

                  <option>MSME Registration</option>

                  <option>Accounting Services</option>

                  <option>Business Registration</option>

                </select>

              </div>

              {/* Message */}
              <div>

                <label className="block text-sm text-gray-400 mb-3">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your requirements..."
                  className="w-full bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4 text-white outline-none focus:border-blue-500 transition resize-none"
                />

              </div>

              {/* Success Message */}
              {success && (

                <div className="bg-green-500/10 border border-green-500/20 text-green-400 rounded-2xl px-5 py-4">

                  Your enquiry has been submitted successfully.

                </div>

              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-2xl py-4 font-semibold text-lg shadow-lg shadow-blue-500/20 disabled:opacity-60"
              >

                {loading
                  ? "Submitting..."
                  : "Submit Enquiry"}

              </button>

            </form>

          </motion.div>

        </div>

      </section>

    </PageWrapper>
  );
}