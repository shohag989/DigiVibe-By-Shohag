import React, { useEffect, useState } from 'react';

const items = [
  { value: '50K+', label: 'Active Users', target: 50000, suffix: 'K+' },
  { value: '200+', label: 'Premium Tools', target: 200, suffix: '+' },
  { value: '4.9', label: 'Rating', target: 4.9, suffix: '', isRating: true },
];

const Stats = () => {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            startAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );

    const statsElement = document.getElementById('stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 fps
    const increment = duration / steps;

    items.forEach((item, index) => {
      let current = 0;
      const step = item.target / steps;

      const timer = setInterval(() => {
        current += step;
        if (current >= item.target) {
          current = item.target;
          clearInterval(timer);
        }

        setAnimatedValues((prev) => {
          const newValues = [...prev];
          newValues[index] = current;
          return newValues;
        });
      }, increment);
    });
  };

  const formatValue = (value, item) => {
    if (item.isRating) {
      return value.toFixed(1);
    }
    if (value >= 1000) {
      return `${Math.floor(value / 1000)}${item.suffix}`;
    }
    return `${Math.floor(value)}${item.suffix}`;
  };

  return (
    <section
      id="stats"
      className="w-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] px-4 py-12 sm:px-8 lg:px-16 xl:px-24 xl:py-20"
      aria-label="Platform statistics"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col items-stretch gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
        {items.map((item, i) => (
          <React.Fragment key={item.label}>
            <div className="flex min-w-0 flex-1 flex-col items-center gap-3 text-center transition-transform duration-300 ease-out will-change-transform hover:scale-[1.03] [@media(prefers-reduced-motion:reduce)]:hover:scale-100 [@media(prefers-reduced-motion:reduce)]:transition-none">
              <p className="font-manrope text-[clamp(2.5rem,6vw,3.75rem)] font-extrabold leading-[1.366] text-white">
                {hasAnimated ? formatValue(animatedValues[i], item) : '0'}
              </p>
              <p className="font-manrope text-xl font-medium leading-[1.366] text-white/80 sm:text-2xl">
                {item.label}
              </p>
            </div>
            {i < items.length - 1 && (
              <div
                className="hidden h-20 w-0 shrink-0 border-l-2 border-white/40 sm:block"
                aria-hidden
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Stats;
