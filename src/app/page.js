import Link from 'next/link';
import { Zap, Globe, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 py-10 animate-in fade-in duration-700">
      <section className="text-center space-y-8 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-xs font-bold tracking-widest uppercase text-black">
          Spring Collection 2024
        </div>
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-none text-black">
          QUALITY STUFF. <br />
          <span className="text-slate-400 font-light italic">NO COMPROMISE.</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          A curated selection of the world's finest essentials, powered by high-performance API integration.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/products" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
            Explore Catalog
          </Link>
          <Link href="/about" className="border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors text-black">
            Our Story
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-20">
        {[
          { icon: <Zap />, title: "Fast Shipping", desc: "Global logistics network ensures arrival within 48 hours." },
          { icon: <Globe />, title: "Eco Conscious", desc: "100% biodegradable packaging and carbon-neutral." },
          { icon: <ShieldCheck />, title: "Secure Payments", desc: "Military-grade encryption for every single transaction." }
        ].map((feature, i) => (
          <div key={i} className="text-center px-4 group">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors duration-500">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl tracking-tight text-black">{feature.title}</h3>
            <p className="text-slate-500 text-sm">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}