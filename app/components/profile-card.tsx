"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { profile } from "../data/content";

/** Hero flip card — front: photo + Kushal; back: experience and tools. */
export function ProfileCard() {
  const [flipped, setFlipped] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped((f) => !f);
    }
  };

  return (
    <div className="relative h-[500px] w-[400px] max-w-[88vw] [perspective:1800px]">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setFlipped((f) => !f)}
        onKeyDown={handleKeyDown}
        className="relative h-full w-full cursor-pointer [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.44,0,0.18,1)]"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div className="absolute inset-0 overflow-hidden rounded-[36px] bg-white-1 p-2 shadow-[0_30px_80px_-30px_rgba(50,50,50,0.3)] [backface-visibility:hidden]">
          <div className="relative h-full w-full overflow-hidden rounded-[28px]">
            <Image
              src="/framer/profile-card2.png"
              alt={profile.fullName}
              fill
              priority
              sizes="400px"
              className="object-cover"
            />

            {/* Name shown on the front of the card */}
            <span className="absolute bottom-4 left-5 font-serif text-[3.4rem] italic leading-none text-white-1 drop-shadow-sm">
              {profile.name}
            </span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col rounded-[36px] bg-white-1 p-7 shadow-[0_30px_80px_-30px_rgba(50,50,50,0.3)] ring-1 ring-grey-2 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Image
            src="/framer/framer-icon.png"
            alt=""
            width={64}
            height={64}
            className="absolute -right-2 -top-2 h-16 w-16 rotate-6"
          />

          {/* Experience */}
          <div className="flex flex-col gap-1.5">
            <span className="text-hand-2 text-blue-1">
              {profile.experienceLabel}
            </span>

            <div className="flex flex-col gap-0.5">
              {profile.experience.map((x) => (
                <span key={x} className="text-hand-1 text-black-1">
                  {x}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mt-7 flex flex-col gap-1.5">
            <span className="text-hand-2 text-blue-1">
              {profile.toolsLabel}
            </span>

            <div className="flex flex-col gap-0.5">
              {profile.tools.map((tool, i) => (
                <span key={tool} className="text-hand-1 text-black-1">
                  {i + 1}. {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Contact button */}
          <Link
            href={profile.cta.href}
            onClick={(e) => e.stopPropagation()}
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-black-1 px-5 py-2.5 text-body-1 text-white-1 transition-colors hover:brightness-110"
          >
            {profile.cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
}