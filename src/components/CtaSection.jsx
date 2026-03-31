import React from 'react';

const CtaSection = () => {
  return (
    <section
      className="w-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] px-4 py-16 sm:px-8 lg:px-16 xl:px-24 xl:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-10 text-center">
        <div className="flex max-w-[800px] flex-col gap-4">
          <h2
            id="cta-heading"
            className="font-manrope text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold leading-[1.366] text-white"
          >
            Ready to Transform Your Workflow?
          </h2>
          <p className="font-manrope text-base font-normal leading-[1.5] text-white/90">
            Join thousands of professionals who are already using DigiVibe to work
            smarter. Start your free trial today.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#products"
              className="inline-flex h-[52px] min-h-[52px] items-center justify-center rounded-full bg-white px-6 font-manrope text-base font-semibold leading-[1.366] text-[#4f39f6] shadow-lg shadow-violet-900/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              Explore Products
            </a>
            <a
              href="#pricing"
              className="inline-flex h-[52px] min-h-[52px] min-w-[163px] items-center justify-center rounded-full border border-white px-6 font-manrope text-base font-semibold leading-[1.366] text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/15 active:translate-y-0"
            >
              View Pricing
            </a>
          </div>
          <p className="font-manrope text-base font-normal leading-[1.25] text-white/80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
