'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { fetchProductById } from '@/lib/api';
import Loader from '@/components/Loader';

export default function ProductDetailPage({ params }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductById(params.id).then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) return <Loader message="Loading details..." />;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-5 duration-500 max-w-5xl mx-auto">
      <Link 
        href="/products" 
        className="flex items-center text-slate-400 hover:text-black font-bold mb-10 text-xs uppercase tracking-widest transition-colors"
      >
        <ArrowLeft size={14} className="mr-2" /> Back to list
      </Link>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-slate-50 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden group">
          <img 
            src={item.image} 
            alt={item.title} 
            className="max-h-[450px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 relative z-10" 
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-black/5 select-none z-0 uppercase">
            {item.category.split(' ')[0]}
          </div>
        </div>
        
        <div className="flex flex-col py-4">
          <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-4">{item.category}</span>
          <h1 className="text-4xl font-black tracking-tighter leading-tight mb-6 text-black italic uppercase">
            {item.title}
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">{item.description}</p>
          
          <div className="mt-auto pt-8 border-t flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Price</span>
              <span className="text-4xl font-black text-black tracking-tighter">${item.price}</span>
            </div>
            <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-tighter hover:bg-slate-800 transition-all active:scale-95 shadow-xl">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}