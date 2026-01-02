import React from "react";
import PlansGrid from "./PlansGrid";

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
      className='relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 px-6 w-full flex justify-center items-center'
    >
      {/* soft background blobs (pure CSS) */}
      <div className='pointer-events-none absolute -top-20 right-1/3 h-64 w-64 rounded-full bg-indigo-300/25 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-indigo-200/25 blur-3xl' />

      <div className='max-w-7xl mx-auto w-full'>
        {/* Section Heading — matches 'Our Story' vibe */}
        <div className='text-center mb-16'>
          <h2
            id='features-heading'
            className='font-serif font-bold tracking-tight 
                       text-[clamp(2rem,5vw,3rem)] leading-[1.06]
                       bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600'
          >
            辅导方案
          </h2>
          <p className='mt-5 text-lg text-slate-600 max-w-3xl mx-auto'>
            选定制化1对1辅导，或是趣味小组课——每节课都是真人直播、互动满满，进步看得见，靠谱又安心。
          </p>
        </div>

        {/* Grid (kept API the same) */}
        <div className='mx-auto max-w-6xl'>
          <PlansGrid Plans={Plans} limit={limit} />
        </div>

        {showViewAll && (
          <div className='text-center mt-12'>
            {/* <Link
              to={"/Plans"}
              className='border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-full font-medium transition'
            >
              View All Packages
            </Link> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default PlansSection;
