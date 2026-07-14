import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { AboutDoctor } from "@/components/sections/about-doctor";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { ContactForm } from "@/components/sections/contact-form";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <AboutDoctor />
        <Testimonials />
        <Location />
        <ContactForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
