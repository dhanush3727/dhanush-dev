"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Fades content in when it scrolls into view.
 *
 * Fail-safe by design: content renders VISIBLE by default and is only
 * hidden once JS has confirmed it can observe the element. If JS is
 * disabled, IntersectionObserver is unsupported, or the observer never
 * fires, the content still shows.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // `armed` = JS took over and may hide content before revealing it.
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    // No observer support -> never hide anything.
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Respect reduced-motion: show immediately, no transition.
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    setArmed(true);

    // If it's already in view on mount, reveal on the next frame.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    // Safety net: if something goes wrong, reveal after 1s regardless.
    const timeout = window.setTimeout(() => setVisible(true), 1000);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, []);

  const hidden = armed && !visible;

  return (
    <div
      ref={ref}
      className={cn("motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out", className)}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(20px)" : "none",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
