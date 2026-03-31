import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

/**
 * Fade-up when the element enters the viewport. Respects prefers-reduced-motion.
 * @param {number} delay - ms delay before the transition runs (use for staggered lists).
 */
const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setActive(true);
      return undefined;
    }
    const el = ref.current;
    if (!el) return undefined;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${active ? 'reveal-on-scroll--show' : ''} ${className}`.trim()}
      style={
        active && delay > 0 ? { transitionDelay: `${delay}ms` } : undefined
      }
    >
      {children}
    </div>
  );
};

export default Reveal;
