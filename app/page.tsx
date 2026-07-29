import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import CTA from "@/components/CTA";
import ContactPreview from "@/components/ContactPreview";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Testimonials />
      <FAQs />
      <CTA />
      <ContactPreview />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
