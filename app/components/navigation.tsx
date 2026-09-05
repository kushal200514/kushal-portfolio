import Link from "next/link";
import { navLinks } from "../data/content";
import { ThemeToggle } from "./theme-toggle";

export function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-20">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-[1.9rem] italic leading-none text-black-1"
        >
          Kushal
        </Link>

        {/* Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-grey-1 p-1.5 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-body-1 text-black-1 transition-colors duration-200 hover:bg-white-1"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact-page"
            className="rounded-2xl bg-black-1 px-5 py-3 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110"
          >
            Get In Touch
          </Link>
        </div>

      </nav>
    </header>
  );
}