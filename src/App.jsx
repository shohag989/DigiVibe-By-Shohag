import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ToggleSection from './components/ToggleSection';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Reveal from './components/Reveal';
import products from './data/products.json';

function AppContent() {
  const { catalogView, setCatalogView } = useCart();

  return (
    <>
      <Navbar />
      <main className="w-full">
        <Reveal>
          <Banner />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <section
          id="products"
          className="w-full bg-white px-4 py-16 sm:px-8 xl:px-[200px] xl:py-[120px]"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-10">
            <Reveal>
              <div id="features">
                <ToggleSection view={catalogView} onViewChange={setCatalogView} />
              </div>
            </Reveal>
            {catalogView === 'products' ? (
              <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                {products.map((product, i) => (
                  <Reveal key={product.id} delay={i * 65}>
                    <div className="h-full">
                      <ProductCard product={product} />
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal>
                <Cart />
              </Reveal>
            )}
          </div>
        </section>
        <Reveal>
          <Steps />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <CtaSection />
        </Reveal>
      </main>
      <Footer />
      <ToastContainer position="top-right" theme="light" autoClose={2600} />
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
