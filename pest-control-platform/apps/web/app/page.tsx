import Hero from "@/components/sections/Hero";
import PestSelector from "@/components/sections/PestSelector";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicePackages from "@/components/sections/ServicePackages";
import BookingForm from "@/components/sections/BookingForm";
import ProcessTransparency from "@/components/sections/ProcessTransparency";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PestSelector />
        <TrustStrip />
        <ServicePackages />
        <BookingForm />
        <ProcessTransparency />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
