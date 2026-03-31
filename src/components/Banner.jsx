import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import heroBanner from '../assets/banner image.jpg';

/**
 * Header (node 2:335) — Figma: row gap 60px, padding 60px 200px;
 * left column: stack gap 32px; text block gap 16px; CTAs gap 16px; pill gap 5px, pad 8×16;
 * headline 72px/800, lh 1.1667; body 18px/400, lh 1.111; buttons h52, pad 12×16, inner gap 10; image 500×590, r8.
 */
const Banner = () => {
  return (
    <section
      id="banner"
      className="w-full bg-white px-4 py-10 sm:px-8 lg:px-20 xl:px-32 xl:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-stretch gap-10 lg:flex-row lg:items-center lg:gap-[60px]">
        {/* Left: column gap 32px (Figma layout_HKSOXH) */}
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          {/* Text block: gap 16px (layout_PA1TWS) */}
          <div className="flex flex-col gap-4">
            {/* Pill: row gap 5px, padding 8×16, radius 1000px */}
            <div className="inline-flex w-fit items-center gap-[5px] rounded-[1000px] bg-[#E1E7FF] px-4 py-2">
              <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center text-[#4f39f6]" aria-hidden>
                <FontAwesomeIcon icon={faWandMagicSparkles} className="h-4 w-4" />
              </span>
              <span
                className="font-manrope text-base font-medium leading-[1.366] text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(88deg, #4f39f6 0%, #9514fa 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                New: AI-Powered Tools Available
              </span>
            </div>

            <h1 className="max-w-[720px] text-left font-manrope text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold leading-[1.1667] text-[#101727]/90 xl:text-[72px]">
              Supercharge Your
              <br />
              Digital Workflow
            </h1>

            <p className="max-w-xl text-left font-manrope text-lg font-normal leading-[1.1111] text-[#627382]">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today.
            </p>
          </div>

          {/* CTAs: row gap 16px (layout_23PVQP) */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex h-[52px] items-center justify-center rounded-[100px] bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] px-4 py-3 font-manrope text-base font-bold leading-[1.366] text-white"
            >
              Explore Products
            </a>

            <div className="rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] p-px">
              <button
                type="button"
                className="group inline-flex h-[50px] min-w-0 items-center gap-2.5 rounded-full bg-white px-4 py-3 font-manrope text-base font-bold leading-[1.366]"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] text-white">
                  <FontAwesomeIcon icon={faPlay} className="h-2.5 w-2.5 pl-0.5" />
                </span>
                <span className="bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero image: 500 × 590 container for proper layout, plain scaling */}
        <div className="relative w-full max-w-[500px] shrink-0 lg:mx-0 lg:w-[500px]">
          <img
            src={heroBanner}
            alt="Creative workspace with laptop and design tools"
            className="w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
