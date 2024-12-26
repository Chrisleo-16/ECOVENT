import About from "@/components/About";
import BackToTopButton from "@/components/BackToTopButton";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Trusted from "@/components/Trusted";


export default function Home() {
  return (
    <>
      
      <Hero />
      <Trusted />
      <About />
      <Testimonial />
      <BackToTopButton/>
    </>
  );
}
