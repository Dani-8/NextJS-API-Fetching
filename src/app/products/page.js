import { fetchProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase text-black">Catalog</h1>
          <p className="text-slate-500 italic">Syncing live inventory from server...</p>
        </div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest pb-1">
          {products.length} Items Found
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}