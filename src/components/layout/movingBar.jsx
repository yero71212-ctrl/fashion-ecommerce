export default function MovingBar() {
  const items = [
    "BOLD.",
    "MODERN.",
    "INDEPENDENT.",
    "BOLD.",
    "MODERN.",
    "INDEPENDENT.",
  ];

  return (
    <div className="relative overflow-hidden bg-[#7A0000] border-y border-white/10 py-6">
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#7A0000] to-transparent z-10" />

      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#7A0000] to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((text, index) => (
          <div key={index} className="flex items-center flex-shrink-0">
            <span className="text-white md:text-5xl text-3xl font-display tracking-[0.15em] uppercase">
              {text}
            </span>

            <span className="w-2 h-2 rounded-full bg-white/50 mx-8" />
          </div>
        ))}
      </div>
    </div>
  );
}