import { Reveal } from "../components/motion";
import { ContactForm } from "../components/contact-form";
import { contact } from "../data/content";

export function Contact() {
  return (
    <section id="contact-section" className="px-6 py-[120px] md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-14">

        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal variant="up">
            <span className="text-hand-1 text-blue-1">
              {contact.tag}
            </span>
          </Reveal>

          <Reveal variant="up" delay={0.05}>
            <h2 className="text-h1 text-black-1">
              {contact.heading}
            </h2>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <p className="max-w-[400px] text-body-2 text-grey-3">
              {contact.body}
            </p>
          </Reveal>
        </div>

        {/* Centered Contact Form */}
        <div className="flex w-full justify-center">
          <Reveal variant="up" className="w-full max-w-[600px]">
            <ContactForm />
          </Reveal>
        </div>

      </div>
    </section>
  );
}