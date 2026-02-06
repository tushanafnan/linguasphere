import { motion } from "framer-motion";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

/* ----------------------
   Hero — Kid-Friendly
-----------------------*/
const floatingEmoji = (emoji: string, cls: string, delay: number) => (
  <motion.span
    className={`absolute text-2xl md:text-3xl select-none pointer-events-none ${cls}`}
    aria-hidden='true'
    animate={{ y: [0, -14, 0], rotate: [0, 8, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {emoji}
  </motion.span>
);

const Hero: React.FC = () => {
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
      {/* ===== Background video + kid-friendly overlays ===== */}
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
          <source
            src='https://res.cloudinary.com/dk4p31whc/video/upload/v1761495593/baby_njzw2u.mp4'
            type='video/mp4'
          />
        </video>

        <img
          src='https://images.unsplash.com/photo-1606761568499-6d2451b23c55?q=80&w=1920&auto=format&fit=crop'
          alt=''
          className='absolute inset-0 h-full w-full object-cover hidden motion-reduce:block'
          loading='eager'
          decoding='async'
        />

        {/* Warm kid-friendly gradient scrims */}
        <div className='absolute inset-0 bg-gradient-to-b from-purple-900/60 via-indigo-900/35 to-amber-900/40' />
        <div className='absolute inset-0 bg-gradient-to-r from-violet-950/25 via-transparent to-rose-950/15' />

        {/* Radial glow — warmer */}
        <div
          className='absolute inset-0 animate-pulse-glow'
          aria-hidden='true'
          style={{
            background:
              "radial-gradient(800px 400px at 50% 30%, rgba(168,85,247,0.15), transparent)",
          }}
        />
      </div>

      {/* ===== Floating fun emojis (kid-friendly) ===== */}
      <div
        className='absolute inset-0 -z-5 overflow-hidden pointer-events-none'
        aria-hidden='true'
      >
        {floatingEmoji("⭐", "top-[18%] left-[8%]", 0)}
        {floatingEmoji("📚", "top-[25%] right-[12%]", 1.2)}
        {floatingEmoji("🎨", "bottom-[28%] left-[15%]", 2)}
        {floatingEmoji("🌈", "top-[55%] right-[20%]", 0.8)}
        {floatingEmoji("✏️", "top-[15%] right-[32%]", 2.5)}
        {floatingEmoji("🎯", "bottom-[35%] right-[8%]", 1.5)}

        {/* Soft colored orbs */}
        <motion.div
          className='absolute top-1/4 left-[10%] w-4 h-4 rounded-full bg-amber-400/40'
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className='absolute top-1/3 right-[15%] w-3 h-3 rounded-full bg-emerald-400/30'
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className='absolute bottom-1/3 left-[20%] w-5 h-5 rounded-full bg-rose-400/25'
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* ===== Content ===== */}
      <div className='relative z-10 mx-auto max-w-screen-xl px-6 w-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            delay: 0.1,
          }}
          className='text-center'
        >
          <span className='inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-white/90 ring-1 ring-white/25 backdrop-blur-md text-sm font-bold tracking-wide shadow-lg'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400' />
            </span>
            🎓 直播 • 1对1 & 小班 • 4–16岁
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.3,
          }}
          className='mt-6 md:mt-8'
        >
          <h1
            id='hero-heading'
            className='
              text-center font-serif font-bold tracking-tight text-white leading-[1.05]
              text-[clamp(2.4rem,6.5vw,4.5rem)]
              drop-shadow-[0_4px_32px_rgba(0,0,0,0.3)]
            '
          >
            母语外教在线
            <br className='sm:hidden' />
            <span className='bg-gradient-to-r from-amber-300 via-rose-300 to-fuchsia-300 bg-clip-text text-transparent'>
              实时英语辅导
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 18,
            delay: 0.5,
          }}
          className='mt-5 md:mt-7'
        >
          <p className='mx-auto max-w-2xl text-center text-white/85 leading-relaxed text-[clamp(1.05rem,1.6vw,1.3rem)]'>
            4–16岁专属定制：1对1+小班课，有趣又系统，帮每个孩子练出真自信~ 🚀
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.7,
          }}
        >
          <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
            {/* Primary CTA — glowing */}
            <motion.a
              href='https://dashboard.linguasphere.cn/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 40px rgba(251,191,36,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className='
                btn-glow group
                inline-flex items-center justify-center gap-2.5
                rounded-full px-8 sm:px-10 py-3.5
                font-bold
                text-slate-900
                bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-400 hover:to-yellow-500
                shadow-[0_8px_32px_rgba(251,191,36,0.25)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400
                transition-colors duration-300
                text-[clamp(1rem,1.2vw,1.0625rem)]
              '
            >
              🎉 开始学习
              <FiArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href='https://dashboard.linguasphere.cn/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className='
                group
                inline-flex items-center justify-center gap-2
                rounded-full px-8 sm:px-10 py-3.5
                font-semibold
                text-white
                ring-1 ring-white/30
                bg-white/10 hover:bg-white/20
                backdrop-blur-md
                shadow-[0_4px_16px_rgba(0,0,0,0.1)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300
                transition-all duration-300
                text-[clamp(1rem,1.2vw,1.0625rem)]
              '
            >
              📝 预约免费试听
            </motion.a>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className='mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/60 text-sm font-medium'>
            {[
              { icon: "✅", text: "背景审核认证" },
              { icon: "🌍", text: "英语母语外教" },
              { icon: "🎁", text: "免费试听课" },
            ].map((item) => (
              <motion.span
                key={item.text}
                whileHover={{ scale: 1.08, color: "rgba(255,255,255,0.9)" }}
                className='flex items-center gap-2 cursor-default'
              >
                <span className='text-base'>{item.icon}</span>
                {item.text}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — animated */}
      <a
        href='#about'
        aria-label='向下滚动'
        className='
          absolute left-1/2 -translate-x-1/2 bottom-8 z-10 group
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-xl
          animate-scroll-hint
        '
      >
        <div className='h-14 w-8 rounded-full border-2 border-white/50 bg-white/5 backdrop-blur-sm relative overflow-hidden group-hover:border-white/80 transition-colors'>
          <span className='absolute left-1/2 top-3 h-3 w-1 -translate-x-1/2 rounded-full bg-white/80 animate-bounce' />
        </div>
      </a>
    </section>
  );
};

export default Hero;
