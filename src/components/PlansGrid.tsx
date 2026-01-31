import React from "react";

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

const PlansGrid: React.FC<PlansGridProps> = ({ Plans, limit }) => {
  const list = typeof limit === "number" ? Plans.slice(0, limit) : Plans;

  return (
    <div className='grid gap-8 md:grid-cols-2 place-items-stretch'>
      {list.map((Plan, idx) => (
        <article
          key={idx}
          className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition hover:shadow-[0_18px_36px_rgba(0,0,0,0.10)]'
        >
          {/* Media */}
          <div className='relative w-full overflow-hidden'>
            <div className='aspect-[16/9] w-full'>
              <img
                src={Plan.image}
                alt={Plan.title}
                className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]'
                loading='lazy'
              />
            </div>
            {/* Price badge (uses your price field) */}
            <div className='absolute left-4 top-4 rounded-full bg-white/85 px-4 py-1.5 text-xs font-semibold text-indigo-700 shadow backdrop-blur'>
              {Plan.price}
            </div>
            {/* subtle gradient overlay at bottom of image */}
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white/95 to-transparent' />
          </div>

          {/* Body */}
          <div className='flex min-h-0 flex-1 flex-col p-6 sm:p-8'>
            <h3 className='text-2xl font-semibold leading-snug text-slate-900'>
              {Plan.title}
            </h3>

            <p className='mt-3 text-slate-700 leading-relaxed'>
              {Plan.description}
            </p>

            {/* Tags */}
            <div className='mt-4 flex flex-wrap gap-2'>
              {Plan.tags.map((tag, i) => (
                <span
                  key={i}
                  className='rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm text-indigo-700'
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA pinned to bottom for perfect alignment */}
            <div className='mt-auto pt-6'>
              <a
                href='https://dashboard.linguasphere.cn/'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
              >
                立即预约
              </a>
            </div>
          </div>

          {/* Focus ring on hover */}
          <span className='pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition group-hover:ring-slate-900/5' />
        </article>
      ))}
    </div>
  );
};

export default PlansGrid;
