"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

/**
 * Adds the `.in` class once the element scrolls into view (matching the
 * prototype's IntersectionObserver). The `.reveal` transition is guarded by
 * prefers-reduced-motion in globals.css, so no motion runs for those users.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
