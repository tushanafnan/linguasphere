import React from "react";
import { useInView } from "../hooks/useInView";

/**
 * Reveal component - scroll-triggered fade-in animation
 * Animates element from transparent/bottom to visible when it enters viewport
 * Respects prefers-reduced-motion setting for accessibility
 * @param children - Content to animate
 * @param delay - Animation delay in milliseconds
 * @param className - Additional CSS classes
 */
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  delay = 0,
  className = "",
  children,
}) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out 
                  motion-reduce:transition-none motion-reduce:transform-none
                  ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                  ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
