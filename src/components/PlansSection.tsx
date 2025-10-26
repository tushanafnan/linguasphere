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
      title: "1-to-1 Online Tutoring",
      description:
        "Personalised English coaching with an expert tutor. Minimum 6 hours with flexible weekly/bi-weekly scheduling. Each lesson targets clear goals and ends with a concise progress note for parents.",
      // keep price for overlay only
      price: "¥330/hour · min 6 hours",
      image:
        "https://t4.ftcdn.net/jpg/03/76/92/79/360_F_376927916_fEOIvubxQSXb9YbNgvvpkdkQsbUsMZ9r.jpg",
      tags: [
        "Personalised 1:1",
        "DBS-checked tutor",
        "Flexible schedule",
        "Progress feedback",
      ],
    },
    {
      title: "Small-Group Online Tutoring",
      description:
        "High-value classes with 4–6 learners led by the same expert teachers. Collaborative tasks, structured interaction, and weekly study snapshots for parents keep momentum high.",
      price: "¥180/hour · ¥162 with 6+ hours",
      image:
        "https://readwritethink.ca/wp-content/uploads/2021/01/online-tutoring.jpg",
      tags: [
        "4–6 learners",
        "Peer interaction",
        "Expert instructor",
        "Weekly snapshot",
      ],
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
            Learning Experience
          </h2>
          <p className='mt-5 text-lg text-slate-600 max-w-3xl mx-auto'>
            Choose personalised 1-to-1 coaching or engaging small-group
            sessions. Every class is live, interactive, and focused on
            measurable progress you can trust.
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
