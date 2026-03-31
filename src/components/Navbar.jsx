import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import logoDigiVibe from '../assets/logo-digivibe.svg';

const navLinks = [
  { href: '#products', label: 'Products' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
];

const linkClass =
  'relative py-1 font-manrope text-base font-semibold leading-[1.2] text-[#101727]/90 transition-colors duration-300 hover:text-[#4f39f6] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] after:transition-all after:duration-300 after:ease-out hover:after:w-full';

const Navbar = () => {
  const { cartCount, setCatalogView } = useCart();
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToCart = () => {
    setCatalogView('cart');
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[#F2F2F2] bg-white transition-shadow duration-300 ease-out ${
        elevated
          ? 'shadow-[0_12px_40px_-16px_rgba(79,57,246,0.18)]'
          : 'shadow-none'
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-[1600px] items-center justify-between gap-6 px-4 sm:h-[92px] sm:px-8 lg:px-12 xl:px-16"
        aria-label="Main"
      >
        <a
          href="#"
          className="flex h-10 w-[180px] shrink-0 items-center transition-transform duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          <img
            src={logoDigiVibe}
            alt="DigiTools"
            className="h-10 w-[180px] object-contain object-left transition-opacity duration-300 hover:opacity-90"
            width={180}
            height={40}
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={goToCart}
            className="relative inline-flex h-4 w-4 items-center justify-center text-[#101727]/90 transition-all duration-300 hover:scale-110 hover:text-[#4f39f6] active:scale-95"
            title="Cart"
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-2.5 -top-2.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] px-1 font-manrope text-[11px] font-bold leading-none text-white">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </button>
          <a
            href="#login"
            className="font-manrope text-base font-semibold leading-[1.2] text-[#101727]/90 transition-colors duration-300 hover:text-[#4f39f6]"
          >
            Login
          </a>
          <a
            href="#products"
            className="inline-flex h-11 min-h-[44px] items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] px-4 font-manrope text-base font-semibold leading-[1.21] text-white shadow-md shadow-violet-500/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 active:translate-y-0"
          >
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={goToCart}
            className="relative inline-flex h-4 w-4 text-[#101727]/90"
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-2.5 -top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] px-1 text-[10px] font-bold leading-none text-white">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-[#101727] transition-colors duration-200 hover:bg-[#f5f5ff] hover:text-[#4f39f6]"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#F2F2F2] bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-manrope text-base font-semibold text-[#101727]/90"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              className="font-manrope font-semibold text-[#101727]/90"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
            <a
              href="#products"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] px-4 font-manrope font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
