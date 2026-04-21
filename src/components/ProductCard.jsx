'use client';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="group cursor-pointer space-y-4">
      <div className="aspect-[3/4] bg-slate-50 rounded-2xl p-6 flex items-center justify-center overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
      </div>
      <div>
        <h3 className="font-bold text-sm tracking-tight line-clamp-1 group-hover:underline text-black">
          {product.title}
        </h3>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}