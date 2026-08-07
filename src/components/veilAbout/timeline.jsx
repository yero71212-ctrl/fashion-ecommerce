export default function Timeline() {
  const timelineData = [
    {
      year: "2019",
      title: "Founded in Berlin",
      desc: "VEIL begins as an anonymous design collective.",
    },
    {
      year: "2020",
      title: "The Archive Era",
      desc: "Three back-to-back drops establish VEIL's archive culture.",
    },
    {
      year: "2021",
      title: "Paris Recognition",
      desc: "Featured internationally and expanded globally.",
    },
    {
      year: "2022",
      title: "The VEIL Store",
      desc: "Flagship concept store opens in Mitte.",
    },
    {
      year: "2024",
      title: "The Collective Grows",
      desc: "Design team expands and partners with textile mills.",
    },
    {
      year: "22026",
      title: "SS26: Dissolved Boundaries",
      desc: "The most ambitious collection to date. 24 pieces. One singular vision. The VEIL universe fully realized.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto relative">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-zinc-700/40 -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative mb-32 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 top-10 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-400 border-4 border-black z-10"></div>

            {/* Card */}
            <div className="w-[47%]  bg-red-900/15 p-8 shadow-[0_0_30px_rgba(255,0,0,0.08)]">
              <h2 className="text-red-600 text-2xl md:text-3xl font-bold tracking-wider mb-4">
                {item.year}
              </h2>

              <h3 className="text-white text-1xl md:text-2xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-1xl leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}