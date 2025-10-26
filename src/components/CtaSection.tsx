import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const CtaSection = () => {
  return (
    <section className='py-24 px-6 bg-slate-900 text-white'>
      <div className='max-w-5xl mx-auto text-center'>
        <h2 className='text-4xl font-serif font-bold mb-6'>
          Ready to Boost Your Child’s English?
        </h2>
        <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>
          Live online lessons with native UK teachers. Personalised 1-to-1 and
          small-group classes, flexible scheduling, and measurable progress
          parents can trust.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Link
            to={"/Plans"}
            className='bg-white text-slate-900 hover:bg-white/90 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition cursor-pointer'
          >
            Book a Free Trial <FiArrowRight />
          </Link>
          <Link
            to={"/contact"}
            className='border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition cursor-pointer'
          >
            Speak to an Advisor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
