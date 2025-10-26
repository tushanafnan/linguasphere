import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ----------------------
   Tiny in-view hook + Reveal wrapper (no libs)
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

/* ----------------------
   About Section
-----------------------*/
const AboutSection: React.FC = () => {
  const stats = [
    { k: "18+", v: "Years Experience" },
    { k: "4–16", v: "Age Range" },
    { k: "1:1", v: "Personal Tutoring" },
    { k: "DBS✓", v: "Vetted Tutors" },
  ];

  const subjects = [
    "Maths",
    "English",
    "Science",
    "11+ Preparation",
    "GCSE Prep",
    "Homework Clinics",
    "Creative Writing",
    "Reading Clubs",
    "Times Tables",
    "Pre-A-Level Skills",
  ];

  const benefits = [
    "One-to-One Lessons",
    "Small-Group Learning",
    "Easy Access Online",
    "Consistent Structure",
    "Targeted Improvement",
    "Independent Learning",
    "Specialist Tutors",
    "No Falling Behind",
  ];

  return (
    <section
      id='about'
      role='region'
      aria-labelledby='about-heading'
      className='relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-28 overflow-hidden font-sans'
    >
      {/* Decorative background blob */}
      <div
        className='pointer-events-none absolute inset-0 -z-10 flex justify-center opacity-30 blur-3xl'
        aria-hidden='true'
      >
        <div className='h-[400px] w-[400px] rounded-full bg-indigo-300/40 motion-safe:animate-pulse' />
      </div>

      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        <Reveal className='text-center mb-12 md:mb-16'>
          <h2
            id='about-heading'
            className='font-serif font-bold tracking-tight text-slate-800
                       text-[clamp(2rem,5vw,3rem)] leading-[1.1]'
          >
            Our Story
          </h2>
        </Reveal>

        {/* 
          Mobile-first stack (1 col). On ≥ md: 2 columns with the image on the right.
          We also insert a *mobile-only* inline image block inside the text column to
          keep the picture in the middle of content on small screens.
        */}
        <div className='grid gap-10 md:gap-16 md:grid-cols-2 items-start'>
          {/* Text Column */}
          <div className='flex flex-col gap-6'>
            <Reveal>
              <h3
                className='text-indigo-700 font-bold leading-tight
                           text-[clamp(1.25rem,2.2vw,1.5rem)]'
              >
                Empowering Students Through Online Learning Excellence
              </h3>
            </Reveal>

            <Reveal delay={60}>
              <p className='text-slate-700 leading-relaxed text-[clamp(1rem,1.4vw,1.125rem)]'>
                Linguasphere has over <strong>18 years</strong> of experience
                helping learners aged 4–16 thrive through engaging, face-to-face
                online lessons. Our mission is to make education accessible,
                structured, and deeply inspiring—from early reading to GCSE
                preparation.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className='text-slate-700 leading-relaxed text-[clamp(1rem,1.4vw,1.125rem)]'>
                Each tutor is{" "}
                <span className='font-semibold'>
                  hand-picked and DBS-checked
                </span>
                , delivering personalized sessions designed to build confidence
                and long-term learning success.
              </p>
            </Reveal>

            {/* Stats */}
            <ul className='grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2'>
              {stats.map((i, idx) => (
                <Reveal key={i.v} delay={160 + idx * 80}>
                  <li
                    className='rounded-xl bg-white p-4 text-center border border-slate-100
                               shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                               transition-transform duration-500
                               hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)]
                               motion-reduce:hover:translate-y-0'
                  >
                    <div
                      className='font-bold text-indigo-700
                                 text-[clamp(1.5rem,2.4vw,1.875rem)]'
                    >
                      {i.k}
                    </div>
                    <div className='mt-1 text-xs text-slate-500'>{i.v}</div>
                  </li>
                </Reveal>
              ))}
            </ul>

            {/* MOBILE-ONLY inline image block (sits in the middle of the content) */}
            <Reveal delay={140} className='md:hidden'>
              <figure
                className='relative mt-2 rounded-3xl overflow-hidden border border-slate-100
                           ring-1 ring-slate-100/70 bg-white
                           shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                           transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(0,0,0,0.12)]
                           motion-reduce:hover:translate-y-0'
              >
                <div className='aspect-[4/3] w-full'>
                  <img
                    src='https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600'
                    alt='Online tutoring session between teacher and child'
                    className='h-full w-full object-cover'
                    loading='lazy'
                    decoding='async'
                    sizes='100vw'
                  />
                </div>
                <figcaption className='absolute top-3 left-3 bg-white/85 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-700 shadow'>
                  Online • Safe • Interactive
                </figcaption>
              </figure>
            </Reveal>

            {/* Subjects */}
            <div className='pt-4'>
              <Reveal delay={160}>
                <h4 className='text-slate-900 font-semibold mb-2 text-[clamp(1rem,1.2vw,1.125rem)]'>
                  Our Tutoring Subjects
                </h4>
              </Reveal>
              <ul className='flex flex-wrap gap-2'>
                {subjects.map((item, idx) => (
                  <Reveal key={item} delay={200 + idx * 30}>
                    <li>
                      <span
                        className='inline-flex select-none items-center px-3 py-1 text-sm rounded-full
                                   border border-indigo-100 bg-indigo-50 text-indigo-700
                                   transition-transform duration-300
                                   hover:bg-indigo-100 hover:scale-[1.03] active:scale-[0.98]
                                   motion-reduce:transform-none'
                      >
                        {item}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className='pt-6'>
              <h4 className='sr-only'>Key benefits</h4>
              <ul className='grid sm:grid-cols-2 gap-3'>
                {benefits.map((b, idx) => (
                  <Reveal key={b} delay={200 + idx * 50}>
                    <li className='flex items-center gap-2 text-slate-700'>
                      <svg
                        className='h-5 w-5 text-indigo-600 shrink-0'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        aria-hidden='true'
                        focusable='false'
                      >
                        <path d='M20 6L9 17l-5-5' />
                      </svg>
                      <span className='text-[clamp(0.95rem,1.2vw,1.05rem)]'>
                        {b}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <Reveal delay={220}>
              <div className='pt-8 flex flex-wrap gap-4'>
                <a
                  href='#book-trial'
                  className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow transition
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
                >
                  Book a Free Trial
                </a>
                <Link
                  to='/contact'
                  className='border border-slate-300 px-6 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 transition
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className='text-sm text-slate-600 leading-relaxed pt-2'>
                Our free assessments in Maths, English, and Science reveal your
                child’s strengths and areas to improve—helping you make
                confident choices for their learning journey.
              </p>
            </Reveal>
          </div>

          {/* Image Column (desktop/tablet only) */}
          <div className='hidden md:block'>
            <Reveal delay={120}>
              <div
                className='relative rounded-3xl overflow-hidden border border-slate-100 
                           ring-1 ring-slate-100/70 bg-white
                           shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                           transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(0,0,0,0.12)]
                           motion-reduce:hover:translate-y-0'
              >
                <div className='aspect-[3/2] w-full'>
                  <img
                    src='https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600'
                    alt='Online tutoring session between teacher and child'
                    className='h-full w-full object-cover'
                    loading='lazy'
                    decoding='async'
                    sizes='(min-width: 1024px) 560px, 50vw'
                  />
                </div>

                <div className='absolute top-4 left-4 bg-white/85 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold text-indigo-700 shadow'>
                  Online • Safe • Interactive
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
