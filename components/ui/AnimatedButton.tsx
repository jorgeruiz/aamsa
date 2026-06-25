"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/animations/MagneticButton";
import React from "react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: "_blank";
  rel?: string;
  ariaLabel?: string;
  magnetic?: boolean;
}

/**
 * Button with visible, motivated hover + tap animations.
 * Primary: background brightens + subtle lift on hover, press-down on tap.
 * Secondary/ghost: border reveals orange, text shifts color.
 * Emil: scale from 0.97 on active (physical press feel).
 */
export function AnimatedButton({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
  ariaLabel,
  magnetic = false,
}: AnimatedButtonProps) {
  const shouldReduce = useReducedMotion();

  const button = (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      whileHover={
        shouldReduce
          ? {}
          : variant === "primary"
          ? { y: -3, scale: 1.02 }
          : { y: -2 }
      }
      whileTap={shouldReduce ? {} : { scale: 0.96, y: 0 }}
      transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
      className={className}
      style={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}
    >
      {children}
    </motion.a>
  );

  if (magnetic && !shouldReduce) {
    return <MagneticButton strength={0.22}>{button}</MagneticButton>;
  }

  return button;
}
