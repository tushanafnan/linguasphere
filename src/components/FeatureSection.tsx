import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

/* ------------------------------------
   Data
------------------------------------- */
const quickIcons = [
  { icon: FiPhone, label: "在线指导" },
  { icon: FiMapPin, label: "资深引导师" },
  { icon: FiMail, label: "经验证的成果" },
  { icon: FiClock, label: "母语教师" },
  { icon: FiMapPin, label: "互动式学习" },
  { icon: FiClock, label: "小班课程" },
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
            学习体验
          </h2>
          <p className='mt-4 text-slate-600 text-[clamp(1rem,1.25vw,1.125rem)]'>
            鲜活互动、效果可测——帮孩子自信学、稳步进！
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
                  100%母语英语教师
                </h3>
                <p className='mt-3 text-slate-700 leading-relaxed text-[clamp(1rem,1.1vw,1.0625rem)]'>
                  来自英语母语国家的持证教师，具备丰富的少儿英语教学经验——发音标准、深谙英语文化内涵，且掌握适龄化教学方法。
                </p>
                <ul className='mt-4 space-y-2 text-slate-700'>
                  {[
                    "结合真实场景的母语级清晰表达",
                    "目标明确的结构化课程",
                    "持续的学情评估与精准的家长反馈",
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
                  互动学习——“紫趣探险”
                </h3>
                <p className='mt-3 text-slate-700 leading-relaxed text-[clamp(1rem,1.1vw,1.0625rem)]'>
                  任务式探险融合角色扮演、电子绘本与奖励徽章，每周主题把听说读写变成趣味闯关。
                </p>
                <ul className='mt-4 space-y-2 text-slate-700'>
                  {[
                    "角色扮演练出实用沟通力",
                    "绘本加持，提升阅读理解与表达流畅度",
                    "徽章+任务，让学习热情一路在线",
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
                  小班课：4–6人班
                </h3>
                <p className='mt-3 text-slate-700 leading-relaxed text-[clamp(1rem,1.1vw,1.0625rem)]'>
                  小班教学保障开口机会：45分钟课上人人发言，搭配个性化反馈+灵活排课。
                </p>
                <ul className='mt-4 space-y-2 text-slate-700'>
                  {[
                    "参与度拉满，全程专注不掉线",
                    "反馈适配个人学习风格、节奏与目标",
                    "可选1对1加课，自选老师",
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
              立即预约
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
