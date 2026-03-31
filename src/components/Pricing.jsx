import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const plans = [
  {
    name: 'Starter',
    desc: 'Perfect for getting started',
    price: '$0/month',
    highlight: false,
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'gradient',
  },
  {
    name: 'Pro',
    desc: 'Best for professionals',
    price: '$29/month',
    highlight: true,
    badge: 'Most Popular',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    ctaStyle: 'white',
  },
  {
    name: 'Enterprise',
    desc: 'For teams and businesses',
    price: '$99/month',
    highlight: false,
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'gradient',
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full bg-white px-4 py-16 sm:px-8 xl:px-[200px] xl:py-[120px]"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-10">
        <div className="flex max-w-[1200px] flex-col items-center gap-4 text-center">
          <h2
            id="pricing-heading"
            className="font-manrope text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.366] text-[#101727]"
          >
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[640px] font-manrope text-base font-normal leading-[1.25] text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-[30px] lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col gap-6 rounded-2xl border-2 p-6 transition-all duration-300 ease-out ${
                plan.highlight
                  ? 'border-transparent bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/35'
                  : 'border-[#F2F2F2] bg-[#F9FAFC] hover:-translate-y-1 hover:border-violet-200/80 hover:shadow-xl hover:shadow-violet-500/10'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 right-6 rounded-full bg-[#FEF3C6] px-3 py-1 font-manrope text-sm font-medium text-[#BB4D00]">
                  {plan.badge}
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h3
                  className={`font-manrope text-2xl font-bold leading-[1.366] ${
                    plan.highlight ? 'text-white' : 'text-[#101727]'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`font-manrope text-base font-normal leading-[1.25] ${
                    plan.highlight ? 'text-white/80' : 'text-[#627382]'
                  }`}
                >
                  {plan.desc}
                </p>
              </div>
              <p
                className={`font-manrope text-2xl font-bold leading-[1.366] ${
                  plan.highlight ? 'text-white' : 'text-[#101727]'
                }`}
              >
                {plan.price}
              </p>
              <ul className="flex flex-col gap-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        plan.highlight ? 'text-white' : 'text-[#30B868]'
                      }`}
                    />
                    <span
                      className={`font-manrope text-base font-medium leading-[1.25] ${
                        plan.highlight ? 'text-white' : 'text-[#627382]'
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.ctaStyle === 'white' ? (
                <button
                  type="button"
                  className="mt-auto flex h-[52px] w-full items-center justify-center rounded-full bg-white font-manrope text-base font-bold leading-[1.366] shadow-md shadow-violet-900/10 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-lg active:translate-y-0"
                >
                  <span className="bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] bg-clip-text text-transparent">
                    {plan.cta}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  className="mt-auto flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] font-manrope text-base font-bold leading-[1.366] text-white shadow-md shadow-violet-500/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/35 active:translate-y-0 active:scale-[0.99]"
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
