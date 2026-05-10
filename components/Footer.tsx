export default function Footer() {

  return (
    <footer className="border-t border-zinc-900 px-6 py-10 mt-24">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div>

          <h2 className="text-2xl font-bold text-white">
            Siri Tax Consultancy
          </h2>

          <p className="text-gray-500 mt-2">
            Premium GST & Income Tax Solutions
          </p>

        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 text-gray-400">

          <a
            href="/"
            className="hover:text-white transition"
          >
            Home
          </a>

          <a
            href="/about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="/services"
            className="hover:text-white transition"
          >
            Services
          </a>

          <a
            href="/gst-calculator"
            className="hover:text-white transition"
          >
            GST Calculator
          </a>

          <a
            href="/rules"
            className="hover:text-white transition"
          >
            Rules
          </a>

          <a
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-zinc-900 text-center text-gray-600 text-sm">

        © 2026 Siri Tax Consultancy. All rights reserved.

      </div>

    </footer>
  );
}