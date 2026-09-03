import Image from "next/image";

import { Reveal, RevealGroup, RevealItem } from "../components/motion";

import { about } from "../data/content";

export function About() {
  return (
    <section id="about" className="px-6 py-[120px] md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">

        {/* Section Heading */}
        <div className="flex flex-col gap-5">
          <Reveal variant="up">
            <span className="text-hand-1 text-blue-1">
              {about.tag}
            </span>
          </Reveal>

          <Reveal variant="up" delay={0.05}>
            <h2 className="max-w-[1000px] text-h1 text-black-1">
              {about.heading}
            </h2>
          </Reveal>
        </div>

        {/* 50 / 50 Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">

          {/* Left Side */}
          <div className="flex flex-col gap-14">

            {/* ================= FRONTEND ================= */}
            <div className="flex flex-col gap-5">
              <Reveal variant="up">
                <span className="text-hand-2 text-black-1">
                  Frontend
                </span>
              </Reveal>

              <RevealGroup
                stagger={0.06}
                className="flex flex-wrap gap-3"
              >
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                ].map((tool) => (
                  <RevealItem key={tool} variant="scale">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-grey-1 px-2">
                      <span className="text-center text-sm font-semibold text-blue-1">
                        {tool}
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* ================= BACKEND ================= */}
            <div className="flex flex-col gap-5">
              <Reveal variant="up">
                <span className="text-hand-2 text-black-1">
                  Backend
                </span>
              </Reveal>

              <RevealGroup
                stagger={0.06}
                className="flex flex-wrap gap-3"
              >
                {[
                  "Node.js",
                  "Express.js",
                  "Python",
                  "Java",
                  "MongoDB",
                ].map((tool) => (
                  <RevealItem key={tool} variant="scale">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-grey-1 px-2">
                      <span className="text-center text-sm font-semibold text-blue-1">
                        {tool}
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* ================= AI ================= */}
            <div className="flex flex-col gap-5">
              <Reveal variant="up">
                <span className="text-hand-2 text-black-1">
                  AI Tools
                </span>
              </Reveal>

              <RevealGroup
                stagger={0.06}
                className="flex flex-wrap gap-3"
              >
                {[
                  "OpenAI",
                  "Claude",
                  "Gemini",
                  "Python",
                ].map((tool) => (
                  <RevealItem key={tool} variant="scale">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-grey-1 px-2">
                      <span className="text-center text-sm font-semibold text-blue-1">
                        {tool}
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

            {/* ================= WORK PROCESS ================= */}
            <div className="flex flex-col gap-6">
              <Reveal variant="up">
                <span className="text-hand-2 text-black-1">
                  {about.processLabel}
                </span>
              </Reveal>

              <RevealGroup
                stagger={0.08}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {about.process.map((p) => (
                  <RevealItem key={p.step} variant="up">
                    <div className="flex h-full flex-col gap-2.5 rounded-[20px] bg-grey-1 p-[22px]">

                      <span className="text-hand-1 text-blue-1">
                        {p.step}
                      </span>

                      <span className="text-body-3 text-black-1">
                        {p.title}
                      </span>

                      <span className="text-body-2 text-grey-3">
                        {p.body}
                      </span>

                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>

          </div>

          {/* ================= PROFILE IMAGE ================= */}
          <Reveal variant="scale" className="w-full">
            <div className="relative h-full min-h-[460px] w-full overflow-visible rounded-[32px] bg-white-2">

              <div className="relative h-full w-full overflow-hidden rounded-[32px]">

                <Image
                  src="/framer/profile-about2.png"
                  alt="Kushal"
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover object-top"
                />

              </div>

              {/* Greeting */}
              <span className="absolute right-6 top-6 text-hand-2 text-blue-1">
                {about.profileGreeting}
              </span>

              {/* Framer Icon */}
              <Image
                src="/framer/framer-icon.png"
                alt=""
                width={72}
                height={72}
                className="absolute -bottom-2 -right-3 h-16 w-16 rotate-6"
              />

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}