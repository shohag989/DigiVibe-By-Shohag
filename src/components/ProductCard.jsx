import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faChartBar,
  faCheck,
  faCreditCard,
  faFile,
  faImage,
  faPalette,
  faSearch,
  faTableColumns,
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
  if (p === 'one-time') return `$${price}/one-time`;
  if (p === 'yearly') return `$${price}/yr`;
  return `$${price}/mo`;
}

function badgeStyle(tag) {
  const t = (tag || '').toLowerCase();
  if (t === 'new' || t.includes('trial')) {
    return 'bg-[#DBFCE7] text-[#0A883E]';
  }
  if (
    t === 'popular' ||
    t.includes('best') ||
    t === 'sale' ||
    t === 'trending'
  ) {
    return 'bg-[#FEF3C6] text-[#BB4D00]';
  }
  return 'bg-[#E1E7FF] text-[#4f39f6]';
}

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showAdded, setShowAdded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const icon = ICON_MAP[product.icon] || faFile;
  const productImage = product.image ? IMAGE_MAP[product.image] : null;

  useEffect(() => {
    if (!showAdded) return undefined;
    const t = setTimeout(() => setShowAdded(false), 2000);
    return () => clearTimeout(t);
  }, [showAdded]);

  const handleBuy = () => {
    addToCart(product);
    setShowAdded(true);
    toast.success(`${product.name} added to cart`, { toastId: `add-${product.id}` });
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="group relative flex h-full min-h-[460px] flex-col gap-4 rounded-2xl border-2 border-[#F2F2F2] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-200/90 hover:shadow-xl hover:shadow-violet-500/10">
      <div
        className={`absolute right-5 top-2.5 z-10 rounded-full px-3 py-1.5 font-manrope text-sm font-medium leading-[1.366] ${badgeStyle(product.tag)}`}
      >
        {product.tagType}
      </div>

      {/* Product image in top left corner */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-lg border border-[#F2F2F2] bg-white shadow-sm overflow-hidden">
          {productImage && !imageError ? (
            <>
              <img
                src={productImage}
                alt={`${product.name} preview`}
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FontAwesomeIcon icon={icon} className="h-5 w-5 text-[#4f39f6]" />
                </div>
              )}
            </>
          ) : (
            <FontAwesomeIcon icon={icon} className="h-5 w-5 text-[#4f39f6]" />
          )}
        </div>
      </div>

      {/* Add top padding to account for absolute positioned image */}
      <div className="pt-16 flex flex-col gap-5">
        <div className="flex min-h-[88px] flex-col justify-between gap-2">
          <h3 className="font-manrope text-2xl font-bold leading-[1.366] text-[#101727]">
            {product.name}
          </h3>
          <p className="font-manrope text-base font-normal leading-[1.25] text-[#627382]">
            {product.description}
          </p>
        </div>

        <p className="font-manrope text-2xl font-bold leading-[1.366] text-[#101727]">
          {formatPrice(product.price, product.period)}
        </p>

        <ul className="flex flex-col gap-3">
          {(product.features || []).map((f) => (
            <li key={f} className="flex items-start gap-2">
              <FontAwesomeIcon
                icon={faCheck}
                className="mt-0.5 h-5 w-5 shrink-0 text-[#30B868]"
              />
              <span className="font-manrope text-base font-medium leading-[1.25] text-[#627382]">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleBuy}
          className="mt-auto flex h-[52px] w-full items-center justify-center rounded-full bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] font-manrope text-base font-bold leading-[1.366] text-white shadow-md shadow-violet-500/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/30 active:translate-y-0 active:scale-[0.98] disabled:opacity-80"
        >
          {showAdded ? 'Added to cart' : 'Buy Now'}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
