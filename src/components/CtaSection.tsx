import { FiArrowRight } from "react-icons/fi";

const CtaSection = () => {
  return (
    <section className='py-24 px-6 bg-slate-900 text-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-4xl font-serif font-bold mb-6'>
          想给孩子的英语能力“开个挂”？
        </h2>
        <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>
          母语外教在线直播课！定制化1对1+小班课，时间灵活好调整，学习进度看得见，家长更放心~
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href='https://dashboard.linguasphere.cn/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white text-slate-900 hover:bg-white/90 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition cursor-pointer'
          >
            预约免费试听 <FiArrowRight />
          </a>
          <a
            href='https://dashboard.linguasphere.cn/'
            target='_blank'
            rel='noopener noreferrer'
            className='border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition cursor-pointer'
          >
            咨询课程顾问
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
