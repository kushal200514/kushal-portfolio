import { ProfileCard } from "../components/profile-card";
import { Navigation } from "../components/navigation";
import { profile } from "../data/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-clip bg-white-1 px-4"
    >
      <Navigation />

      {/* Giant light-grey name behind everything */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none whitespace-nowrap text-center font-name font-semibold leading-[0.8] tracking-[-0.04em] text-grey-2 text-[clamp(3.5rem,16.5vw,16rem)]"
      >
        {profile.fullName}
      </span>

      {/* Card + handdrawn decorations */}
      <div className="relative z-10 mt-10">
        {/* "Aspiring Backend Developer" — top-right of the card */}
        <span className="absolute -right-24 -top-10 z-20 hidden rotate-[-14deg] text-hand-2 leading-[0.85] text-blue-1 sm:block">
          Aspiring 
          <br />
          Backend Developer
        </span>

        {/* "Click me" + squiggle — left of the card */}
        <div className="absolute -left-28 top-1/3 z-20 hidden flex-col items-center text-blue-1 sm:flex">
          <span className="text-hand-1 -rotate-6">Click me</span>
          <svg viewBox="0 0 60 70" fill="none" className="mt-1 h-14 w-12">
            <path
              d="M30 4c6 10 4 20-4 26-7 6-8 14-2 22 4 5 10 7 16 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path d="M34 56l6 6 8-3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <ProfileCard />
      </div>
    </section>
  );
}
