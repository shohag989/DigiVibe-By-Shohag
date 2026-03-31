import React from 'react';

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans renew monthly and you can cancel from your account without fees.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We offer a 14-day satisfaction window on Pro plans. Contact support for help.',
  },
  {
    q: 'Is my data secure?',
    a: 'We use industry-standard encryption and never sell your data to third parties.',
  },
];

const Faq = () => {
  return (
    <section
      id="faq"
      className="w-full bg-[#F9FAFC] px-4 py-16 sm:px-8 lg:px-16 xl:px-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-[800px]">
        <h2
          id="faq-heading"
          className="mb-10 text-center font-manrope text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold leading-[1.366] text-[#101727]"
        >
          FAQ
        </h2>
        <div className="flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border-2 border-[#F2F2F2] bg-white px-6 py-4 transition-all duration-300 ease-out open:border-violet-200/50 open:shadow-md open:shadow-violet-500/5 hover:border-violet-200/40 [&[open]>summary]:text-[#4f39f6]"
            >
              <summary className="cursor-pointer list-none font-manrope font-bold text-[#101727] transition-colors duration-200 marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
              </summary>
              <p className="mt-3 font-manrope text-base leading-relaxed text-[#627382]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
