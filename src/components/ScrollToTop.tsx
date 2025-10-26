import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // If navigating to a hash, scroll to the element with navbar offset
    if (hash && hash.length > 1) {
      const id = decodeURIComponent(hash.slice(1));
      // Wait a tick so the element is in the DOM
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          const cssH =
            parseInt(
              getComputedStyle(document.documentElement)
                .getPropertyValue("--nav-height")
                .trim()
                .replace("px", "")
            ) || 64;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset - (cssH + 8);
          window.scrollTo({
            top: y,
            behavior: prefersReduced ? "auto" : "smooth",
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: prefersReduced ? "auto" : "smooth",
          });
        }
      });
      return;
    }

    // Otherwise scroll to top on route change
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
