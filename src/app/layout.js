import "./globals.css";
import Navbar from "@/components/Navbar";
import { ShoppingBag } from 'lucide-react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-black selection:text-white">
        <Navbar />

        <main className="max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>

        <footer className="border-t py-12 mt-20">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="bg-slate-100 p-1 rounded text-slate-400">
                <ShoppingBag size={14} />
              </div>
              <span>© 2024 Trendly Next.js Demo</span>
            </div>
            
            <div className="flex gap-8">
              <span className="hover:text-black cursor-pointer transition-colors">Privacy</span>
              <span className="hover:text-black cursor-pointer transition-colors">Terms</span>
              <span className="hover:text-black cursor-pointer transition-colors">Github</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}