import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect if an element is in viewport
 * Used for scroll-triggered animations and lazy loading
 * @param options - IntersectionObserver options
 * @returns [ref, inView] tuple
 */
export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, options ?? { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return [ref, inView] as const;
}
