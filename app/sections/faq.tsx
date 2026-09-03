import { Reveal } from "../components/motion";
import { FaqAccordion } from "../components/faq-accordion";
import { faqs } from "../data/content";

export function Faq() {
  return (
    <section id="faq" className="px-6 py-[120px] md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal variant="up">
            <span className="text-hand-1 text-blue-1">{faqs.tag}</span>
          </Reveal>
          <Reveal variant="up" delay={0.05}>
            <h2 className="text-h1 text-black-1">{faqs.heading}</h2>
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <p className="max-w-[320px] text-body-2 text-grey-3">{faqs.body}</p>
          </Reveal>
        </div>
        <FaqAccordion />
      </div>
    </section>
  );
}
