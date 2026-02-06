import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "../components/Reveal";

const NotFoundPage = () => {
  return (
    <section className='relative min-h-screen px-6 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden'>
      {/* Decorative blobs */}
      <div className='absolute inset-0 -z-10 pointer-events-none' aria-hidden='true'>
        <div className='absolute -top-32 right-1/4 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl animate-float' />
        <div className='absolute -bottom-32 left-1/3 w-72 h-72 rounded-full bg-purple-200/25 blur-3xl animate-float-slow' />
      </div>

      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center py-20'>
        {/* Text Section */}
        <div className='space-y-6'>
          <Reveal variant='fade-right'>
            <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 ring-1 ring-red-200 text-sm font-semibold tracking-wide'>
              错误 404
            </span>
          </Reveal>

          <Reveal variant='blur' delay={80}>
            <h2 className='text-[clamp(2rem,5vw,3.5rem)] font-serif font-bold leading-[1.08]'>
              <span className='bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600 bg-clip-text text-transparent'>
                页面未找到
              </span>
            </h2>
          </Reveal>

          <Reveal variant='fade-up' delay={160}>
            <p className='text-lg text-slate-600 leading-relaxed'>
              您访问的页面不存在或已被移动。别担心，让我们帮您回到正确的位置。
            </p>
          </Reveal>

          <Reveal variant='fade-up' delay={200}>
            <p className='text-lg text-slate-600 leading-relaxed'>
              您可以返回首页，或浏览我们的其他页面。
            </p>
          </Reveal>

          <Reveal variant='fade-up' delay={260}>
            <div className='pt-4'>
              <a
                href='/'
                className='
                  btn-glow group
                  inline-flex items-center gap-2.5
                  bg-gradient-to-r from-indigo-600 to-purple-600
                  hover:from-indigo-500 hover:to-purple-500
                  text-white px-8 py-3.5 rounded-full font-semibold
                  shadow-[0_4px_16px_rgba(99,102,241,0.3)]
                  hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)]
                  transition-all duration-300
                '
              >
                返回首页
                <FiArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Image Section */}
        <Reveal variant='scale' delay={120}>
          <div className='relative'>
            <div className='aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden shadow-[0_20px_48px_rgba(0,0,0,0.1)]'>
              <img
                src='https://ik.imagekit.io/iMuhammadAnas/undraw_page-not-found_6wni.png?updatedAt=1754802777231'
                alt='404 页面未找到'
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default NotFoundPage;