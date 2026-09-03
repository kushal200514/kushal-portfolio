"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE = [0.44, 0, 0.18, 1] as const;

type RevealVariant = "up" | "fade" | "scale" | "left" | "right" | "blur";

const build = (variant: RevealVariant): Variants => {
  const hidden: Record<string, number | string> = { opacity: 0 };
  switch (variant) {
    case "up":
      hidden.y = 28;
      break;
    case "left":
      hidden.x = -36;
      break;
    case "right":
      hidden.x = 36;
      break;
    case "scale":
      hidden.scale = 0.94;
      break;
    case "blur":
      hidden.y = 16;
      hidden.filter = "blur(10px)";
      break;
  }
  const show: Record<string, number | string> = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  };
  return { hidden, show };
};

type Common = { className?: string; children?: React.ReactNode };

export function Reveal({
  variant = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.35,
  once = true,
  className,
  children,
}: Common & {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={build(variant)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  stagger = 0.1,
  delayChildren = 0,
  amount = 0.25,
  once = true,
  className,
  children,
}: Common & {
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -6% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  variant = "up",
  duration = 0.65,
  spring = false,
  className,
  children,
}: Common & { variant?: RevealVariant; duration?: number; spring?: boolean }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  const v = build(variant);
  return (
    <motion.div
      className={className}
      variants={{
        hidden: v.hidden,
        show: {
          ...v.show,
          transition: spring
            ? { type: "spring", stiffness: 150, damping: 20 }
            : { duration, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
