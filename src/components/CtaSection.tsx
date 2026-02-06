import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "./Reveal";

const floatingEmoji = (emoji: string, cls: string, delay: number) => (
  <motion.span
    className={`absolute text-2xl md:text-3xl select-none pointer-events-none ${cls}`}
    aria-hidden='true'
    animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {emoji}
  </motion.span>
);

const CtaSection = () => {
  return (
    <section className='relative py-28 md:py-36 px-6 overflow-hidden isolate'>
      {/* Animated gradient background — warmer kid tones */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-900 animate-gradient' />

      {/* Decorative floating blobs — fun colors */}
      <div
        className='absolute inset-0 -z-5 pointer-events-none'
        aria-hidden='true'
      >
        <div className='absolute -top-20 -left-20 w-72 h-72 rounded-full bg-violet-500/15 blur-3xl animate-float' />
        <div className='absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-amber-500/12 blur-3xl animate-float-slow' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-rose-500/8 blur-3xl animate-pulse-glow' />
      </div>

      {/* Fun floating emojis */}
      <div
        className='absolute inset-0 -z-5 overflow-hidden pointer-events-none'
        aria-hidden='true'
      >
        {floatingEmoji("🎓", "top-[15%] left-[8%]", 0)}
        {floatingEmoji("⭐", "top-[20%] right-[10%]", 1)}
        {floatingEmoji("🎨", "bottom-[20%] left-[12%]", 2)}
        {floatingEmoji("📚", "bottom-[25%] right-[15%]", 1.5)}
      </div>

      {/* Dot grid overlay */}
      <div
        className='absolute inset-0 -z-5 opacity-20'
        aria-hidden='true'
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className='max-w-5xl mx-auto text-center relative'>
        <Reveal variant='pop'>
          <span className='inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-white/80 ring-1 ring-white/15 backdrop-blur-md text-sm font-bold mb-8'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
              <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400' />
            </span>
            🔥 限时优惠 · 现在报名立享折扣
          </span>
        </Reveal>

        <Reveal variant='blur' delay={80}>
          <h2 className='text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold leading-[1.08] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.3)]'>
            想给孩子的英语能力
            <br className='sm:hidden' />
            <span className='bg-gradient-to-r from-amber-300 via-rose-300 to-violet-300 bg-clip-text text-transparent'>
              "开个挂"？ 🚀
            </span>
          </h2>
        </Reveal>

        <Reveal variant='fade-up' delay={160}>
          <p className='mt-6 text-[clamp(1.05rem,1.4vw,1.25rem)] text-white/75 max-w-2xl mx-auto leading-relaxed'>
            母语外教在线直播课！定制化1对1+小班课，时间灵活好调整，学习进度看得见，家长更放心~
            🎯
          </p>
        </Reveal>

        <Reveal variant='bounce-up' delay={240}>
          <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
            <motion.a
              href='https://dashboard.linguasphere.cn/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{
                scale: 1.06,
                boxShadow: "0 14px 40px rgba(251,191,36,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className='
                btn-glow group
                inline-flex items-center justify-center gap-2.5
                bg-gradient-to-r from-amber-300 to-yellow-400 text-slate-900 hover:from-amber-400 hover:to-yellow-500
                px-8 sm:px-10 py-4 rounded-full font-bold
                shadow-[0_8px_32px_rgba(251,191,36,0.25)]
                transition-colors duration-300 cursor-pointer
              '
            >
              🎉 预约免费试听
              <FiArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
            </motion.a>
            <motion.a
              href='https://dashboard.linguasphere.cn/'
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className='
                inline-flex items-center justify-center
                ring-1 ring-white/30 text-white
                bg-white/10 hover:bg-white/20 backdrop-blur-md
                px-8 sm:px-10 py-4 rounded-full font-bold
                transition-all duration-300 cursor-pointer
              '
            >
              📞 咨询课程顾问
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaSection;
