import GSTCalculator from "@/components/GSTCalculator";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function GSTCalculatorPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800 backdrop-blur-xl bg-black/70">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-bold tracking-wide">
            Siri Tax Consultancy
          </h1>

          <div className="hidden md:flex items-center gap-8 text-gray-300">

            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <a href="/about" className="hover:text-white transition">
              About
            </a>

            <a href="/gst-calculator" className="text-blue-500">
              GST Calculator
            </a>

          </div>

        </div>

      </nav>

      {/* Header */}
      <section className="text-center px-6 py-24">

        <p className="text-blue-500 font-semibold uppercase tracking-widest">
          GST Calculation Tool
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          GST Calculator
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
          Instantly calculate GST amount using latest GST slabs including
          5%, 12%, 18% and 28%.
        </p>

      </section>

      {/* Calculator */}
      <GSTCalculator />

      <WhatsAppButton />

    </main>
  );
}