import Navbar from "../components/layout/Navbar";
import Button from "../components/ui/Button";
import fashionImage from "../assets/fashion.png";
import { ArrowRight } from "lucide-react";
import CardONE from "../components/layout/cardONE";
// import
import heroImage from "../assets/hero.png";
import NewArrivals from "../components/layout/NewArrivals";
import Premiun from "../components/layout/premiun";
import CardTWO from "../components/layout/cardTWO";

export default function Home() {   
  return (
  <div className="bg-black min-h-screen text-white">

      <Navbar />

      {/* HERO SECTION */}
      <section className="h-screen flex items-center mt-10">

        <div className="max-w-7xl  mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="text-red-500 uppercase tracking-[0.1em] text-xs mb-2">
              SS 26 COLLECTION
            </p>
<div className="relative">
           <h1 className="text-[1rem] md:text-[3rem] lg:text-[5rem] font-black uppercase leading-[0.9] tracking-[-0.05em] text-white">
            DEFINE
           <br />
               <span className="text-transparent stroke-text">
               YOUR ERA.
               </span>
               <div className="absolute bottom-0 left-60
               w-[300px] h-[120px] bg-red-500/90 blur-[100px] rounded-full"></div>
          </h1>

            <p className="text-neutral-400 mt-5 max-w-md leading-relaxed">
              Wear what the world hasnt seen yet.
              Bold cuts. Raw identity.
              Uncompromising design.
            </p>

            <div className="flex gap-3 mt-7">
              <Button>Shop Collection→</Button>

              <button className="border border-white/20 px-6 py-3 rounded-full uppercase text-xs tracking-[0.2em]">
                Explore Lookbook
              </button>
            </div> </div>


 {/* STATS */}
<div className="flex items-center gap-8 mt-12">

  {/* ITEM */}
  <div>
    <h2 className="text-3xl font-bold text-white">
      12K+
    </h2>

    <p className="text-xs uppercase tracking-[0.1em] text-neutral-500 mt-1">
      Global Customers
    </p>
  </div>

  {/* ITEM */}
  <div>
    <h2 className="text-3xl font-bold text-white">
      SS'26
    </h2>

    <p className="text-xs uppercase tracking-[0.1em] text-neutral-500 mt-1">
      Current Season
    </p>
  </div>

  {/* ITEM */}
  <div>
    <h2 className="text-3xl font-bold text-white">
      48H
    </h2>

    <p className="text-xs uppercase tracking-[0.1em] text-neutral-500 mt-1">
      Express Shipping
    </p>
  </div>

</div>
</div>

          {/* RIGHT IMAGE */}

<div className="flex justify-center">
  <img
    src={fashionImage}
    alt="fashion"
    className="h-[700px] object-cover rounded-2xl"
  />
</div>
        </div>
      </section>



 {/*page 2222222222222222222222222222222222 */}

{/* FEATURED HEADER */}
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 mt-20">

  {/* LEFT */}
  <div>

    {/* SMALL LABEL */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-[2px] bg-red-600"></div>

      <p className="text-[10px] tracking-[4px] uppercase text-red-500">
        SS '26
      </p>
    </div>

    {/* TITLE */}
    <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9]">

      <span className="text-white block">
        Featured
      </span>

      <span
        className="
          text-transparent
          [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]
        "
      >
        Collection
      </span>

    </h2>

  </div>

  {/* RIGHT */}
  <div className="flex flex-col items-start md:items-end gap-5">

    <p className="text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right">
      Handpicked pieces from our latest drop.
      Designed for those who move first.
    </p>

    <button
      className="
        flex items-center gap-3
        border border-white/10
        px-6 py-3
        rounded-full
        text-xs
        uppercase
        tracking-[3px]
        transition duration-300
        hover:bg-red-600
        hover:border-red-600
      "
    >
      View All
      <span>→</span>
    </button>

  </div>

</div>

< CardONE/>

   {/* Hero Section */}
<section className="relative w-full h-screen overflow-hidden bg-black">
  
  {/* Background Image */}
  <img
    src={heroImage}
    alt="Fashion Hero"
    className="absolute inset-0 w-full h-full object-cover opacity-70"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 "></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
    
    <div className="max-w-2xl">
      
      <p className="text-sm tracking-[0.4em] text-red-500 uppercase mb-6">
        Summer 2026 / Campaign  
      </p>
 
      <h1 className="text-4xl md:text-6xl font-black leading-none uppercase text-white">
        Wear The
      </h1>

      <h1 className="text-4xl md:text-6xl font-black leading-none uppercase text-red-600">
        Darkness
      </h1>

      <h1 className="text-4xl md:text-6xl font-black leading-none uppercase text-transparent stroke-text">
        Beautifully.
      </h1>

      <p className="mt-8 text-gray-300 max-w-lg leading-relaxed">
        The new summer campaign is here. Dramatic <br /> silhouettes,
        raw textures, and bold statements <br /> because fashion
        should never play it safe.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-6 mt-10">
        
        <button className="bg-red-600 hover:bg-red-700 transition-all px-8 py-4 rounded-full text-white uppercase tracking-wider text-sm font-semibold">
          Shop Campaign →
        </button>

        <button className="text-white uppercase tracking-wider text-sm hover:text-red-500 transition-all">
          View Lookbook
        </button>

      </div>

    </div>
  </div>
</section>

<NewArrivals/>
<Premiun/>


<section className="w-full bg-black text-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
    
    {/* Top Text */}
    <p className="text-red-600 uppercase tracking-[3px] text-xs md:text-sm mb-4">
      
      VEIL.OFFICIAL
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
            VISUAL
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
            CULTURE
          </span>

        </h1>
      </div>

      {/* Right Side */}
      <div className="max-w-md text-left lg:text-right">
        <p className="text-gray-400 text-sm md:text-base leading-7">
          Tag us in your fits. Join a community that <br /> moves culture
          forward, not just fashion.
        </p>

        <button className="
          mt-6
          text-red-600
          uppercase
          tracking-[3px]
          text-sm
          hover:translate-x-2
          transition-all
        ">
          Follow Us →
        </button>
      </div>

    </div>
  </div>
</section>

<CardTWO/>


    </div>
  );
}

