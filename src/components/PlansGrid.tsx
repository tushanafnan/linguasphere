import { motion } from "framer-motion";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { StaggerContainer, StaggerItem } from "./Reveal";

type Plan = {
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
};

interface PlansGridProps {
  Plans: Plan[];
  limit?: number;
}

const cardColors = [
  {
    gradient: "from-violet-500/30 via-purple-500/20 to-fuchsia-500/30",
    hoverGradient:
      "hover:from-violet-500/50 hover:via-purple-500/35 hover:to-fuchsia-500/50",
    badge: "bg-violet-100 text-violet-700 ring-violet-200/50",
    tagBg:
      "bg-violet-50/80 border-violet-200 text-violet-700 hover:bg-violet-100",
    cta: "from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500",
    shadow: "rgba(139,92,246,0.3)",
    shadowHover: "rgba(139,92,246,0.4)",
    emoji: "🎓",
  },
  {
    gradient: "from-amber-500/30 via-orange-400/20 to-rose-500/25",
    hoverGradient:
      "hover:from-amber-500/50 hover:via-orange-400/35 hover:to-rose-500/45",
    badge: "bg-amber-100 text-amber-700 ring-amber-200/50",
    tagBg: "bg-amber-50/80 border-amber-200 text-amber-700 hover:bg-amber-100",
    cta: "from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400",
    shadow: "rgba(245,158,11,0.3)",
    shadowHover: "rgba(245,158,11,0.4)",
    emoji: "🌟",
  },
];

const PlansGrid: React.FC<PlansGridProps> = ({ Plans, limit }) => {
  const list = typeof limit === "number" ? Plans.slice(0, limit) : Plans;

  return (
    <StaggerContainer
      className='grid gap-8 md:grid-cols-2 place-items-stretch'
      staggerDelay={0.2}
    >
      {list.map((Plan, idx) => {
        const colors = cardColors[idx % cardColors.length];
        return (
          <StaggerItem key={idx}>
            <motion.article
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-[2px]
                         bg-gradient-to-br ${colors.gradient} ${colors.hoverGradient}
                         transition-colors duration-500`}
            >
              <div
                className='flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white
                            shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                            group-hover:shadow-[0_20px_48px_rgba(0,0,0,0.12)]
                            transition-shadow duration-500'
              >
                {/* Media */}
                <div className='relative w-full overflow-hidden'>
                  <div className='aspect-[16/9] w-full'>
                    <motion.img
                      src={Plan.image}
                      alt={Plan.title}
                      className='h-full w-full object-cover'
                      loading='lazy'
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                  {/* Price badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.3 + idx * 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    className={`absolute left-4 top-4 rounded-full ${colors.badge} backdrop-blur-md px-4 py-2 text-xs font-bold shadow-lg ring-1`}
                  >
                    {colors.emoji} {Plan.price}
                  </motion.div>
                  {/* gradient overlay at bottom of image */}
                  <div className='pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent' />
                </div>

                {/* Body */}
                <div className='flex min-h-0 flex-1 flex-col p-6 sm:p-8'>
                  <h3 className='text-[clamp(1.25rem,2vw,1.5rem)] font-bold leading-snug text-slate-900'>
                    {Plan.title}
                  </h3>

                  <p className='mt-3 text-slate-700 leading-relaxed text-[clamp(0.95rem,1.1vw,1.05rem)]'>
                    {Plan.description}
                  </p>

                  {/* Tags — animated */}
                  <div className='mt-4 flex flex-wrap gap-2'>
                    {Plan.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.4 + i * 0.08,
                          type: "spring",
                          stiffness: 150,
                        }}
                        whileHover={{ scale: 1.08 }}
                        className={`rounded-full border px-3 py-1 text-sm font-semibold
                                   transition-colors duration-300 cursor-default ${colors.tagBg}`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* CTA pinned to bottom */}
                  <div className='mt-auto pt-6'>
                    <motion.a
                      href='https://dashboard.linguasphere.cn/'
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{
                        scale: 1.04,
                        boxShadow: `0 10px 28px ${colors.shadowHover}`,
                      }}
                      whileTap={{ scale: 0.97 }}
                      className={`
                        btn-glow inline-flex w-full items-center justify-center gap-2
                        rounded-xl
                        bg-gradient-to-r ${colors.cta}
                        px-5 py-3.5 font-bold text-white
                        shadow-[0_4px_16px_${colors.shadow}]
                        transition-colors duration-300
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500
                      `}
                    >
                      🎉 立即预约
                      <FiArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.article>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
};

export default PlansGrid;
