function DashedLine() {
  return (
    <div
      className="h-[3px] w-full"
      style={{
        background:
          "repeating-linear-gradient(90deg, var(--color-grey-3) 0 16px, transparent 16px 30px)",
        opacity: 0.45,
      }}
    />
  );
}

function MarqueeRow({
  items,
  reverse = false,
  className,
}: {
  items: string[];
  reverse?: boolean;
  className: string;
}) {
  return (
    <div className="overflow-hidden py-5">
      <div className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex" aria-hidden={dup === 1}>
            {items.map((t, i) => (
              <span
                key={`${dup}-${i}`}
                className={`whitespace-nowrap pr-12 text-[clamp(2.5rem,9vw,140px)] leading-none ${className}`}
              >
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Ticker() {
  return (
    <section className="overflow-hidden">
      <DashedLine />
      <MarqueeRow
        items={["MY LIFE IS ABOUT DESIGN"]}
        className="font-display font-semibold uppercase tracking-[-0.04em] text-grey-2"
      />
      <DashedLine />
      <MarqueeRow
        items={["#WEB Design", "#Product Design"]}
        reverse
        className="font-hand text-blue-1"
      />
      <DashedLine />
    </section>
  );
}
