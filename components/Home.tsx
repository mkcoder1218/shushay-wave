import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import DownloadApp from "@/components/sections/DownloadApp";
import Contact from "@/components/sections/Contact";

const sections = [
  { id: "hero", component: Hero },
  { id: "partners", component: Partners },
  { id: "how-it-works", component: HowItWorks },
  { id: "features", component: Features },
  { id: "about", component: About },
  { id: "why-choose-us", component: WhyChooseUs },
  { id: "testimonials", component: Testimonials },
  { id: "download-app", component: DownloadApp },
  { id: "contact", component: Contact },
] as const;

export default function Home() {
  return (
    <>
      {sections.map(({ id, component: Component }) => (
        <Component key={id} />
      ))}
    </>
  );
}
