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
    { k: "18+", v: "年+教学经验" },
    { k: "4–16", v: "岁适用年龄段" },
    { k: "1:1", v: "定制一对一课程" },
    { k: "DBS✓", v: "背景审核认证师资" },
  ];

  const subjects = [
    "English（英语）",
    "11+ Preparation（11+考试备考）",
    "GCSE Prep（GCSE备考）",
    "Homework Clinics（作业辅导）",
    "Creative Writing（创意写作）",
    "Reading Clubs（阅读俱乐部）",
    "Times Tables（乘法表）",
    "Pre-A-Level Skills（预备班技能）",
    "IELTS Basics（雅思基础）",
    "IELTS Junior（青少雅思）",
    "TOEFL Junior（青少托福）",
    "Cambridge English（剑桥英语）",
    "Spoken English（英语口语）",
  ];

  const benefits = [
    "一对一专属课程",
    "小班互动学习",
    "在线轻松参与",
    "结构清晰有条理",
    "针对性提升能力",
    "培养独立学习习惯",
    "资深专业导师团队",
    "不再跟不上进度",
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
            品牌故事
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
                用优质在线学习，助力孩子成长
              </h3>
            </Reveal>

            <Reveal delay={60}>
              <p className='text-slate-700 leading-relaxed text-[clamp(1rem,1.4vw,1.125rem)]'>
                Linguasphere 拥有超过 18
                年的教学经验，配备背景审核认证师资，专注于为 4–16
                岁孩子提供高质量的在线学习支持。
                通过生动、有互动感的在线“面对面”课堂，我们帮助孩子在学习中不断进步、建立自信。我们的使命，是让优质教育
                触手可及、有体系、富有趣味——从启蒙阅读到 GCSE, IELTS, TOEFL
                备考，全程陪伴孩子稳步成长。
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className='text-slate-700 leading-relaxed text-[clamp(1rem,1.4vw,1.125rem)]'>
                每一位导师都经过
                <span className='font-semibold'>严格筛选与背景审核认证</span>
                ，根据孩子的学习水平与成长目标量身定制课程，帮助他们在轻松、有引导的学习氛围中建立自信，获得长期、稳定的学习成效。
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
                    src='/public/images/all_baby.avif'
                    alt='Online tutoring session between teacher and child'
                    className='h-full w-full object-cover'
                    loading='lazy'
                    decoding='async'
                    sizes='100vw'
                  />
                </div>
                <figcaption className='absolute top-3 left-3 bg-white/85 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-700 shadow'>
                  在线 • 安全 • 高互动
                </figcaption>
              </figure>
            </Reveal>

            {/* Subjects */}
            <div className='pt-4'>
              <Reveal delay={160}>
                <h4 className='text-slate-900 font-semibold mb-2 text-[clamp(1rem,1.2vw,1.125rem)]'>
                  辅导科目
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
                  预约免费试听
                </a>
                <Link
                  to='/contact'
                  className='border border-slate-300 px-6 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50 transition
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
                >
                  联系我们
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className='text-sm text-slate-600 leading-relaxed pt-2'>
                我们提供数学、英语和科学的免费测评，帮助家长更清晰地了解孩子的优势与待提升之处，从而为他们规划更合适、更有信心的学习路径。
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
                  在线 • 安全 • 高互动
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
