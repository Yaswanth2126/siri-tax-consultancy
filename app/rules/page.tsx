import WhatsAppButton from "@/components/WhatsAppButton";

export default function RulesPage() {
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

            <a href="/services" className="hover:text-white transition">
              Services
            </a>

            <a href="/gst-calculator" className="hover:text-white transition">
              GST Calculator
            </a>

            <a href="/rules" className="text-blue-500">
              Rules
            </a>

          </div>

        </div>

      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-24">

        <p className="text-blue-500 font-semibold uppercase tracking-widest">
          Tax Knowledge Hub
        </p>

        <h1 className="text-5xl md:text-6xl font-bold mt-6">
          GST & Income Tax Rules
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg leading-relaxed">
          Learn important GST and Income Tax rules, filing deadlines,
          penalties and compliance requirements for businesses and individuals.
        </p>

      </section>

      {/* GST Rules */}
      <section className="px-6 pb-20">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            GST Rules
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                GST Registration Rule
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Businesses with annual turnover above the prescribed limit
                must register under GST and comply with filing requirements.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                GST Return Filing
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Registered taxpayers must file GST returns monthly,
                quarterly or annually depending on business category.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                Input Tax Credit
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Businesses can claim input tax credit on eligible purchases
                used for business purposes.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                GST Penalties
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Delayed filing and non-compliance may result in penalties,
                interest and cancellation of GST registration.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Income Tax Rules */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold mb-10">
            Income Tax Rules
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                ITR Filing
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Individuals and businesses must file Income Tax Returns
                within the prescribed due dates.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                Advance Tax
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Taxpayers with higher annual tax liability may need
                to pay advance tax in installments.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                TDS Compliance
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Tax Deducted at Source (TDS) must be deducted and
                deposited within specified timelines.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-5">
                Income Tax Penalties
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Failure to file returns or incorrect filing may
                result in penalties and notices from authorities.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-6 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h2 className="text-2xl font-bold">
              Siri Tax Consultancy
            </h2>

            <p className="text-gray-400 mt-2">
              Premium GST & Income Tax Solutions
            </p>

          </div>

          <div className="flex gap-6 text-gray-400">

            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <a href="/services" className="hover:text-white transition">
              Services
            </a>

            <a href="/gst-calculator" className="hover:text-white transition">
              GST Calculator
            </a>

          </div>

        </div>

      </footer>

      <WhatsAppButton />

    </main>
  );
}