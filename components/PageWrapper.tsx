import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      <BackgroundEffects />


      <div className="relative z-10">

        {children}

      </div>

      <Footer />

      <WhatsAppButton />

    </main>
  );
}