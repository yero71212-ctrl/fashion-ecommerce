// Values.jsx

const values = [
  {
    number: "01",
    title: "RESTRAINT",
    text: "We believe in doing less, better. Every element earns its place.",
  },
  {
    number: "02",
    title: "PERMANENCE",
    text: "We build for wardrobes, not trends.",
  },
  {
    number: "03",
    title: "DARKNESS",
    text: "Darkness as a design language that demands engagement.",
  },
  {
    number: "04",
    title: "ANONYMITY",
    text: "The garment speaks first. The logo is never the loudest.",
  },
];

export default function Values() {
  return (
    
    <section className="bg-[#080000] py-28 px-6 mt-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-white text-4xl md:text-6xl font-black mb-20">
          OUR VALUES
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((item) => (
            
            <div
              key={item.number} // border-white/10 bg-white/[0.03] hover:bg-red-600/10
              className="border border-red-950/20 bg-red-950/5 p-10 min-h-[320px] transition"
            >
              <div className="text-red-900 text-5xl font-black mb-10">
                {item.number}
              </div>

              <h3 className="text-white text-2xl font-bold tracking-wider mb-6">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
{/*  */}
      </div>
    </section>

   
  );
}