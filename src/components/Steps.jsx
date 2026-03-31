import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faTableCells,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

// Import step images
import createAccountImg from '../assets/Create Account.png';
import chooseProductsImg from '../assets/Choose Products.png';
import startCreatingImg from '../assets/Start Creating.png';

const steps = [
  {
    n: '01',
    title: 'Create Account',
    body: 'Sign up for free in seconds. No credit card required to get started.',
    icon: faUserPlus,
    image: createAccountImg,
  },
  {
    n: '02',
    title: 'Choose Products',
    body: 'Browse our catalog and select the tools that fit your needs.',
    icon: faTableCells,
    image: chooseProductsImg,
  },
  {
    n: '03',
    title: 'Start Creating',
    body: 'Download and start using your premium tools immediately.',
    icon: faDownload,
    image: startCreatingImg,
  },
];

const Steps = () => {
  return (
    <section
      className="w-full bg-[#F9FAFC] px-4 py-16 sm:px-8 lg:px-16 xl:px-24 xl:py-24"
      aria-labelledby="steps-heading"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-10">
        <div className="flex max-w-[1200px] flex-col items-center gap-4 text-center">
          <h2
            id="steps-heading"
            className="font-manrope text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.366] text-[#101727]"
          >
            Get Started in 3 Steps
          </h2>
          <p className="max-w-[640px] font-manrope text-base font-normal leading-[1.25] text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-[30px] md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative flex flex-col items-center gap-4 rounded-2xl border-2 border-[#F1F1F1] bg-white p-6 pt-14 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-200/70 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="flex h-[140px] w-[140px] items-center justify-center rounded-full border-2 border-[#E9E9FF] bg-white transition-transform duration-300 ease-out group-hover:scale-105">
                <img
                  src={s.image}
                  alt={`${s.title} icon`}
                  className="h-20 w-20 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="font-manrope text-2xl font-bold leading-[1.366] text-[#101727]">
                {s.title}
              </h3>
              <p className="font-manrope text-base font-normal leading-[1.25] text-[#627382]">
                {s.body}
              </p>
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] font-manrope text-sm font-bold leading-none text-white shadow-md shadow-violet-500/30 transition duration-300 ease-out group-hover:scale-110 group-hover:shadow-lg">
                {s.n}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
