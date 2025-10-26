import React, { useEffect, useRef, useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

/* ------------------------------------
   Tiny in‑view hook + Reveal (no libs)
------------------------------------- */
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
    }, options ?? { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
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

/* ------------------------------------
   Data
------------------------------------- */
const quickIcons = [
  { icon: FiPhone, label: "Online guidance" },
  { icon: FiMapPin, label: "Experienced facilitators" },
  { icon: FiMail, label: "Proven outcomes" },
  { icon: FiClock, label: "Native teachers" },
  { icon: FiMapPin, label: "Interactive learning" },
  { icon: FiClock, label: "Small-class courses" },
];

/* ------------------------------------
   Component
------------------------------------- */
export default function Feature() {
  return (
    <section
      id='Feature'
      role='region'
      aria-labelledby='features-heading'
      className='relative py-20 md:py-28 px-6 bg-white w-full flex justify-center items-center overflow-hidden font-sans'
    >
      {/* Modern background: soft grid + blobs (decorative) */}
      <div
        className='pointer-events-none absolute inset-0 -z-10 opacity-40'
        aria-hidden='true'
      >
        {/* dotted grid */}
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e5e7eb_1px,transparent_1px)] [background-size:18px_18px]' />
        {/* soft blobs */}
        <div className='absolute -top-32 right-1/3 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl' />
        <div className='absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-fuchsia-200/25 blur-3xl' />
      </div>

      <div className='max-w-7xl mx-auto w-full'>
        {/* Heading */}
        <Reveal className='text-center max-w-4xl mx-auto mb-12 md:mb-14'>
          <h2
            id='features-heading'
            className='font-serif font-bold tracking-tight 
                       text-[clamp(2rem,5vw,3rem)] leading-[1.06]
                       bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600'
          >
            Learning Experience
          </h2>
          <p className='mt-4 text-slate-600 text-[clamp(1rem,1.25vw,1.125rem)]'>
            Live, interactive, and measurable—designed to help learners progress
            with confidence.
          </p>
        </Reveal>

        {/* 1) ICON CHIPS — sleeker, animated */}
        <Reveal className='mx-auto mb-12 md:mb-16 max-w-5xl'>
          <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4'>
            {quickIcons.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i}>
                  <div
                    tabIndex={0}
                    className='group flex items-center gap-3 rounded-2xl p-[1px]
                               bg-gradient-to-br from-indigo-500/20 via-indigo-300/10 to-fuchsia-500/20
                               hover:from-indigo-500/30 hover:to-fuchsia-500/30
                               transition
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
                  >
                    <div
                      className='flex items-center gap-3 w-full rounded-[1rem]
                                 bg-white/80 backdrop-blur px-3.5 py-3 sm:px-4 sm:py-3
                                 ring-1 ring-indigo-100/60 shadow-sm
                                 transition-transform duration-300
                                 group-hover:-translate-y-0.5 group-focus:-translate-y-0.5'
                    >
                      <span
                        className='inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center 
                                   rounded-xl bg-white ring-1 ring-indigo-100 shadow-sm'
                        aria-hidden='true'
                      >
                        <Icon className='h-5 w-5 sm:h-6 sm:w-6 text-indigo-700' />
                      </span>
                      <span className='text-[clamp(0.9rem,1vw,1rem)] font-medium text-slate-800 leading-tight'>
                        {item.label}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* 2) MODERN FEATURE CARDS — unified height, glassy, animated */}
        <div className='grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch'>
          {/* Card 1 */}
          <Reveal>
            <article
              className='group relative h-full min-h-[360px] md:min-h-[380px] lg:min-h-[420px]
                         rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/20 via-indigo-300/10 to-fuchsia-500/20
                         hover:from-indigo-500/30 hover:to-fuchsia-500/30 transition'
            >
              <div
                className='flex h-full flex-col rounded-[1.45rem] border border-slate-200/80
                           bg-white/80 backdrop-blur p-6 sm:p-8
                           shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                           transition-transform duration-500
                           group-hover:-translate-y-1 group-hover:shadow-[0_20px_46px_rgba(0,0,0,0.10)]
                           motion-reduce:transform-none'
              >
                <h3 className='text-slate-900 font-semibold text-[clamp(1.25rem,2vw,1.5rem)]'>
                  100% Native‑English Teachers
                </h3>
                <p className='mt-3 text-slate-700 leading-relaxed text-[clamp(1rem,1.1vw,1.0625rem)]'>
                  Certified instructors from native‑English countries with deep
                  experience in children’s English—clear pronunciation, cultural
                  depth, and age‑appropriate pedagogy.
                </p>
                <ul className='mt-4 space-y-2 text-slate-700'>
                  {[
                    "Mother‑tongue clarity with real‑world context.",
                    "Structured lessons with clear objectives.",
                    "Ongoing assessment and precise parent feedback.",
                  ].map((line) => (
                    <li key={line} className='flex gap-2'>
                      <span
                        className='mt-[0.6rem] h-2 w-2 rounded-full bg-indigo-500'
                        aria-hidden='true'
                      />
                      <span className='text-[clamp(0.95rem,1.05vw,1rem)]'>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={80}>
            <article
              className='group relative h-full min-h-[360px] md:min-h-[380px] lg:min-h-[420px]
                         rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/20 via-indigo-300/10 to-fuchsia-500/20
                         hover:from-indigo-500/30 hover:to-fuchsia-500/30 transition'
            >
              <div
                className='flex h-full flex-col rounded-[1.45rem] border border-slate-200/80
                           bg-white/80 backdrop-blur p-6 sm:p-8
                           shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                           transition-transform duration-500
                           group-hover:-translate-y-1 group-hover:shadow-[0_20px_46px_rgba(0,0,0,0.10)]
                           motion-reduce:transform-none'
              >
                <h3 className='text-slate-900 font-semibold text-[clamp(1.25rem,2vw,1.5rem)]'>
                  Interactive Learning — “Purple Adventure”
                </h3>
                <p className='mt-3 text-slate-700 leading-relaxed text-[clamp(1rem,1.1vw,1.0625rem)]'>
                  Mission‑based journeys blend role‑play, digital storybooks,
                  and badges. Weekly themes turn listening, speaking, reading,
                  and writing into purposeful challenges.
                </p>
                <ul className='mt-4 space-y-2 text-slate-700'>
                  {[
                    "Role‑play builds real communication skills.",
                    "Storybooks add comprehension & fluency tasks.",
                    "Badges and missions keep motivation high.",
                  ].map((line) => (
                    <li key={line} className='flex gap-2'>
                      <span
                        className='mt-[0.6rem] h-2 w-2 rounded-full bg-indigo-500'
                        aria-hidden='true'
                      />
                      <span className='text-[clamp(0.95rem,1.05vw,1rem)]'>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={160}>
            <article
              className='group relative h-full min-h-[360px] md:min-h-[380px] lg:min-h-[420px]
                         rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/20 via-indigo-300/10 to-fuchsia-500/20
                         hover:from-indigo-500/30 hover:to-fuchsia-500/30 transition'
            >
              <div
                className='flex h-full flex-col rounded-[1.45rem] border border-slate-200/80
                           bg-white/80 backdrop-blur p-6 sm:p-8
                           shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                           transition-transform duration-500
                           group-hover:-translate-y-1 group-hover:shadow-[0_20px_46px_rgba(0,0,0,0.10)]
                           motion-reduce:transform-none'
              >
                <h3 className='text-slate-900 font-semibold text-[clamp(1.25rem,2vw,1.5rem)]'>
                  Small‑Class Courses (4–6 Learners)
                </h3>
                <p className='mt-3 text-slate-700 leading-relaxed text-[clamp(1rem,1.1vw,1.0625rem)]'>
                  Tight groups guarantee airtime—each 45‑minute class ensures
                  every learner speaks, with personal feedback and flexible
                  scheduling.
                </p>
                <ul className='mt-4 space-y-2 text-slate-700'>
                  {[
                    "Guaranteed participation & high engagement.",
                    "Feedback tailored to style, pace, and goals.",
                    "Optional 1‑to‑1 add‑ons and teacher choice.",
                  ].map((line) => (
                    <li key={line} className='flex gap-2'>
                      <span
                        className='mt-[0.6rem] h-2 w-2 rounded-full bg-indigo-500'
                        aria-hidden='true'
                      />
                      <span className='text-[clamp(0.95rem,1.05vw,1rem)]'>
                        {line}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        </div>

        {/* 3) CTA */}
        <Reveal delay={220}>
          <div className='text-center mt-12 md:mt-16'>
            <a
              href='#book-trial'
              className='inline-flex items-center justify-center rounded-full 
                         bg-gradient-to-r from-indigo-600 to-fuchsia-600 
                         px-7 sm:px-8 py-3 text-white font-semibold shadow
                         hover:from-indigo-600/90 hover:to-fuchsia-600/90
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
            >
              Book Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
