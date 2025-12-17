import FeatureSection from "../components/FeatureSection";

const Features = () => {
  return (
    <div className='font-sans text-gray-800 relative bg-gradient-to-b from-white via-slate-50/50 to-indigo-50/20 overflow-hidden'>
      {/* Premium decorative background elements */}
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        {/* Top right gradient blob */}
        <div className='absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-gradient-to-bl from-indigo-200/15 via-purple-200/5 to-transparent blur-3xl' />
        {/* Bottom left gradient blob */}
        <div className='absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-indigo-300/10 to-transparent blur-3xl' />
        {/* Center accent blob */}
        <div className='absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-200/5 to-transparent blur-3xl' />
      </div>
      <div className='relative z-10'>
        <FeatureSection />
      </div>
    </div>
  );
};

export default Features;
