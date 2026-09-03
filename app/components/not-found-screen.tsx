import Link from "next/link";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

export function NotFoundScreen() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-[78vh] flex-col items-center justify-center gap-6 px-6 pt-32 text-center">
        <span className="font-display text-[clamp(7rem,22vw,15rem)] font-semibold leading-none tracking-[-0.05em] text-grey-2">
          404
        </span>
        <h1 className="text-h2 text-black-1">Page Not Found</h1>
        <p className="max-w-[360px] text-body-2 text-grey-3">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-black-1 px-5 py-3 text-body-1 text-white-1 transition-all duration-200 hover:brightness-110"
        >
          <svg viewBox="0 0 24 20" fill="none" className="h-4 w-5" aria-hidden>
            <path d="M21 11c-5-1-9 0-12 3M9 8l-4 6 5 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
