
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import HeroIMG from "../../assets/SS26.jpg";
import SS26 from "../../assets/SS26.jpg";
import FW25 from "../../assets/FW25.jpg";
import RESORT from "../../assets/RESORT.jpg";
import ARCHIVE from "../../assets/ARCHIVE.jpg";

export default function Collections() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
       <section className="relative px-4 h-screen overflow-hidden">
      
      {/* Background Image */}
    <img
          src={HeroIMG}
          alt="Collections"
          className="w-full h-full object-cover"
        />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55">

      {/* Content */}
      <div className="relative z-10 h-full flex items-center ">
        <div className="max-w-5xl mx-auto px-8 w-full text-sm">
          
          <div className="max-w-xl">
            
            <p className="uppercase tracking-[6px] text-red-500 mt-10 text-sm mb-6">
              Current Season
            </p>

            <h1 className="text-white font-black leading-none">
              <span className="block text-5xl md:text-7xl">
                SS26
              </span>
                <span className="text-transparent text-5xl md:text-8xl font-black [-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)]">
                 SPRING
                </span>
            </h1>

            <p className="mt-8 text-gray-300 leading-relaxed">
              Boundaries dissolved. The SS26 collection explores
              the duality between <br /> restraint and expression —
              structured forms, raw textures, and editorial <br />
              colour blocking for those who move first.
            </p>

            <div className="flex items-center gap-6 mt-10">
              
              <button className="bg-red-600 hover:bg-red-700 transition px-10 py-4 rounded-full text-white uppercase tracking-wider font-semibold">
                SHOP SS26 →
              </button>

              <span className="text-white/70">
                24 pieces in this collection
              </span>

            </div>

          </div>

        </div>
      </div>
      </div>
    </section>

      {/* INTRO */}
      <section className="max-w-8xl mx-auto px-6 lg:px-20 py-20">
        <span className="text-red-500 uppercase tracking-[4px] text-xs">
          All Seasons
        </span>

        <div className="flex flex-col lg:flex-row justify-between mt-6 gap-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase">
            Collections
          </h2>

          <p className="text-gray-400 max-w-md">
            From debut arrivals to current releases,
            every collection captures a distinct mood,
            vision and era.
          </p>
        </div>
      </section>

 {/* CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 pb-24">
        <div className="grid md:grid-cols-2 gap-8">

          {/* SS26 */}
          <Link
  to="/collections/ss26"
  className="group block"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    <img
      src={SS26}
      alt="SS26"
      className="
        w-full
        h-[400px]
        object-cover
        transition-all
        duration-700
        group-hover:scale-110
      "
    />

    {/* TOP TEXT */}
    <div className="absolute bottom-6 left-6 text-white">
      <p className="text-xs uppercase tracking-[4px] text-gray-300">
        Spring / Summer 2026
      </p>

      <h2 className="text-5xl font-bold mt-2">
        SS26
      </h2>
    </div>

    <div className="absolute bottom-2 right-6">
      <span className="text-gray-300 text-sm">
      6 pieces
     </span>


    </div>
    {/* SHOP NOW */}
    <div
      className="
      bg-black/40
backdrop-blur-sm
rounded-full
shadow-lg
        absolute
        bottom-8
        right-6
        flex
        items-center
        gap-2
        text-red-500
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
      "
    >
      <span className="uppercase text-sm">
        Shop Now
      </span>

      <ArrowUpRight size={18} />
    </div>
  </div>

 
  {/* DESCRIPTION */}
  <div
    className="
      max-h-0
      overflow-hidden
      group-hover:max-h-40
      transition-all
      duration-500
    "
  >
    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
      Boundaries dissolved. The SS26 collection
      explores the duality between restraint and
      expression — structured forms, raw textures,
      and editorial colour blocking for those who
      move first.
    </p>
  </div>



</Link>

          {/* FW25 */}

       <Link
   to="/collections/fw25"
    className="group relative overflow-hidden block"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    <img
       src={FW25}
       alt="FW25"
      className="
        w-full
        h-[400px]
        object-cover
        transition-all
        duration-700
        group-hover:scale-110
        
      "
    />

    {/* TOP TEXT */}
    <div className="absolute bottom-6 left-6 text-white">
      <p className="text-xs uppercase tracking-[4px] text-gray-300">
        Fall / Winter · 2025
      </p>

      <h2 className="text-5xl font-bold mt-2">
        FW25
      </h2>
    </div>

    <div className="absolute bottom-2 right-6">
      <span className="text-gray-300 text-sm">
      3 pieces
     </span>


    </div>
    {/* SHOP NOW */}
    <div
      className="
      bg-black/40
backdrop-blur-sm
rounded-full
shadow-lg
        absolute
        bottom-8
        right-6
        flex
        items-center
        gap-2
        text-red-500
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
      "
    >
      <span className="uppercase text-sm">
        Shop Now
      </span>

      <ArrowUpRight size={18} />
    </div>
  </div>

 
  {/* DESCRIPTION */}
  <div
    className="
      max-h-0
      overflow-hidden
      group-hover:max-h-40
      transition-all
      duration-500
    "
  >
    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
      Darkness as a design language. FW25 leans into heaviness — dense fabrications, dramatic 
       silhouettes, and a monochromatic palette that commands presence in any room.

    </p>
  </div>

</Link>





          {/* RESORT */}

             <Link
  to="/collections/RESORT"
  className="group block"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    <img
      src={RESORT}
      alt="RESORT"
      className="
        w-full
        h-[400px]
        object-cover
        transition-all
        duration-700
        group-hover:scale-110
      "
    />

    {/* TOP TEXT */}
    <div className="absolute bottom-6 left-6 text-white">
      <p className="text-xs uppercase tracking-[4px] text-gray-300">
       Resort · 2025
      </p>

      <h2 className="text-5xl font-bold mt-2">
       RESORT
      </h2>
    </div>

    <div className="absolute bottom-2 right-6">
      <span className="text-gray-300 text-sm">
      3 pieces
     </span>


    </div>
    {/* SHOP NOW */}
    <div
      className="
      bg-black/40
backdrop-blur-sm
rounded-full
shadow-lg
        absolute
        bottom-8
        right-6
        flex
        items-center
        gap-2
        text-red-500
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
      "
    >
      <span className="uppercase text-sm">
        Shop Now
      </span>

      <ArrowUpRight size={18} />
    </div>
  </div>

 
  {/* DESCRIPTION */}
  <div
    className="
      max-h-0
      overflow-hidden
      group-hover:max-h-40
      transition-all
      duration-500
    "
  >
    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
      Sun-bleached and deliberate. Resort 2025 strips VEIL back to
       its minimal core — lightweight constructions and considered
        proportions for the warm-weather archive collector.

    </p>
  </div>



</Link>






    <Link
  to="/collections/ARCHIVE"
  className="group block"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    <img
      src={ ARCHIVE}
      alt=" ARCHIVE"
      className="
        w-full
        h-[400px]
        object-cover
        transition-all
        duration-700
        group-hover:scale-110
      "
    />

    {/* TOP TEXT */}
    <div className="absolute bottom-6 left-6 text-white">
      <p className="text-xs uppercase tracking-[4px] text-gray-300">
          Archive · 2019–2024
      </p>

      <h2 className="text-5xl font-bold mt-2">
         ARCHIVE
      </h2>
    </div>

    <div className="absolute bottom-2 right-6">
      <span className="text-gray-300 text-sm">
      3 pieces
     </span>


    </div>
    {/* SHOP NOW */}
    <div
      className="
      bg-black/40
backdrop-blur-sm
rounded-full
shadow-lg
        absolute
        bottom-8
        right-6
        flex
        items-center
        gap-2
        text-red-500
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
      "
    >
      <span className="uppercase text-sm">
        Shop Now
      </span>

      <ArrowUpRight size={18} />
    </div>
  </div>

 
  {/* DESCRIPTION */}
  <div
    className="
      max-h-0
      overflow-hidden
      group-hover:max-h-40
      transition-all
      duration-500
    "
  >
    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
     
      Every epoch revisited. The VEIL Archive is a curated
      selection of past-season pieces — rare, restocked,
      and reissued for those who understand that context is everything.
     
    </p>
  </div>



</Link>

        </div>
      </section>

    </main>
  );
}