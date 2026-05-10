"use client";

import { useState } from "react";
import {
  Calculator,
  IndianRupee,
  Percent,
} from "lucide-react";

export default function GSTCalculator() {

  const [amount, setAmount] = useState(1000);
  const [gst, setGst] = useState(18);

  const gstAmount = (amount * gst) / 100;
  const totalAmount = amount + gstAmount;

  return (
    <section className="px-6 pb-24">

      <div className="max-w-5xl mx-auto">

        <div className="bg-zinc-900 border border-zinc-800 rounded-[40px] p-8 md:p-12 shadow-2xl">

          {/* Header */}
          <div className="flex items-center gap-4 mb-10">

            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">

              <Calculator className="text-blue-500 w-8 h-8" />

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                GST Calculator
              </h2>

              <p className="text-gray-400 mt-2">
                Calculate GST instantly using latest tax slabs.
              </p>

            </div>

          </div>

          {/* Input Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Amount */}
            <div>

              <label className="text-sm text-gray-400 mb-3 block">
                Enter Amount
              </label>

              <div className="relative">

                <IndianRupee className="absolute left-4 top-4 text-gray-500 w-5 h-5" />

                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full bg-black border border-zinc-700 rounded-2xl px-12 py-4 text-lg outline-none focus:border-blue-500 transition"
                />

              </div>

            </div>

            {/* GST Percentage */}
            <div>

              <label className="text-sm text-gray-400 mb-3 block">
                GST Percentage
              </label>

              <div className="relative">

                <Percent className="absolute left-4 top-4 text-gray-500 w-5 h-5" />

                <select
                  value={gst}
                  onChange={(e) => setGst(Number(e.target.value))}
                  className="w-full bg-black border border-zinc-700 rounded-2xl px-12 py-4 text-lg outline-none focus:border-blue-500 transition appearance-none"
                >

                  <option value={5}>5%</option>
                  <option value={12}>12%</option>
                  <option value={18}>18%</option>
                  <option value={28}>28%</option>

                </select>

              </div>

            </div>

          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {/* Original */}
            <div className="bg-black border border-zinc-800 rounded-3xl p-6">

              <p className="text-gray-400 text-sm mb-3">
                Original Amount
              </p>

              <h3 className="text-3xl font-bold">
                ₹{amount.toLocaleString()}
              </h3>

            </div>

            {/* GST */}
            <div className="bg-blue-600 rounded-3xl p-6">

              <p className="text-blue-100 text-sm mb-3">
                GST Amount
              </p>

              <h3 className="text-3xl font-bold">
                ₹{gstAmount.toLocaleString()}
              </h3>

            </div>

            {/* Total */}
            <div className="bg-black border border-zinc-800 rounded-3xl p-6">

              <p className="text-gray-400 text-sm mb-3">
                Total Amount
              </p>

              <h3 className="text-3xl font-bold text-green-400">
                ₹{totalAmount.toLocaleString()}
              </h3>

            </div>

          </div>

          {/* GST Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            {[5, 12, 18, 28].map((rate) => (

              <button
                key={rate}
                onClick={() => setGst(rate)}
                className={`px-6 py-3 rounded-2xl border transition font-semibold ${
                  gst === rate
                    ? "bg-blue-600 border-blue-600"
                    : "border-zinc-700 hover:border-white"
                }`}
              >
                {rate}% GST
              </button>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}