"use client";

import { useReducedMotion } from "framer-motion";

interface MarqueeStripProps {
  items: string[];
  className?: string;
  accentColor?: string;
  bgColor?: string;
  textColor?: string;
}

/**
 * Continuous horizontal marquee strip using CSS animation.
 * One per page max (Taste rule).
 * CSS animation runs off the main thread — always smooth.
 * FIX: no inline <style> tag (unreliable in Next.js App Router).
 * Animation defined in globals.css as @keyframes marquee-scroll.
 */
export function MarqueeStrip({
  items,
  className,
  accentColor = "#FF7F00",
  bgColor = "#131627",
  textColor = "#F0F2FF",
}: MarqueeStripProps) {
  const shouldReduce = useReducedMotion();
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div
      className={`overflow-hidden py-4 ${className ?? ""}`}
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: shouldReduce ? "none" : "marquee-scroll 32s linear infinite",
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              paddingLeft: "32px",
              paddingRight: "32px",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-barlow), sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                whiteSpace: "nowrap",
                color: textColor,
              }}
            >
              {item}
            </span>
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: accentColor,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
