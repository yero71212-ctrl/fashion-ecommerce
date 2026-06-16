//shopHero
export default function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0000] via-[#220000] to-black opacity-95" />

      {/* Content */}
      <div className="relative px-6 md:px-16 py-24 md:py-36">
        {/* Small Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-red-600"></span>

          <p className="uppercase tracking-[5px] text-red-500 text-xs md:text-sm">
            All Products
          </p>
        </div>

        {/* Title */}
        <h1 className="text-white text-5xl sm:text-6xl md:text-8xl font-extrabold uppercase leading-none tracking-tight">
          THE SHOP
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-lg text-gray-400 text-sm md:text-lg leading-7">
          Every piece. Every season. Designed for those who refuse to
          compromise.
        </p>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-red-900/30"></div>
    </section>
  );
}