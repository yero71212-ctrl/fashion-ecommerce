import modelImg from "../../assets/model.png";

export default function StorySection() {
  return (
    <section className="bg-black text-white w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={modelImg}
            alt="fashion"
            className="w-full h-full object-cover"
          />

        
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center px-6 md:px-16 py-16">
          
          <div className="max-w-xl">
            <div  className="flex items-center gap-3 mb-4">
             <div className="w-8 h-[2px] bg-red-600"></div>
            <p className="text-red-600 uppercase tracking-[4px] text-xs md:text-sm mb-6">
              Our Story
            </p>
            </div>

            <h1 className="font-display text-5xl sm:text-5xl md:text-6xl font-medium leading-tight uppercase">
              We Don't <br />
              Follow Trends.
            </h1>


<h1
  className="
  font-display 
    text-5xl
    md:text-6xl
    font-medium
    uppercase
    text-transparent
    [-webkit-text-stroke:2px_#991b1b]
    drop-shadow-[0_0_10px_rgba(255,0,0,0.2)]
  "
>
  We Set Them.
</h1>
            <p className="text-gray-400 mt-8 leading-8 text-xs md:text-base">
              VEIL was born from a refusal to conform.
               We build garments that <br /> speak for the bold
                — the ones who walk into a room and shift the <br /> atmosphere.
                 Every stitch is deliberate. Every collection, a <br /> statement.
            </p>

            <p className="text-gray-500 mt-6 leading-8 text-xs md:text-base">
              From concept to creation, we work with a small team of <br />
               visionaries across Berlin, Tokyo, and New York
               — designing for <br /> culture, not consumption.
            </p>

           <button
  className="
    group
    mt-10
    flex
    items-center
    gap-4
    px-4
    py-2
    text-white
    uppercase
    tracking-[4px]
    md:text-sm
    text-xs
    font-semibold
    bg-transparent
    rounded-full
    transition-all
    duration-300
    hover:text-red-900
    hover:shadow-[0_0_25px_rgba(127,29,29,0.4)]
  "
>
  Discover Our Story

  <span
    className="
      w-4
      h-4
      rounded-full
      border-white-800
      flex
      items-center
      justify-center
      group-hover:translate-x-1
      transition-all
      duration-300
    "
  >
    →
  </span>
</button>

            {/* STATS */}
            <div className="flex gap-10 mt-14 border-t border-gray-800 pt-4">
              
              <div>
                <h2 className="text-red-600 md:text-2xl text-[17px] font-bold">
                  200+
                </h2>
                <p className="text-gray-500 text-xs uppercase">
                  Unique Pieces
                </p>
              </div>

              <div>
                <h2 className="text-red-600 md:text-2xl text-[17px] font-bold">
                  18
                </h2>
                <p className="text-gray-500 text-xs uppercase">
                  Countries
                </p>
              </div>

              <div>
                <h2 className="text-red-600 md:text-3xl text-[17px]  font-bold">
                  4
                </h2>
                <p className="text-gray-500 text-xs uppercase">
                  Seasons
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}