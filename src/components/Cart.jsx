import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCartShopping,
  faChartBar,
  faCreditCard,
  faFile,
  faImage,
  faPalette,
  faSearch,
  faTableColumns,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';

// Import product images
import resumeBuilderImg from '../assets/products/Resume Builder Pro.png';
import portfolioBuilderImg from '../assets/products/Portfolio Builder.png';
import logoGeneratorImg from '../assets/products/Logo Generator.png';
import aiImageToolImg from '../assets/products/AI Image Tool.png';
import invoiceToolImg from '../assets/products/Invoice Tool.png';
import seoToolImg from '../assets/products/SEO Tool.png';
import analyticsDashboardImg from '../assets/products/Analytics Dashboard.png';
import socialSchedulerImg from '../assets/products/Social Scheduler.png';
import videoEditingImg from '../assets/products/video-editing.png';

const IMAGE_MAP = {
  'Resume Builder Pro.png': resumeBuilderImg,
  'Portfolio Builder.png': portfolioBuilderImg,
  'Logo Generator.png': logoGeneratorImg,
  'AI Image Tool.png': aiImageToolImg,
  'Invoice Tool.png': invoiceToolImg,
  'SEO Tool.png': seoToolImg,
  'Analytics Dashboard.png': analyticsDashboardImg,
  'Social Scheduler.png': socialSchedulerImg,
  'video-editing.png': videoEditingImg,
};

const ICON_MAP = {
  file: faFile,
  layout: faTableColumns,
  palette: faPalette,
  image: faImage,
  'credit-card': faCreditCard,
  search: faSearch,
  'bar-chart': faChartBar,
  calendar: faCalendar,
};

function formatPrice(price, period) {
  const p = (period || '').toLowerCase();
  if (p === 'one-time') return `$${price} one-time`;
  if (p === 'yearly') return `$${price}/yr`;
  return `$${price}/mo`;
}

const Cart = () => {
  const { cart, removeFromCart, clearCart, cartTotal } = useCart();
  const [imageErrors, setImageErrors] = useState({});

  const handleRemove = (item) => {
    removeFromCart(item.id);
    toast.info(`${item.name} removed from cart`);
  };

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({ ...prev, [itemId]: true }));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    clearCart();
    toast.success('Order placed! Cart cleared.');
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-[#F2F2F2] bg-[#fafafa] px-8 py-16 text-center transition-colors duration-300 hover:border-violet-200/60">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="h-14 w-14 text-[#627382]/40 transition-transform duration-500 ease-out hover:scale-110"
        />
        <div>
          <p className="font-manrope text-xl font-bold text-[#101727]">
            Your cart is empty
          </p>
          <p className="mt-2 font-manrope text-base text-[#627382]">
            Browse products and tap Buy Now to add items here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <ul className="flex flex-col gap-4">
        {cart.map((item) => {
          const icon = ICON_MAP[item.icon] || faFile;
          const productImage = item.image ? IMAGE_MAP[item.image] : null;
          const qty = item.quantity || 1;
          return (
            <li
              key={item.id}
              className="flex items-center gap-4 rounded-2xl border-2 border-[#F2F2F2] bg-white p-4 transition-all duration-300 ease-out hover:border-violet-200/70 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#F2F2F2] bg-[#fafafa] overflow-hidden">
                {productImage && !imageErrors[item.id] ? (
                  <img
                    src={productImage}
                    alt={`${item.name} preview`}
                    className="h-full w-full object-cover"
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                  />
                ) : (
                  <FontAwesomeIcon icon={icon} className="h-6 w-6 text-[#4f39f6]" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-manrope font-bold text-[#101727]">{item.name}</p>
                <p className="font-manrope text-sm text-[#627382]">
                  {formatPrice(item.price, item.period)}
                  {qty > 1 ? ` × ${qty}` : ''}
                </p>
              </div>
              <div className="text-right">
                <p className="font-manrope font-bold text-[#101727]">
                  ${(item.price * qty).toFixed(0)}
                </p>
                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  className="mt-1 inline-flex items-center gap-1 rounded-lg px-2 py-1 font-manrope text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-50 hover:underline active:scale-95"
                >
                  <FontAwesomeIcon icon={faTrash} className="h-3.5 w-3.5" />
                  Remove
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 flex flex-col gap-4 rounded-2xl border-2 border-[#F2F2F2] bg-[#fafafa] p-6 transition-shadow duration-300 hover:shadow-md">
        <div className="flex items-center justify-between font-manrope text-lg">
          <span className="font-semibold text-[#627382]">Total</span>
          <span className="text-2xl font-bold text-[#101727]">
            ${cartTotal.toFixed(0)}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCheckout}
          className="flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] font-manrope text-base font-bold text-white shadow-md shadow-violet-500/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
