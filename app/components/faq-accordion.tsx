"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "../data/content";

const EASE = [0.44, 0, 0.18, 1] as const;

function Toggle({ open }: { open: boolean }) {
  return (
    <span
      className={`relative flex h-7 w-7 shrink-0 items-center justify-center text-blue-1 transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.18,1)] ${
        open ? "rotate-45" : ""
      }`}
    >
      <span className="absolute h-[2.5px] w-4 rotate-45 rounded-full bg-current" />
      <span className="absolute h-[2.5px] w-4 -rotate-45 rounded-full bg-current" />
    </span>
  );
}

export function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className="flex w-full max-w-[820px] flex-col gap-3">
      {faqs.items.map((f, i) => {
        const isOpen = open === i;
        return (
          <motion.div
            key={f.q}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 150, damping: 20, delay: i * 0.05 }}
            className="overflow-hidden rounded-[20px] bg-white-2 ring-1 ring-grey-2"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="flex items-center gap-3">
                <span className="font-hand text-[1.6rem] leading-none text-blue-1">?</span>
                <span className="text-body-3 text-black-1">{f.q}</span>
              </span>
              <Toggle open={isOpen} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-body-2 text-grey-3">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
