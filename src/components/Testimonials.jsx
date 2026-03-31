import React from 'react';

const quotes = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    text: 'DigiVibe cut our creative prep time in half. The templates alone paid for the subscription.',
  },
  {
    name: 'Marcus Reid',
    role: 'Founder',
    text: 'Finally one place for the tools we actually use. Onboarding was under five minutes.',
  },
  {
    name: 'Elena Voss',
    role: 'Marketing Lead',
    text: 'Our team switched from three subscriptions to DigiVibe. Cleaner billing and better support.',
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="w-full bg-white px-4 py-16 sm:px-8 lg:px-12 xl:px-16"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1600px]">
        <h2
          id="testimonials-heading"
          className="mb-10 text-center font-manrope text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold leading-[1.366] text-[#101727]"
        >
          Loved by creators
        </h2>
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="rounded-2xl border-2 border-[#F2F2F2] bg-[#F9FAFC] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-200/60 hover:bg-white hover:shadow-lg hover:shadow-violet-500/10"
            >
              <p className="font-manrope text-base leading-relaxed text-[#627382]">
                “{q.text}”
              </p>
              <footer className="mt-4 border-t border-[#F2F2F2] pt-4">
                <cite className="not-italic">
                  <span className="font-manrope font-bold text-[#101727]">{q.name}</span>
                  <span className="mt-1 block font-manrope text-sm text-[#627382]">
                    {q.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
