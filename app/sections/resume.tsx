import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "../components/motion";
import { pricing } from "../data/content";

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-blue-1" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingCard({ card }: { card: (typeof pricing.cards)[number] }) {
  return (
    <div className="flex w-full max-w-[400px] flex-col gap-4 rounded-[28px] bg-grey-1 p-6">
      <span className="text-hand-1 text-blue-1">{card.badge}</span>
      <span className="font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.04em] text-black-1">
        {card.title}
      </span>
      <span className="font-hand text-[2.6rem] leading-none text-blue-1">{card.price}</span>
      <Link
        href={card.cta.href}
        className="w-fit rounded-full bg-black-1 px-5 py-2.5 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110"
      >
        {card.cta.label}
      </Link>
      <div className="mt-2 rounded-[20px] bg-white-1 p-6">
        <ul className="flex flex-col gap-3.5">
          {card.features.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-body-2 text-black-1">
              <Check />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="px-6 pb-[60px] pt-[120px] md:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-5 text-center">
          <Reveal variant="up">
            <span className="text-hand-1 text-blue-1">{pricing.tag}</span>
          </Reveal>
          <Reveal variant="up" delay={0.05}>
            <h2 className="max-w-[550px] text-h1 text-black-1">{pricing.heading}</h2>
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <p className="max-w-[300px] text-body-2 text-grey-3">{pricing.body}</p>
          </Reveal>
        </div>

        <RevealGroup stagger={0.1} className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:items-stretch">
          {pricing.cards.map((c) => (
            <RevealItem key={c.title} variant="up" className="flex w-full max-w-[400px] justify-center">
              <PricingCard card={c} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal variant="up" className="flex flex-col items-center text-blue-1">
          <svg viewBox="0 0 40 44" fill="none" className="h-8 w-7">
            <path d="M22 3c4 6 3 13-3 17-5 4-6 10-1 15 2 3 5 4 9 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M24 36l4 4 6-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="-rotate-3 text-hand-1">Get started</span>
        </Reveal>
      </div>
    </section>
  );
}
