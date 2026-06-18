
import heroImage from "../../assets/SS26.jpg";


export default function newsGrid() {
  return (
    <div>

<section className="w-full bg-black text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
    
    {/* Top Text */}
    <p className="text-red-600 uppercase tracking-[3px] text-xs md:text-sm mb-4">
      Latest
    </p>

    {/* Main Content */}
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
      
      {/* Left Side */}
      <div>
        <h1 className="leading-none font-extrabold">
          
          {/* VISUAL */}
          <span className="
            block
            text-[30px]
            sm:text-[30px]
            md:text-[30px]
            lg:text-[50px]
          ">
           NEWS &
          </span>

          {/* CULTURE */}
          <span className="
            block
            text-transparent
            stroke-text
             text-[30px]
            sm:text-[30px]
            md:text-[30px]
            lg:text-[50px]
          ">
           EDITORIALS
          </span>

        </h1>
      </div>

      {/* Right Side */}
      <div className="max-w-md text-left lg:text-right">
        <p className="text-gray-400 text-sm md:text-base leading-7">
          Stories behind the garments. Culture behind the <br />
           brand. Perspectives that move before the trend <br /> does.


        </p>
      </div>

    </div>
  </div>
</section>



<section className="bg-black py-10 px-4">
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="News Hero"
          className="w-full h-[700px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl px-7 md:px-14">
            {/* Tags */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-red-600/50 text-white text-sm tracking-[3px] uppercase px-4 py-2 font-semibold">
                Collection
              </span>

              <span className="text-gray-400 text-sm">
                Featured
              </span>
            </div>

            {/* Title */}
            <h1 className="text-white text-2xl md:text-4xl font-bold uppercase leading-tight mb-6">
              The Architecture Of
              <br />
              Darkness: Inside Veil SS26
            </h1>

            {/* Description */}
            <p className="text-gray-400/75 text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
              Creative Director Asha Voss walks us through the conceptual
              framework behind VEIL's most ambitious collection to date —
              exploring the tension between structure and decay.
            </p>

            {/* Footer */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <button className="text-white uppercase tracking-[3px] font-semibold hover:translate-x-2 transition">
                Read Article →
              </button>

              <span className="text-gray-400/40">
                ⏱ 6 min read
              </span>

              <span className="text-gray-400/40">
                Feb 14, 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>








 

   

    </div>
  );
}