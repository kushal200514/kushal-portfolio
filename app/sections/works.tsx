import { Button } from "../components/button";
import { PortfolioWork } from "../components/portfolio-work";
import { Reveal, RevealGroup, RevealItem } from "../components/motion";
import { works } from "../data/content";

export function Works() {
  return (
    <section id="works" className="px-6 py-[120px] md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-6">
        {/* Left text column */}
        <div className="flex flex-col gap-8 lg:max-w-[410px]">
          <div className="flex flex-col gap-5">
            <Reveal variant="up">
              <span className="text-hand-1 text-blue-1">{works.tag}</span>
            </Reveal>
            <Reveal variant="up" delay={0.05}>
              <h2 className="text-h1 text-black-1">{works.heading}</h2>
            </Reveal>
            <Reveal variant="up" delay={0.1}>
              <p className="max-w-[410px] text-body-2 text-grey-3">{works.body}</p>
            </Reveal>
          </div>
          <Reveal variant="up" delay={0.15} className="flex flex-col items-start gap-2">
            <Button href={works.cta.href} variant="dark">
              {works.cta.label}
            </Button>
            <div className="flex flex-col items-center pl-6 text-blue-1">
              <svg viewBox="0 0 40 44" fill="none" className="h-8 w-7">
                <path d="M22 3c4 6 3 13-3 17-5 4-6 10-1 15 2 3 5 4 9 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M24 36l4 4 6-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="-rotate-3 text-hand-1">Get started</span>
            </div>
          </Reveal>
        </div>

        {/* Right 2x2 grid */}
        <RevealGroup stagger={0.08} amount={0.2} className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
          {works.projects.map((p) => (
            <RevealItem key={p.title} variant="up">
              <PortfolioWork {...p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
