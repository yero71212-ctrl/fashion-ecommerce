const categories = [
  "JACKET",
  "CARGO",
  "LEATHER",
  "TEE",
  "HOODIE",
];

export default function TrendingButtons({
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
        <h2 className="text-[10px] md:text-xs tracking-[4px] text-zinc-500 uppercase">
         TRENDING
        </h2>
      {categories.map((category) => (
        
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`
            px-4
            py-1
            rounded-full
            text-[8px]
            md:text-[11px]
            tracking-[2px]
            uppercase
            border
            transition-all
            duration-300
            ${
              activeCategory === category
                ? " border-red-500 text-red-500"
                : "bg-transparent text-zinc-400 border-zinc-700 hover:border-red-500 hover:text-red-500"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}