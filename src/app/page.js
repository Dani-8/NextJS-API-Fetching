import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronRight, Star, ArrowLeft, Loader2, Zap, Globe, ShieldCheck } from 'lucide-react';

export default function App() {
  const [route, setRoute] = useState({ path: 'home', params: null });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const navigate = (path, params = null) => {
    setRoute({ path, params });
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate('home')}
          >
            <div className="bg-black p-1.5 rounded text-white">
              <ShoppingBag size={18} />
            </div>
            <span className="font-bold tracking-tighter text-xl italic">TRENDLY</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            {['home', 'products', 'about'].map((item) => (
              <button 
                key={item}
                onClick={() => navigate(item)}
                className={`capitalize transition-colors ${route.path.startsWith(item) ? 'text-black font-bold' : 'text-slate-400 hover:text-black'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {loading && (
          <div className="fixed inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-40">
            <Loader2 className="animate-spin text-black" size={40} />
          </div>
        )}

        {(() => {
          switch (route.path) {
            case 'home': return <HomeView onNavigate={navigate} />;
            case 'products': return <ProductList products={products} onNavigate={navigate} />;
            case 'product-detail': return <ProductDetail id={route.params} onNavigate={navigate} />;
            case 'about': return <AboutView />;
            default: return <HomeView onNavigate={navigate} />;
          }
        })()}
      </main>
    </div>
  );
}

const HomeView = ({ onNavigate }) => (
  <div className="space-y-24 py-10">
    <section className="text-center space-y-8 max-w-3xl mx-auto">
      <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold tracking-widest uppercase">
        Spring Collection 2024
      </div>
      <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none">
        QUALITY STUFF. <br />
        <span className="text-slate-400 font-light italic">NO COMPROMISE.</span>
      </h1>
      <p className="text-slate-500 text-lg max-w-xl mx-auto">
        A curated selection of the world's finest essentials, powered by high-performance API integration.
      </p>
      <div className="flex justify-center gap-4">
        <button 
          onClick={() => onNavigate('products')}
          className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
        >
          Explore Catalog
        </button>
        <button 
          onClick={() => onNavigate('about')}
          className="border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors"
        >
          Our Story
        </button>
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-20">
      <div className="space-y-4 text-center px-4">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Zap size={20} />
        </div>
        <h3 className="font-bold text-xl tracking-tight">Fast Shipping</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Global logistics network ensures your order arrives within 48 hours.
        </p>
      </div>
      <div className="space-y-4 text-center px-4">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Globe size={20} />
        </div>
        <h3 className="font-bold text-xl tracking-tight">Eco Conscious</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          100% biodegradable packaging and carbon-neutral manufacturing.
        </p>
      </div>
      <div className="space-y-4 text-center px-4">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck size={20} />
        </div>
        <h3 className="font-bold text-xl tracking-tight">Secure Payments</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Military-grade encryption for every single transaction you make.
        </p>
      </div>
    </section>
  </div>
);

const ProductList = ({ products, onNavigate }) => (
  <div className="space-y-8 animate-in fade-in duration-700">
    <div>
      <h1 className="text-4xl font-black tracking-tighter uppercase">Catalog</h1>
      <p className="text-slate-500 italic">Syncing live inventory from server...</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
      {products.map(p => <ProductCard key={p.id} product={p} onNavigate={onNavigate} />)}
    </div>
  </div>
);

const ProductDetail = ({ id, onNavigate }) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setItem(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 max-w-5xl mx-auto">
      <button 
        onClick={() => onNavigate('products')}
        className="flex items-center text-slate-400 hover:text-black font-bold mb-10 text-xs uppercase tracking-widest"
      >
        <ArrowLeft size={14} className="mr-2" /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-slate-50 rounded-3xl p-12 flex items-center justify-center group">
          <img src={item.image} alt={item.title} className="max-h-[450px] object-contain group-hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="flex flex-col py-4">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">{item.category}</span>
          <h1 className="text-4xl font-black tracking-tighter leading-tight mb-6">{item.title}</h1>
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-black text-white px-3 py-1 text-xs font-bold rounded">★ {item.rating?.rate}</span>
            <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Verified Seller</span>
          </div>
          <p className="text-slate-600 leading-relaxed mb-10">{item.description}</p>
          <div className="mt-auto pt-8 border-t">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black">${item.price}</span>
              <button className="bg-black text-white px-12 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutView = () => (
  <div className="max-w-xl mx-auto py-20 space-y-6">
    <h1 className="text-4xl font-black tracking-tighter uppercase">Our Philosophy</h1>
    <p className="text-slate-600 text-lg leading-relaxed">
      We believe in clean interfaces and robust data pipelines. This project demonstrates how <strong>Next.js</strong> handles complex routing and external API integration seamlessly.
    </p>
  </div>
);

const ProductCard = ({ product, onNavigate }) => (
  <div 
    className="group cursor-pointer space-y-4"
    onClick={() => onNavigate('product-detail', product.id)}
  >
    <div className="aspect-[3/4] bg-slate-50 rounded-2xl p-6 flex items-center justify-center overflow-hidden relative">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
    </div>
    <div>
      <h3 className="font-bold text-sm tracking-tight line-clamp-1 group-hover:underline">{product.title}</h3>
      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">${product.price}</p>
    </div>
  </div>
);