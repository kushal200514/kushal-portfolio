import Image from "next/image";
import { contact } from "../data/content";

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 text-blue-1" fill="currentColor" aria-hidden>
          <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.9 6.1 20.2l1.2-6.6L2.5 9l6.6-.9L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

function Verified() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-blue-1" fill="currentColor" aria-hidden>
      <path d="M12 2l2.4 1.8 3 .1 1 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-1 2.8-3 .1L12 22l-2.4-1.8-3-.1-1-2.8L3.2 15.6l.9-2.8-.9-2.8L5.6 8.3l1-2.8 3-.1L12 2Z" />
      <path d="M10.5 14.6 8 12.1l1.1-1.1 1.4 1.4 3.4-3.4 1.1 1.1-4.5 4.5Z" fill="#fff" />
    </svg>
  );
}

function Card({ t }: { t: (typeof contact.testimonials)[number] }) {
  return (
    <div className="flex flex-col gap-5 rounded-[24px] bg-grey-1 p-6">
      <Stars />
      <p className="text-body-2 text-black-1">{t.quote}</p>
      <div className="flex items-center gap-3">
        <Image src={t.avatar} alt={t.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="flex items-center gap-1 text-body-1 text-black-1">
            {t.name}
            <Verified />
          </span>
          <span className="text-body-1 text-grey-3">{t.role}</span>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsColumn() {
  return (
    <div className="relative h-[560px] w-full max-w-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex animate-marquee-y flex-col gap-3">
        {[0, 1].map((dup) =>
          contact.testimonials.map((t, i) => <Card key={`${dup}-${i}`} t={t} />),
        )}
      </div>
    </div>
  );
}
