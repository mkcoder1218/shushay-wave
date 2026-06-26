import Hero from '@/components/sections/Hero';
import Partners from '@/components/sections/Partners';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import DownloadApp from '@/components/sections/DownloadApp';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <HowItWorks />
      <Features />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <DownloadApp />
      <Contact />
    </>
  );
}
