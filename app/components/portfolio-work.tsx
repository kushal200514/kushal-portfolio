import Image from "next/image";
import Link from "next/link";

export function PortfolioWork({
  tag,
  title,
  href,
  image,
}: {
  tag: string;
  title: string;
  href: string;
  image: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 rounded-[24px] bg-grey-1 p-3 transition-all duration-300 ease-[cubic-bezier(0.44,0,0.18,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_-26px_rgba(50,50,50,0.35)]"
    >
      <div className="relative aspect-[1.42] w-full overflow-hidden rounded-[18px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 90vw, 360px"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.44,0,0.18,1)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-0.5 px-2 pb-2">
        <span className="font-hand text-[1.2rem] leading-none text-blue-1">{tag}</span>
        <span className="text-body-3 text-black-1">{title}</span>
      </div>
    </Link>
  );
}
