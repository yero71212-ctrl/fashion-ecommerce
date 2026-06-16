// AboutHero.jsx
import HeroIMG from "../../assets/about1.png";

export default function AboutHero() {
  return (
    <section className="relative h-screen">
      <img
         src={HeroIMG}
        alt="heroimg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="w-5 h-[1px] bg-red-600 " /> 
          <p className="text-red-600 tracking-[0.4em] uppercase text-sm mb-6">
           Est. Berlin 2019
          </p>

          <h1 className="leading-none">
            <span className="block text-white text-6xl md:text-9xl font-black">
              WE ARE
            </span>

            <span className="block text-transparent text-6xl md:text-9xl font-black stroke-text">
              VEIL
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}  