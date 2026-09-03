import Link from "next/link";

/** Dark pill CTA — black-1 fill, white label, optional arrow. */
export function Button({
  href,
  children,
  arrow = true,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  arrow?: boolean;
  variant?: "dark" | "blue" | "light";
  className?: string;
}) {
  const skin =
    variant === "blue"
      ? "bg-blue-1 text-white-1 hover:brightness-105"
      : variant === "light"
        ? "bg-white-1 text-black-1 ring-1 ring-grey-2 hover:bg-grey-1"
        : "bg-black-1 text-white-1 hover:brightness-110";
  return (
    <Link
      href={href}
      className={`group/btn inline-flex items-center gap-2 rounded-full px-5 py-3 text-body-1 transition-all duration-300 ease-[cubic-bezier(0.44,0,0.18,1)] will-change-transform hover:-translate-y-0.5 active:translate-y-0 ${skin} ${className}`}
    >
      <span>{children}</span>
      {arrow && (
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </Link>
  );
}
