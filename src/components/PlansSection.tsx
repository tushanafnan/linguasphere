import { motion } from "framer-motion";
import React from "react";
import PlansGrid from "./PlansGrid";
import { Reveal } from "./Reveal";

interface Plan {
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

interface PlansSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const PlansSection: React.FC<PlansSectionProps> = ({
  limit = 3,
  showViewAll = true,
}) => {
  const Plans: Plan[] = [
    {
      title: "1对1在线辅导",
      description:
        "专属英语辅导，配资深教师1对1带练。最低6小时起，可灵活选每周/每两周上课。每节课都有明确学习目标，课后还会给家长发简洁的进度小结~",
      // keep price for overlay only
      price: "¥330/小时 · 最低6小时起订",
      image: "/images/baby.jpg",
      tags: ["定制1对1", "背景审核认证师资", "灵活排课", "进度反馈"],
    },
    {
      title: "小组在线辅导",
      description:
        "高性价比小班课，4-6人一班，同样是资深教师带队。课堂有协作任务、互动环节，每周还会给家长发学习快照，让孩子学习热情不掉线！",
      price: "¥180/小时 · 订6小时以上仅¥162/小时",
      image: "/images/baby2.jpg",
      tags: ["4–6人小班", "同伴互动", "资深讲师", "每周学习快照"],
    },
  ];

  return (
    <section
      id='Plans'
      className='relative overflow-hidden bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-900 py-28 md:py-36 px-6 w-full flex justify-center items-center'
    >
      {/* Animated background blobs — fun colors */}
      <div className='pointer-events-none absolute -top-20 right-1/3 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl animate-float' />
      <div className='pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-amber-500/12 blur-3xl animate-float-slow' />

      {/* Fun floating emojis */}
      <div
        className='absolute inset-0 pointer-events-none overflow-hidden'
        aria-hidden='true'
      >
        <motion.span
          className='absolute text-2xl top-[12%] left-[6%] select-none'
          animate={{ y: [0, -14, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          💰
        </motion.span>
        <motion.span
          className='absolute text-2xl bottom-[15%] right-[8%] select-none'
          animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🎁
        </motion.span>
      </div>

      <div
        className='pointer-events-none absolute inset-0 opacity-20'
        aria-hidden='true'
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className='max-w-7xl mx-auto w-full'>
        {/* Section Heading — kid-friendly */}
        <Reveal variant='pop' className='text-center mb-16'>
          <h2
            id='plans-heading'
            className='font-serif font-bold tracking-tight 
                       text-[clamp(2rem,5vw,3rem)] leading-[1.06]
                       bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-200 to-violet-200'
          >
            🎯 辅导方案
          </h2>
          <p className='mt-5 text-lg text-slate-300 max-w-3xl mx-auto'>
            选定制化1对1辅导，或是趣味小组课——每节课都是真人直播、互动满满，进步看得见，靠谱又安心。
            ✨
          </p>
        </Reveal>

        {/* Grid (kept API the same) */}
        <div className='mx-auto max-w-6xl'>
          <PlansGrid Plans={Plans} limit={limit} />
        </div>

        {showViewAll && (
          <div className='text-center mt-12'>
            {/* View All disabled - no separate Plans page route */}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlansSection;
