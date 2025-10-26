import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";

/* ----------------------
   Tiny in-view hook + Reveal (no libs)
-----------------------*/
function useInView(options?: IntersectionObserverInit) {
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
    }, options ?? { rootMargin: "0px 0px -10% 0px", threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return [ref, inView] as const;
}

interface RevealProps {
  children: React.ReactNode; // 👈 must add this line
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({
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

/* ----------------------
   Hero
-----------------------*/
const Hero: React.FC = () => {
  // Optional SPA nav helper (works even if you don't use react-router)
  const spaNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // Let meta/ctrl/shift clicks open new tabs normally
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
      return;
    e.preventDefault();
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id='hero'
      role='region'
      aria-labelledby='hero-heading'
      className='
        relative isolate
        min-h-[100svh] min-h-screen
        flex items-center
        pt-[calc(var(--nav-height,64px)+0px)]
        font-sans
      '
    >
      {/* ===== Background video + scrims ===== */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload='auto'
          className='absolute inset-0 h-full w-full object-cover motion-reduce:hidden'
          aria-hidden='true'
        >
          {/* FIX: assets in /public are served at the root. Use /baby.mp4, not /public/baby.mp4 */}
          <source
            src='https://github.com/tushanafnan/linguasphere/releases/download/1.0.1/baby.mp44'
            type='video/mp4'
          />
        </video>

        {/* Fallback image (shown if reduced-motion or video fails) */}
        <img
          src='https://images.unsplash.com/photo-1606761568499-6d2451b23c55?q=80&w=1920&auto=format&fit=crop'
          alt=''
          className='absolute inset-0 h-full w-full object-cover hidden motion-reduce:block'
          loading='eager'
          decoding='async'
        />

        {/* Top-to-bottom scrim for readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/40' />
        {/* Subtle radial glow for modern depth */}
        <div
          className='absolute inset-0'
          aria-hidden='true'
          style={{
            background:
              "radial-gradient(1200px 600px at 50% 10%, rgba(99,102,241,0.16), transparent)",
          }}
        />
      </div>

      {/* ===== Content ===== */}
      <div className='relative z-10 mx-auto max-w-screen-xl px-6'>
        <Reveal className='text-center'>
          <span className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white/90 ring-1 ring-white/15 backdrop-blur'>
            Live • 1‑to‑1 & Small Groups • Ages 4–16
          </span>
        </Reveal>

        <Reveal delay={70} className='mt-5'>
          <h1
            id='hero-heading'
            className='
              text-center font-serif font-bold tracking-tight text-white leading-[1.05]
              text-[clamp(2.2rem,6vw,4rem)]
            '
          >
            Live English Tutoring with a Native UK Teacher
          </h1>
        </Reveal>

        <Reveal delay={130} className='mt-4 md:mt-6'>
          <p
            className='
              mx-auto max-w-2xl text-center text-white/90 leading-relaxed
              text-[clamp(1.05rem,1.6vw,1.25rem)]
            '
          >
            Personalized 1‑to‑1 and small‑group lessons for ages 4–16. Engaging,
            structured, and designed to build real confidence in every student.
          </p>
        </Reveal>

        <Reveal delay={190}>
          <div className='mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
            {/* Primary CTA (SPA-safe) */}
            <a
              href='/plans'
              onClick={(e) => spaNav(e, "/plans")}
              className='
                inline-flex items-center justify-center gap-2
                rounded-full px-7 sm:px-8 py-3
                font-semibold
                text-slate-900
                bg-white hover:bg-white/90
                shadow-sm hover:shadow
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
                transition
                text-[clamp(1rem,1.2vw,1.0625rem)]
              '
            >
              Start Learning <FiArrowRight />
            </a>

            {/* Secondary CTA */}
            <a
              href='https://youtu.be/GG7To2NP1I4'
              target='_blank'
              rel='noopener noreferrer'
              className='
                inline-flex items-center justify-center gap-2
                rounded-full px-7 sm:px-8 py-3
                font-semibold
                text-white
                ring-1 ring-white/40
                bg-white/10 hover:bg-white/15
                backdrop-blur
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300
                transition
                text-[clamp(1rem,1.2vw,1.0625rem)]
              '
            >
              <FiPlay /> Watch Video
            </a>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator (anchors respect navbar height via scroll-padding-top) */}
      <a
        href='#about'
        aria-label='Scroll to About'
        className='
          absolute left-1/2 -translate-x-1/2 bottom-6 z-10 group
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-xl
        '
      >
        <div className='h-14 w-8 rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-sm relative overflow-hidden'>
          <span className='absolute left-1/2 top-3 h-3 w-1 -translate-x-1/2 rounded-full bg-white/90 animate-bounce' />
        </div>
      </a>
    </section>
  );
};

export default Hero;
