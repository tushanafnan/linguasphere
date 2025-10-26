import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

/**
 * Ultra‑modern Navbar (mobile drawer fix)
 * - Manual SPA navigation (pushState + popstate)
 * - Active link highlight
 * - Drawer: rendered ONLY when open (no default-open issues)
 * - Overlay click‑off, ESC to close, auto-close on ≥md
 * - Glassy transparency reacts to scroll/open
 * - Prevents headings hidden behind fixed nav (CSS var + scroll-padding-top)
 */

const NAV_ITEMS = [
  { label: "About", path: "/about" },
  { label: "Features", path: "/features" },
  { label: "Plans", path: "/subscription" },
  { label: "Student Login", path: "/login" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);

  const [isOpen, setIsOpen] = useState(false); // drawer state
  const [activePath, setActivePath] = useState("/"); // SSR-safe initial
  const [scrolled, setScrolled] = useState(false); // for glass bg

  /* ---------- Mount/init (SSR‑safe) ---------- */

  // Initialize activePath only after mount (avoid hydration mismatches)
  useEffect(() => {
    setActivePath(window.location.pathname + window.location.hash);
  }, []);

  // Force closed on mount (prevents “default open” restores)
  useEffect(() => {
    setIsOpen(false);
  }, []);

  // React to browser navigation; ESC closes drawer
  useEffect(() => {
    const onPop = () => {
      setActivePath(window.location.pathname + window.location.hash);
      setIsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("popstate", onPop);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Close drawer when crossing the md breakpoint (≥768px)
  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsOpen(false);
    if (mq.matches) setIsOpen(false);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  // Glass transparency based on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Measure nav height -> CSS var + scroll-padding-top
  useEffect(() => {
    const setVars = () => {
      const h = navRef.current?.offsetHeight ?? 64;
      document.documentElement.style.setProperty("--nav-height", `${h}px`);
      document.documentElement.style.setProperty(
        "scroll-padding-top",
        `calc(${h}px + 8px)`
      );
    };
    setVars();
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(setVars)
        : null;
    if (ro && navRef.current) ro.observe(navRef.current);
    window.addEventListener("resize", setVars);
    return () => {
      window.removeEventListener("resize", setVars);
      ro?.disconnect();
    };
  }, []);

  /* ---------- Navigation helper (anchors with offset) ---------- */
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    setIsOpen(false);

    const hash = path.includes("#") ? path.split("#")[1] : "";
    if (hash) {
      const el = document.getElementById(hash);
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
        window.scrollTo({ top: y, behavior: "smooth" });
        return;
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (path: string) => activePath === path;

  // Reactive glass background
  const glass = isOpen
    ? "bg-white/90 backdrop-blur-md shadow-md"
    : scrolled
    ? "bg-white/80 backdrop-blur-md shadow-sm"
    : "bg-white/45 backdrop-blur-sm";

  return (
    <nav
      ref={navRef}
      role='navigation'
      aria-label='Main'
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/20 ${glass}`}
    >
      {/* Decorative gradient underline */}
      <div className='pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent' />

      <div className='mx-auto max-w-screen-xl px-4 sm:px-6'>
        <div className='flex h-[64px] md:h-[72px] items-center justify-between'>
          {/* Brand */}
          <button
            onClick={() => navigate("/")}
            className='group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl'
            aria-label='Go to home'
          >
            <img
              src='https://res.cloudinary.com/dk4p31whc/image/upload/v1760330547/logo_aisymv.png'
              alt='Linguasphere Logo'
              className='h-9 w-auto md:h-10 object-contain'
              loading='eager'
              decoding='async'
              fetchPriority='high'
            />
            <span className='font-serif font-bold text-slate-900 text-[clamp(1.1rem,2vw,1.35rem)] tracking-tight'>
              Linguasphere
            </span>
          </button>

          {/* Desktop menu */}
          <div className='hidden md:flex items-center gap-1'>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  aria-current={active ? "page" : undefined}
                  className={`
                    relative px-3 py-2 rounded-full cursor-pointer
                    text-[clamp(0.95rem,1vw,1rem)]
                    transition-colors
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
                    ${
                      active
                        ? "text-slate-900"
                        : "text-slate-600 hover:text-slate-900"
                    }
                  `}
                >
                  <span
                    className={`
                      pointer-events-none absolute inset-0 rounded-full -z-10 transition
                      ${active ? "bg-slate-900/8" : "hover:bg-slate-900/5"}
                    `}
                  />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className='hidden md:block'>
            <button
              onClick={() => navigate("/plans")}
              className='inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5
                         font-semibold text-white text-[clamp(0.95rem,1vw,1rem)]
                         bg-gradient-to-r from-indigo-600 to-fuchsia-600
                         shadow-sm hover:from-indigo-600/90 hover:to-fuchsia-600/90
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition'
            >
              Book Now
            </button>
          </div>

          {/* Mobile toggle */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label='Toggle menu'
              aria-controls='mobile-menu'
              aria-expanded={isOpen}
              className='inline-flex items-center justify-center rounded-xl p-2
                         text-slate-700 hover:text-slate-900 hover:bg-slate-900/5
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition'
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile overlay + drawer (ONLY rendered when open) ===== */}
      {isOpen && (
        <>
          {/* Overlay (click to close) */}
          <div
            className='md:hidden fixed inset-0 z-40 opacity-100 pointer-events-auto'
            aria-hidden='true'
            onClick={() => setIsOpen(false)}
            style={{ top: "var(--nav-height, 64px)" }} // keep nav clickable
          >
            <div className='absolute inset-0 bg-slate-900/25 backdrop-blur-sm' />
          </div>

          {/* Drawer (scrollable) */}
          <div
            id='mobile-menu'
            className='md:hidden fixed left-0 right-0 z-50 translate-y-0
                       bg-white/92 backdrop-blur-md shadow-[0_12px_32px_rgba(0,0,0,0.12)]
                       border-b border-white/30'
            style={{
              top: "var(--nav-height, 64px)",
              maxHeight: "calc(100svh - var(--nav-height, 64px))",
              overflowY: "auto",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <div className='mx-auto max-w-screen-xl px-4 sm:px-6 py-2'>
              <ul className='flex flex-col divide-y divide-slate-200/70'>
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <li key={item.path}>
                      <button
                        onClick={() => navigate(item.path)}
                        aria-current={active ? "page" : undefined}
                        className={`w-full text-left py-3.5 text-[clamp(1rem,3.8vw,1.075rem)] transition-colors
                                   ${
                                     active
                                       ? "text-slate-900"
                                       : "text-slate-700 hover:text-slate-900"
                                   }
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
                <li className='pt-4 pb-2'>
                  <button
                    onClick={() => navigate("/plans")}
                    className='w-full inline-flex items-center justify-center rounded-xl px-5 py-3
                               font-semibold text-white text-[clamp(1rem,3.6vw,1.0625rem)]
                               bg-gradient-to-r from-indigo-600 to-fuchsia-600
                               shadow-sm hover:from-indigo-600/90 hover:to-fuchsia-600/90
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition'
                  >
                    Book Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
