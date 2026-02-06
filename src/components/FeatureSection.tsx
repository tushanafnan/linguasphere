import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

/* ------------------------------------
   Data
------------------------------------- */
const quickIcons = [
  { label: "在线指导", emoji: "💻" },
  { label: "资深引导师", emoji: "👨‍🏫" },
  { label: "经验证的成果", emoji: "🏆" },
  { label: "母语教师", emoji: "🌍" },
  { label: "互动式学习", emoji: "🎮" },
  { label: "小班课程", emoji: "👫" },
];

const featureCards = [
  {
    emoji: "👩‍🏫",
    color: "from-violet-500 to-purple-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-200/60",
    dotColor: "bg-violet-500",
    title: "100%母语英语教师",
    desc: "来自英语母语国家的持证教师，具备丰富的少儿英语教学经验——发音标准、深谙英语文化内涵，且掌握适龄化教学方法。",
    bullets: [
      "结合真实场景的母语级清晰表达",
      "目标明确的结构化课程",
      "持续的学情评估与精准的家长反馈",
    ],
  },
  {
    emoji: "🎨",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200/60",
    dotColor: "bg-amber-500",
    title: "互动学习——\u201C紫趣探险\u201D",
    desc: "任务式探险融合角色扮演、电子绘本与奖励徽章，每周主题把听说读写变成趣味闯关。",
    bullets: [
      "角色扮演练出实用沟通力",
      "绘本加持，提升阅读理解与表达流畅度",
      "徽章+任务，让学习热情一路在线",
    ],
  },
  {
    emoji: "👫",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200/60",
    dotColor: "bg-emerald-500",
    title: "小班课：4–6人班",
    desc: "小班教学保障开口机会：45分钟课上人人发言，搭配个性化反馈+灵活排课。",
    bullets: [
      "参与度拉满，全程专注不掉线",
      "反馈适配个人学习风格、节奏与目标",
      "可选1对1加课，自选老师",
    ],
  },
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
      className='relative py-28 md:py-36 px-6 bg-gradient-to-b from-amber-100/80 via-violet-50/50 to-emerald-50/40 w-full flex justify-center items-center overflow-hidden font-sans'
    >
      {/* Kid-friendly background: confetti dots + soft blobs */}
      <div
        className='pointer-events-none absolute inset-0 -z-10 opacity-50'
        aria-hidden='true'
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#f3e8ff_1.5px,transparent_1.5px)] [background-size:22px_22px]' />
        <div className='absolute -top-32 right-1/3 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl' />
        <div className='absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl' />
        <div className='absolute top-1/2 right-1/4 h-56 w-56 rounded-full bg-emerald-200/25 blur-3xl' />
      </div>

      <div className='max-w-7xl mx-auto w-full'>
        {/* Heading */}
        <Reveal
          variant='bounce-up'
          className='text-center max-w-4xl mx-auto mb-12 md:mb-14'
        >
          <h2
            id='features-heading'
            className='font-serif font-bold tracking-tight 
                       text-[clamp(2rem,5vw,3rem)] leading-[1.06]
                       bg-clip-text text-transparent bg-gradient-to-r from-violet-800 via-purple-700 to-amber-600'
          >
            ✨ 学习体验
          </h2>
          <p className='mt-4 text-slate-700 text-[clamp(1rem,1.25vw,1.125rem)]'>
            鲜活互动、效果可测——帮孩子自信学、稳步进！ 🚀
          </p>
        </Reveal>

        {/* 1) ICON CHIPS — animated stagger grid */}
        <StaggerContainer
          className='mx-auto mb-12 md:mb-16 max-w-5xl'
          staggerDelay={0.08}
        >
          <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4'>
            {quickIcons.map((item, i) => (
              <StaggerItem key={i}>
                <li>
                  <motion.div
                    whileHover={{ scale: 1.06, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    tabIndex={0}
                    className='group flex items-center gap-3 rounded-2xl p-[1px]
                               bg-gradient-to-br from-violet-400/25 via-amber-300/15 to-emerald-400/20
                               hover:from-violet-500/35 hover:to-emerald-500/30
                               transition
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
                               cursor-default'
                  >
                    <div
                      className='flex items-center gap-3 w-full rounded-[1rem]
                                 bg-white/90 backdrop-blur px-3.5 py-3 sm:px-4 sm:py-3
                                 ring-1 ring-violet-100/60 shadow-sm'
                    >
                      <span
                        className='inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center 
                                   rounded-xl bg-gradient-to-br from-violet-100 to-amber-50 ring-1 ring-violet-100 shadow-sm text-lg'
                        aria-hidden='true'
                      >
                        {item.emoji}
                      </span>
                      <span className='text-[clamp(0.9rem,1vw,1rem)] font-semibold text-slate-800 leading-tight'>
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                </li>
              </StaggerItem>
            ))}
          </ul>
        </StaggerContainer>

        {/* 2) FEATURE CARDS — staggered entrance with fun colors */}
        <StaggerContainer
          className='grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch'
          staggerDelay={0.15}
        >
          {featureCards.map((card, idx) => (
            <StaggerItem key={idx}>
              <motion.article
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className={`group relative h-full min-h-[360px] md:min-h-[380px] lg:min-h-[420px]
                           rounded-3xl overflow-hidden border-2 ${card.borderColor}
                           ${card.bgLight} backdrop-blur
                           shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                           hover:shadow-[0_24px_52px_rgba(0,0,0,0.12)]`}
              >
                <div className='flex h-full flex-col p-6 sm:p-8'>
                  {/* Emoji header */}
                  <motion.div
                    className='text-4xl mb-4'
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.5,
                    }}
                  >
                    {card.emoji}
                  </motion.div>

                  <h3
                    className={`font-bold text-[clamp(1.25rem,2vw,1.5rem)] bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}
                  >
                    {card.title}
                  </h3>
                  <p className='mt-3 text-slate-800 leading-relaxed text-[clamp(1rem,1.1vw,1.0625rem)]'>
                    {card.desc}
                  </p>
                  <ul className='mt-4 space-y-2 text-slate-800'>
                    {card.bullets.map((line) => (
                      <li key={line} className='flex gap-2'>
                        <span
                          className={`mt-[0.6rem] h-2.5 w-2.5 rounded-full ${card.dotColor}`}
                          aria-hidden='true'
                        />
                        <span className='text-[clamp(0.95rem,1.05vw,1rem)]'>
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 3) CTA */}
        <Reveal delay={220} variant='bounce-up'>
          <div className='text-center mt-12 md:mt-16'>
            <motion.a
              href='https://dashboard.linguasphere.cn/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{
                scale: 1.06,
                boxShadow: "0 10px 28px rgba(168,85,247,0.35)",
              }}
              whileTap={{ scale: 0.96 }}
              className='btn-glow inline-flex items-center justify-center rounded-full 
                         bg-gradient-to-r from-violet-600 to-amber-500 
                         px-7 sm:px-8 py-3.5 text-white font-bold
                         shadow-[0_4px_16px_rgba(168,85,247,0.3)]
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 transition-colors duration-300'
            >
              🎯 立即预约
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
