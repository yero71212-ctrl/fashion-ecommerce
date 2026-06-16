// Philosophy.jsx
import HeroIMG from "../../assets/about2.png";

export default function Philosophy() {
  return (
    <section className="bg-black min-h-screen  ">
      <div className="grid lg:grid-cols-2 ">

        {/* Left */}
        <div className="flex items-center px-10 lg:px-24 py-24 mt-20">
          <div>
            <h2 className="leading-none mb-10">
              <span className="block text-white text-3xl md:text-5xl font-black">
                FASHION AS
              </span>

              <span className="block text-transparent stroke-text text-3xl md:text-5xl font-black">
                PHILOSOPHY
              </span>
            </h2>

            <div className="w-7 h-[3px] bg-red-600 mb-10" />

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              VEIL was never meant to be a brand. It began as a question:
              what does clothing look like when it refuses to perform
              for an audience?
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Seven years later, that question has become a global
              community of people who dress for themselves.
            </p>
          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src={HeroIMG}
            alt="HeroIMG"
            className="w-full h-full object-cover mt-20 "
          />
        </div>

      </div>
    </section>
  );
}