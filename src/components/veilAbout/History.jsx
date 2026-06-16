//shopHero
export default function history() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Gradient */}
      {/* //<div className="absolute inset-0 bg-gradient-to-r from-[#1a0000] via-[#220000] to-black opacity-95" /> */}

      {/* Content */}
      <div className="relative px-6 md:px-16 py-24 md:py-36">
        {/* Small Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-red-600"></span>

          <p className="uppercase tracking-[5px] text-red-500 text-xs md:text-sm">
            History
          </p>
        </div>

        {/* Title */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-none tracking-tight">
          THE TIMELINE
        </h1>

      </div>

    </section>
  );
}