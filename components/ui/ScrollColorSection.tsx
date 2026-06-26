"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollColorSectionProps {
  fromColor: string;
  toColor: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps children in a container whose background color
 * interpolates from `fromColor` to `toColor` as the user
 * scrolls through it.
 */
export function ScrollColorSection({
  fromColor,
  toColor,
  children,
  className,
}: ScrollColorSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    [fromColor, toColor]
  );

  return (
    <motion.div ref={ref} style={{ backgroundColor }} className={className}>
      {children}
    </motion.div>
  );
}
