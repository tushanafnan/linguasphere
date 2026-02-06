import { motion } from "framer-motion";
import React from "react";
import { Reveal, StaggerContainer, StaggerItem } from "./Reveal";

/* ----------------------
   About Section — Kid-Friendly
-----------------------*/
const AboutSection: React.FC = () => {
  const stats = [
    { k: "18+", v: "年+教学经验", emoji: "📅" },
    { k: "4–16", v: "岁适用年龄段", emoji: "🧒" },
    { k: "1:1", v: "定制一对一课程", emoji: "🎯" },
    { k: "DBS✓", v: "背景审核认证师资", emoji: "🛡️" },
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
    { text: "一对一专属课程", emoji: "👩‍🏫" },
    { text: "小班互动学习", emoji: "👫" },
    { text: "在线轻松参与", emoji: "💻" },
    { text: "结构清晰有条理", emoji: "📋" },
    { text: "针对性提升能力", emoji: "📈" },
    { text: "培养独立学习习惯", emoji: "🌱" },
    { text: "资深专业导师团队", emoji: "🏆" },
    { text: "不再跟不上进度", emoji: "🚀" },
  ];

  const tagColors = [
    "bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100",
    "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100",
    "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100",
    "bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100",
    "bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100",
  ];

  return (
    <section
      id='about'
      role='region'
      aria-labelledby='about-heading'
      className='relative bg-gradient-to-b from-violet-100/80 via-amber-50/50 to-emerald-50/40 py-28 md:py-36 overflow-hidden font-sans'
    >
      {/* Decorative kid-friendly background blobs */}
      <div
        className='pointer-events-none absolute inset-0 -z-10'
        aria-hidden='true'
      >
        <div className='absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl animate-float' />
        <div className='absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-amber-200/25 blur-3xl animate-float-slow' />
        <div className='absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl animate-pulse-glow' />
      </div>

      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        <Reveal variant='pop' className='text-center mb-12 md:mb-16'>
          <h2
            id='about-heading'
            className='font-serif font-bold tracking-tight
                       text-[clamp(2rem,5vw,3rem)] leading-[1.1]
                       bg-clip-text text-transparent bg-gradient-to-r from-violet-800 via-purple-700 to-amber-600'
          >
            📖 品牌故事
          </h2>
        </Reveal>

        <div className='grid gap-10 md:gap-16 md:grid-cols-2 items-start'>
          {/* Text Column */}
          <div className='flex flex-col gap-6'>
            <Reveal variant='fade-right'>
              <h3
                className='text-violet-800 font-bold leading-tight
                           text-[clamp(1.25rem,2.2vw,1.5rem)]'
              >
                🌟 用优质在线学习，助力孩子成长
              </h3>
            </Reveal>

            <Reveal delay={60}>
              <p className='text-slate-800 leading-relaxed text-[clamp(1rem,1.4vw,1.125rem)]'>
                Linguasphere 拥有超过 18
                年的教学经验，配备背景审核认证师资，专注于为 4–16
                岁孩子提供高质量的在线学习支持。
                通过生动、有互动感的在线"面对面"课堂，我们帮助孩子在学习中不断进步、建立自信。我们的使命，是让优质教育
                触手可及、有体系、富有趣味——从启蒙阅读到 GCSE, IELTS, TOEFL
                备考，全程陪伴孩子稳步成长。
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className='text-slate-800 leading-relaxed text-[clamp(1rem,1.4vw,1.125rem)]'>
                每一位导师都经过
                <span className='font-semibold text-violet-800'>
                  严格筛选与背景审核认证
                </span>
                ，根据孩子的学习水平与成长目标量身定制课程，帮助他们在轻松、有引导的学习氛围中建立自信，获得长期、稳定的学习成效。
              </p>
            </Reveal>

            {/* Stats — animated cards */}
            <StaggerContainer
              className='grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2'
              staggerDelay={0.1}
            >
              {stats.map((i) => (
                <StaggerItem key={i.v}>
                  <motion.li
                    whileHover={{ y: -6, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className='rounded-2xl p-4 text-center list-none
                               bg-gradient-to-br from-white to-violet-50/50
                               border-2 border-violet-100/50
                               shadow-[0_6px_18px_rgba(0,0,0,0.06)]
                               hover:shadow-[0_18px_36px_rgba(139,92,246,0.15)]
                               hover:border-violet-200/60
                               cursor-default'
                  >
                    <div className='text-2xl mb-1'>{i.emoji}</div>
                    <div
                      className='font-bold text-violet-800
                                 text-[clamp(1.5rem,2.4vw,1.875rem)]'
                    >
                      {i.k}
                    </div>
                    <div className='mt-1 text-xs text-slate-700 font-medium'>
                      {i.v}
                    </div>
                  </motion.li>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* MOBILE-ONLY inline image block */}
            <Reveal delay={140} className='md:hidden'>
              <figure
                className='relative mt-2 rounded-3xl overflow-hidden border-2 border-violet-100
                           ring-1 ring-violet-100/70 bg-white
                           shadow-[0_12px_32px_rgba(0,0,0,0.08)]'
              >
                <div className='aspect-[4/3] w-full'>
                  <img
                    src='/images/all_baby.jpg'
                    alt='Online tutoring session between teacher and child'
                    className='h-full w-full object-cover'
                    loading='lazy'
                    decoding='async'
                    sizes='100vw'
                  />
                </div>
                <figcaption className='absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-violet-700 shadow'>
                  🎒 在线 • 安全 • 高互动
                </figcaption>
              </figure>
            </Reveal>

            {/* Subjects — colorful tags */}
            <div className='pt-4'>
              <Reveal delay={160}>
                <h4 className='text-slate-900 font-bold mb-3 text-[clamp(1.05rem,1.2vw,1.15rem)]'>
                  📚 辅导科目
                </h4>
              </Reveal>
              <StaggerContainer
                className='flex flex-wrap gap-2'
                staggerDelay={0.04}
              >
                {subjects.map((item, idx) => (
                  <StaggerItem key={item}>
                    <motion.span
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex select-none items-center px-3 py-1.5 text-sm rounded-full
                                 border font-semibold cursor-default
                                 transition-colors duration-300
                                 ${tagColors[idx % tagColors.length]}`}
                    >
                      {item}
                    </motion.span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Benefits — animated grid */}
            <div className='pt-6'>
              <h4 className='sr-only'>Key benefits</h4>
              <StaggerContainer
                className='grid sm:grid-cols-2 gap-3'
                staggerDelay={0.06}
              >
                {benefits.map((b) => (
                  <StaggerItem key={b.text}>
                    <motion.li
                      whileHover={{ x: 4, scale: 1.02 }}
                      className='flex items-center gap-2.5 text-slate-800 list-none cursor-default'
                    >
                      <span className='text-lg'>{b.emoji}</span>
                      <span className='text-[clamp(0.95rem,1.2vw,1.05rem)] font-medium'>
                        {b.text}
                      </span>
                    </motion.li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* CTA Buttons */}
            <Reveal delay={220} variant='bounce-up'>
              <div className='pt-8 flex flex-wrap gap-4'>
                <motion.a
                  href='https://dashboard.linguasphere.cn/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 28px rgba(139,92,246,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className='btn-glow group inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-bold shadow-[0_4px_16px_rgba(139,92,246,0.3)] transition-colors duration-300
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500'
                >
                  🎉 预约免费试听
                </motion.a>
                <motion.a
                  href='https://dashboard.linguasphere.cn/'
                  target='_blank'
                  rel='noopener noreferrer'
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className='border-2 border-violet-300 bg-violet-50/60 px-6 py-3 rounded-xl font-bold text-violet-800 hover:bg-violet-100 transition-colors
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500'
                >
                  📞 联系我们
                </motion.a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className='text-sm text-slate-700 leading-relaxed pt-2'>
                我们提供数学、英语和科学的免费测评，帮助家长更清晰地了解孩子的优势与待提升之处，从而为他们规划更合适、更有信心的学习路径。
                ✨
              </p>
            </Reveal>
          </div>

          {/* Image Column (desktop/tablet only) */}
          <div className='hidden md:block'>
            <Reveal variant='scale' delay={120}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
                className='relative rounded-3xl overflow-hidden p-[2px]
                           bg-gradient-to-br from-violet-500/35 via-amber-400/25 to-emerald-500/30
                           shadow-[0_12px_32px_rgba(0,0,0,0.08)]'
              >
                <div className='rounded-[1.4rem] overflow-hidden bg-white'>
                  <div className='aspect-[3/2] w-full'>
                    <img
                      src='/images/all_baby.jpg'
                      alt='Online tutoring session between teacher and child'
                      className='h-full w-full object-cover transition duration-700 hover:scale-[1.03]'
                      loading='lazy'
                      decoding='async'
                      sizes='(min-width: 1024px) 560px, 50vw'
                    />
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className='absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-violet-700 shadow-lg ring-1 ring-violet-100/50'
                >
                  🎒 在线 • 安全 • 高互动
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
