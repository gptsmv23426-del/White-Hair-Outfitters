import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import AboutSection from "@/components/AboutSection";
import OtherServices from "@/components/OtherServices";
import HuntGrid from "@/components/HuntGrid";
import ExperienceSection from "@/components/ExperienceSection";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroVideo />
      <AboutSection />
      <OtherServices />
      <HuntGrid />
      <ExperienceSection />
      <Gallery />
      <ContactForm />
      <Footer />
    </main>
  );
}
