import React from "react";
import { Reveal } from "./Reveal";

/* ----------------------
   Component
-----------------------*/
const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Victoria",
      location: "",
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=256&q=80",
      rating: 5,
      review:
        "女儿已经上了一段时间的课程了，非常喜欢这里为她量身设计的课堂内容。每次都有适量的作业巩固，她也能积极完成，进步非常明显。",
    },
    {
      name: "Bryan",
      location: "",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=256&q=80",
      rating: 5,
      review:
        "非常感谢老师们在入学考试前对 Marla 的帮助。上课之后，她自信心明显提升，感觉老师的讲解和练习都很有针对性，对考试帮助很大，也很喜欢这里的教学风格。",
    },
    {
      name: "Laura",
      location: "",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
      rating: 5,
      review:
        "非常感谢老师们一直以来耐心细致的陪伴与支持，尤其是在这个阶段。线上技术保障也很到位。虽然一周只有三次课，孩子却每次都很期待上线学习。",
    },
  ];

  return (
    <section
      id='testimonials'
      role='region'
      aria-labelledby='testimonials-heading'
      className='relative py-20 md:py-28 px-6 bg-white overflow-hidden'
    >
      {/* modern accents (decorative) */}
      <div
        className='pointer-events-none absolute inset-0 -z-10 opacity-35'
        aria-hidden='true'
      >
        <div className='absolute -top-24 right-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl' />
        <div className='absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl' />
      </div>

      <div className='max-w-7xl mx-auto'>
        {/* Heading */}
        <Reveal className='text-center max-w-3xl mx-auto mb-12 md:mb-14'>
          <h2
            id='testimonials-heading'
            className='font-serif font-bold tracking-tight 
                       text-[clamp(2rem,5vw,3rem)] leading-[1.06]
                       bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600'
          >
            把孩子放心交给我们
          </h2>
          <p className='mt-4 text-slate-600 text-[clamp(1rem,1.25vw,1.125rem)]'>
            家长们认可我们耐心、有条理的教学方式，以及看得见的学习进步。
          </p>

          {/* Overall rating badge */}
          <div className='mt-5 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 ring-1 ring-slate-200'>
            <div className='flex items-center' aria-hidden='true'>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className='w-5 h-5 text-yellow-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              ))}
            </div>
            <span className='text-sm font-medium text-slate-700'>
              <span className='sr-only'>平均评分：</span> 5/5
            </span>
          </div>
        </Reveal>

        {/* Grid */}
        <div className='grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto items-stretch'>
          {testimonials.map((t, index) => (
            <Reveal key={index} delay={index * 80}>
              <article
                className='group relative h-full rounded-3xl p-[1px]
                           bg-gradient-to-br from-indigo-500/20 via-indigo-300/10 to-fuchsia-500/20
                           hover:from-indigo-500/30 hover:to-fuchsia-500/30 transition'
              >
                <div
                  className='flex h-full flex-col rounded-[1.45rem] border border-slate-200/80
                             bg-white/90 backdrop-blur p-7 sm:p-8
                             shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                             transition-transform duration-500
                             group-hover:-translate-y-1 group-hover:shadow-[0_18px_36px_rgba(0,0,0,0.10)]
                             motion-reduce:transform-none'
                >
                  {/* Stars */}
                  <div
                    className='flex items-center mb-4'
                    aria-label={`${t.rating} 分（满分 5 分）`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className='w-5 h-5 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                      </svg>
                    ))}
                  </div>

                  {/* Review */}
                  <blockquote className='mb-6'>
                    <p className='text-slate-700 leading-relaxed italic text-[clamp(1rem,1.1vw,1.0625rem)]'>
                      “{t.review}”
                    </p>
                  </blockquote>

                  {/* Person */}
                  <div className='mt-auto flex items-center'>
                    <img
                      src={t.image}
                      alt={t.name}
                      className='w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-white/80'
                      loading='lazy'
                      decoding='async'
                    />
                    <div>
                      <div className='font-semibold text-slate-900'>
                        {t.name}
                      </div>
                      {t.location ? (
                        <div className='text-sm text-slate-500'>
                          {t.location}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Optional CTA */}
        <Reveal delay={260}>
          <div className='text-center mt-12'>
            <a
              href='https://dashboard.linguasphere.cn/'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center rounded-full
                         bg-gradient-to-r from-indigo-600 to-fuchsia-600
                         px-7 sm:px-8 py-3 text-white font-semibold shadow
                         hover:from-indigo-600/90 hover:to-fuchsia-600/90
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition'
            >
              查看更多评价并预约
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
