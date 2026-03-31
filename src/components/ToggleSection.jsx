import React from 'react';
import { useCart } from '../context/CartContext';

const ToggleSection = ({ view, onViewChange }) => {
  const { cartCount } = useCart();

  return (
    <div className="mx-auto flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
      <h2 className="font-manrope text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.366] text-[#101727]">
        Premium Digital Tools
      </h2>
      <p className="max-w-[720px] font-manrope text-base font-normal leading-[1.25] text-[#627382]">
        Choose from our curated collection of premium digital products designed to
        boost your productivity and creativity.
      </p>

      <div
        className="mt-2 inline-flex rounded-full border border-[#F6F6F6] bg-white p-1 shadow-sm transition-shadow duration-300 hover:shadow-md"
        role="tablist"
        aria-label="Products or cart"
      >
        <button
          type="button"
          role="tab"
          aria-selected={view === 'products'}
          onClick={() => onViewChange('products')}
          className={`min-w-[120px] rounded-full px-4 py-3.5 font-manrope text-base leading-[1.366] transition-all duration-300 ease-out ${
            view === 'products'
              ? 'bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] font-bold text-white shadow-[0_3px_8px_rgba(97,7,236,0.3)]'
              : 'bg-transparent font-medium text-[#25065D]'
          }`}
        >
          Products
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={view === 'cart'}
          onClick={() => onViewChange('cart')}
          className={`min-w-[120px] rounded-full px-4 py-3.5 font-manrope text-base leading-[1.366] transition-all duration-300 ease-out ${
            view === 'cart'
              ? 'bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] font-bold text-white shadow-[0_3px_8px_rgba(97,7,236,0.3)]'
              : 'bg-transparent font-medium text-[#25065D]'
          }`}
        >
          Cart ({cartCount})
        </button>
      </div>
    </div>
  );
};

export default ToggleSection;
