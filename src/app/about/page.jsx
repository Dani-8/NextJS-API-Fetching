export default function About() {
  return (
    <div className="max-w-xl mx-auto py-20 space-y-8 animate-in fade-in duration-700 text-black">
      <h1 className="text-4xl font-black tracking-tighter uppercase italic">About Store</h1>
      
      <div className="space-y-6 text-slate-500 text-lg leading-snug">
        <p>
          This is a modern <strong>Next.js</strong> store demo. It is designed to be fast, 
          clean, and easy to navigate.
        </p>
        
        <p>
          We use a <strong>modular structure</strong> to keep the code organized, 
          making it simple to manage products and user experience.
        </p>
      </div>
    </div>
  );
}