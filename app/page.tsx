import { Hero } from "./sections/hero";
import { Works } from "./sections/works";
import { About } from "./sections/about";
import { Ticker } from "./components/ticker";
import { Faq } from "./sections/faq";
import { Pricing } from "./sections/resume";
import { Coding } from "./sections/coding";
import { Contact } from "./sections/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Works />
        <About />
        <Ticker />
        <Faq />
        <Pricing />
        <Coding />
        <Contact />
      </main>
      <Footer />
    </>
  );
}