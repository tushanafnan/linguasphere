import React from "react";
import { FiClock, FiMapPin, FiPhone } from "react-icons/fi";
import { CONTACT_INFO } from "../constants/contact";

/* ----------------------
   Constants
-----------------------*/
const MOBILE_NUMBER = CONTACT_INFO.phone;

/* ----------------------
   Component
-----------------------*/
const ContactSection: React.FC = () => {
  return (
    <section
      id='contact'
      role='region'
      aria-labelledby='contact-heading'
      className='relative w-screen -ml-[calc((100vw-100%)/2)] font-sans bg-gradient-to-b from-slate-50 via-white to-indigo-50/30 py-20 md:py-32 lg:py-40 overflow-hidden'
    >
      {/* Premium decorative background elements */}
      <div className='pointer-events-none absolute inset-0 -z-10'>
        {/* Top gradient blob */}
        <div className='absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-200/20 via-purple-200/10 to-transparent blur-3xl' />
        {/* Bottom gradient blob */}
        <div className='absolute -bottom-40 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-300/15 to-transparent blur-3xl' />
        {/* Center accent */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-radial from-indigo-100/5 to-transparent blur-3xl' />
      </div>

      <div className='mx-auto w-full max-w-screen-xl 2xl:max-w-screen-2xl px-6 lg:px-8 relative z-10'>
        {/* Premium Heading */}
        <Reveal className='text-center mb-12 md:mb-20'>
          <div className='inline-flex items-center gap-2 mb-4'>
            <div className='w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600' />
            <span className='text-xs font-bold text-indigo-600 uppercase tracking-widest'>
              连接我们
            </span>
            <div className='w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600' />
          </div>
          <h2
            id='contact-heading'
            className='font-serif font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-indigo-600
                       text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] mb-4'
          >
            随时与我们联系
          </h2>
          <p className='max-w-2xl mx-auto text-slate-600 text-[clamp(1rem,1.3vw,1.125rem)] leading-relaxed'>
            我们致力于为每位学生提供最优质的英语学习体验。欢迎通过微信、电话或其他方式与我们沟通，获取专业的课程方案和学习建议。
          </p>
        </Reveal>

        {/* Responsive grid with enhanced spacing */}
        <div className='grid gap-10 sm:gap-12 md:gap-16 lg:gap-20 md:grid-cols-12 items-start'>
          {/* Left column (info) - Premium cards */}
          <aside className='md:col-span-5 xl:col-span-4 md:sticky md:top-32 space-y-5'>
            <Reveal>
              <div className='text-slate-900 mb-2'>
                <p className='text-xs font-bold uppercase tracking-widest text-indigo-600'>
                  ✦ 联系信息
                </p>
              </div>
            </Reveal>

            <div className='space-y-5'>
              <Reveal>
                <div className='group relative'>
                  {/* Premium card background */}
                  <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/20 to-purple-100/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300' />

                  {/* Content */}
                  <div className='relative flex items-start gap-4 p-5 rounded-2xl border border-slate-200 group-hover:border-indigo-200 transition-all duration-300 backdrop-blur-sm'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105'>
                      <FiMapPin className='text-indigo-700 w-6 h-6' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-slate-900 mb-1 text-[clamp(1rem,1.1vw,1.125rem)]'>
                        地址
                      </h3>
                      <p className='text-slate-600 leading-relaxed text-sm'>
                        中国辽宁省大连市
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div className='group relative'>
                  <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/20 to-purple-100/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300' />

                  <div className='relative flex items-start gap-4 p-5 rounded-2xl border border-slate-200 group-hover:border-indigo-200 transition-all duration-300 backdrop-blur-sm'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105'>
                      <FiPhone className='text-indigo-700 w-6 h-6' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-slate-900 mb-1 text-[clamp(1rem,1.1vw,1.125rem)]'>
                        电话
                      </h3>
                      <p className='text-slate-600 font-medium tracking-wide text-sm'>
                        {MOBILE_NUMBER}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className='group relative'>
                  <div className='absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <div className='absolute inset-0 bg-gradient-to-r from-indigo-100/0 via-indigo-100/20 to-purple-100/0 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300' />

                  <div className='relative flex items-start gap-4 p-5 rounded-2xl border border-slate-200 group-hover:border-indigo-200 transition-all duration-300 backdrop-blur-sm'>
                    <div className='w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:shadow-lg group-hover:scale-105'>
                      <FiClock className='text-indigo-700 w-6 h-6' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-slate-900 mb-1 text-[clamp(1rem,1.1vw,1.125rem)]'>
                        服务时间
                      </h3>
                      <p className='text-slate-600 leading-relaxed text-sm'>
                        前台24小时在线
                        <br />
                        <span className='text-xs text-slate-500'>
                          登记：15:00 | 结束：11:00
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </aside>

          {/* Right column (WeChat QR Code) - Premium card */}
          <Reveal delay={80} className='md:col-span-7 xl:col-span-8'>
            <div className='group relative h-full'>
              {/* Gradient border effect */}
              <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-500' />
              <div className='absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-500' />

              {/* Main card */}
              <div className='relative bg-white/95 backdrop-blur-xl rounded-3xl p-10 sm:p-12 border border-slate-200/80 group-hover:border-indigo-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)] group-hover:shadow-[0_30px_80px_rgba(99,102,241,0.15)] transition-all duration-500 flex flex-col items-center text-center'>
                {/* Decorative accent line */}
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full' />

                {/* Title */}
                <h3 className='mt-4 text-slate-900 font-serif font-bold text-[clamp(1.5rem,2vw,1.875rem)] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-700 mb-2'>
                  微信联系我们
                </h3>
                <p className='text-sm text-indigo-600 font-semibold uppercase tracking-wider mb-8'>
                  最快捷的沟通方式
                </p>

                {/* WeChat QR Code Container */}
                <div className='mb-10 relative group/qr'>
                  <div className='absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl opacity-0 group-hover/qr:opacity-30 blur-xl transition-all duration-300' />
                  <div className='relative bg-white p-6 rounded-2xl border border-slate-200 group-hover/qr:border-indigo-300 transition-all duration-300 shadow-lg group-hover/qr:shadow-xl'>
                    <img
                      src='/images/Wechat_QR.jpg'
                      alt='WeChat QR Code'
                      className='w-64 h-64 rounded-xl border-2 border-slate-300/50 object-contain transition-transform duration-300 group-hover/qr:scale-105'
                      loading='lazy'
                      decoding='async'
                    />
                  </div>
                </div>

                {/* Description text */}
                <div className='space-y-4 max-w-lg'>
                  <div>
                    <p className='text-lg font-semibold text-slate-900 leading-relaxed'>
                      👆 扫描上方二维码
                    </p>
                    <p className='text-slate-600 text-sm mt-1'>
                      立即添加我们的微信，获得专业咨询
                    </p>
                  </div>

                  <div className='flex items-center justify-center gap-3 py-4 px-4 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-xl border border-indigo-100/50 backdrop-blur-sm'>
                    <span className='text-slate-600'>或直接拨打：</span>
                    <span className='font-bold text-lg text-indigo-600 tracking-wider'>
                      {MOBILE_NUMBER}
                    </span>
                  </div>

                  <p className='text-sm text-slate-600 leading-relaxed pt-2'>
                    通过微信或电话与我们联系，我们的专业团队将在最短时间内为您提供个性化的课程方案和详细咨询。无论您有任何疑问，我们都随时准备帮助您！
                  </p>
                </div>

                {/* Bottom accent */}
                <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full' />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
