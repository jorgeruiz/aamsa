"use client";

import { motion, useReducedMotion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import React from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /**
   * true  → animates on mount (use for above-the-fold / hero content)
   * false → animates when scrolled into view (default for body sections)
   */
  onMount?: boolean;
}

/**
 * Reveals words one by one with a slide-up from overflow-hidden mask.
 * Emil principle: only transform + opacity, strong ease-out curve.
 *
 * KEY FIX: above-fold hero content must use animate (onMount=true),
 * NOT whileInView — IntersectionObserver doesn't re-fire for elements
 * that are already visible when the observer initializes.
 */
export function WordReveal({
  text,
  className,
  style,
  delay = 0,
  as: Tag = "h1",
  onMount = false,
}: WordRevealProps) {
  const shouldReduce = useReducedMotion();
  const controls = useAnimation();
  const words = text.split(" ");

  // For hero (onMount=true): trigger as soon as component mounts on client
  useEffect(() => {
    if (!onMount || shouldReduce) return;
    controls.start("visible");
  }, [onMount, shouldReduce, controls]);

  const variants = {
    hidden: { y: "115%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: delay + i * 0.075,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  return (
    <Tag className={className} style={style} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden" }} aria-hidden="true">
          <motion.span
            style={{ display: "inline-block" }}
            custom={i}
            variants={variants}
            initial={shouldReduce ? false : "hidden"}
            // onMount=true → controlled by useAnimation (triggers in useEffect)
            // onMount=false → whileInView (scroll-triggered)
            {...(onMount
              ? { animate: controls }
              : {
                  whileInView: "visible",
                  viewport: { once: true, margin: "-60px" },
                })}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
