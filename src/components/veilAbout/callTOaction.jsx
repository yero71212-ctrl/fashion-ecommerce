export default function JoinCollective() {
  return (
    <section className="relative bg-black py-40 overflow-hidden">
      
      {/* Red Glow */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-red-500/40 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        
        <h2 className="font-display text-white text-5xl md:text-6xl font-bold uppercase tracking-[8px] mb-10">
          JOIN THE COLLECTIVE
        </h2>

        <p className="text-gray-400/40 text-lg leading-relaxed max-w-lg mx-auto mb-12">
          Explore the current collection and become part of a
          community that moves differently.
        </p>

        <button className="group bg-[#e3372e] hover:bg-[#ff6b63] transition-all duration-300 px-10 py-3 
        rounded-full text-white uppercase tracking-[4px] font-semibold shadow-[0_0_40px_rgba(255,90,82,0.6)]">
          Explore The Collection
          <span className="ml-3 inline-block group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>

      </div>
    </section>
  );
} 