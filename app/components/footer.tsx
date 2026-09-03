import Link from "next/link";
import { footer } from "../data/content";

function SocialIcon({ name }: { name: string }) {
  if (name.includes("Twitter") || name === "X")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    );
  if (name.includes("Insta"))
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
        <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.8" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  return (
    <svg viewBox="0 0 14 21" fill="currentColor" className="h-4 w-3" aria-hidden>
      <path d="M0 0h14v7H7zM0 7h7l7 7H7v7l-7-7z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="px-4 pb-4">
      <div className="mx-auto max-w-[1200px] rounded-[32px] bg-grey-1 p-8 md:p-14">
        <div className="flex flex-col gap-14 lg:flex-row lg:justify-between">
          {/* Brand + CTA */}
          <div className="flex max-w-[420px] flex-col gap-5">
            <span className="font-serif text-[2rem] italic leading-none text-black-1">{footer.name}</span>
            <span className="text-hand-1 text-blue-1">{footer.tag}</span>
            <h2 className="font-display text-[1.9rem] font-semibold leading-tight tracking-[-0.04em] text-black-1">
              {footer.heading}
            </h2>
            <p className="text-body-2 text-grey-3">{footer.body}</p>
            <div className="flex flex-col items-start gap-3 pt-1">
              <Link
                href={footer.cta.href}
                className="rounded-2xl bg-black-1 px-5 py-3 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110"
              >
                {footer.cta.label}
              </Link>
              <div className="flex flex-col items-center pl-4 text-blue-1">
                <svg viewBox="0 0 40 44" fill="none" className="h-8 w-7">
                  <path d="M22 3c4 6 3 13-3 17-5 4-6 10-1 15 2 3 5 4 9 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M24 36l4 4 6-2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="-rotate-3 text-hand-1">Get started</span>
              </div>
            </div>
          </div>

          {/* Socials + columns */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3 lg:items-end">
              <span className="text-body-1 text-grey-3">{footer.socialsLabel}</span>
              <div className="flex flex-wrap gap-3">
                {footer.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-white-1 px-4 py-2.5 text-body-1 text-black-1 ring-1 ring-grey-2 transition-colors hover:ring-grey-3"
                  >
                    <SocialIcon name={s.label} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {footer.columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <h3 className="text-body-1 text-blue-1">{col.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="text-body-2 text-black-1 transition-colors hover:text-grey-3">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-grey-2 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-body-1 text-grey-3">{footer.copyright}</p>
          <p className="text-body-1 text-grey-3">{footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
