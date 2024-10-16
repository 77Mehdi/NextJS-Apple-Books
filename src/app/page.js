import Faq from "@/components/Faq";
import FooterSection from "@/components/FooterSection";
import Hero from "@/components/Hero";
import Homehero from "@/components/hero/Homehero";
import HeroFilter from "@/components/HeroFilter";
import MobileGallery from "@/components/MobileGallery";



export default function Home() {
  return (
    <>
      <Hero />
      <MobileGallery/>
      <HeroFilter/>
      <Homehero/>
      <Faq/>
      <FooterSection/>
    </>

  );
}
