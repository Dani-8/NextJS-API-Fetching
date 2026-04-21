import { Loader2 } from 'lucide-react';

export default function Loader({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-slate-400">
      <Loader2 className="animate-spin mb-4" size={32} />
      
      <p className="text-sm font-medium uppercase tracking-widest">{message}</p>
    </div>
  );
}