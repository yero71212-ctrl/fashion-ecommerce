 import fashionBag from "../../assets/fashionBag.jpg";
import fashionShoe from "../../assets/fashionshoe.jpg";
import fashionJacket from "../../assets/fashionJacket.jpg";
import fashionHodye from "../../assets/fashionHodye.jpg";
 
 export default function cardone() {
 
 {/* CARD */}
   <div className="grid  mt-12 p-10  bg-black min-h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <a
  href="/product/shadow-jacket"
  className="group relative block overflow-hidden bg-[#0d0d0d] border border-[#1a1a1a] w-full mb-20"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    
    <img
      src={fashionJacket}
      alt="jacket"
      className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
    />

    {/* TAG */}
    <div className="absolute left-3 top-3 bg-red-600 px-3 py-1 text-[9px] font-bold tracking-[2px] text-white">
      BESTSELLER
    </div>

    {/* CATEGORY */}
    <p className="absolute right-3 top-3 text-[9px] tracking-[2px] text-gray-400 uppercase">
      OUTERWEAR
    </p>

    {/* QUICK ADD */}
    <button
      className="
        absolute bottom-4 left-4
        translate-y-5 opacity-0
        transition-all duration-500
        group-hover:translate-y-0
        group-hover:opacity-100
        rounded-full bg-red-600
        px-4 py-2
        text-[10px]
        font-semibold
        tracking-[2px]
        text-white
      "
    >
      + QUICK ADD
    </button>
  </div>

  {/* CONTENT */}
  <div className="flex items-center justify-between p-4">
    
    <div>
      <h3 className="text-sm font-semibold text-white">
        Shadow ooversized Jacket
      </h3>

      <div className="mt-1 flex items-center gap-2">
        
        <span className="text-base font-bold text-red-500">
          $248
        </span>

        <span className="text-xs text-gray-500 line-through">
          $310
        </span>

      </div>
    </div>

    {/* ARROW */}
    <div
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-[#2a2a2a]
        transition-all duration-300
        group-hover:bg-red-600
        group-hover:border-red-600
      "
    >
      <span className="text-sm text-white">→</span>
    </div>

  </div>
</a>

<a
  href="/product/shadow-jacket"
  className="group relative block overflow-hidden bg-[#0d0d0d] border border-[#1a1a1a] w-full sm:w-[260px] md:w-[290px] mb-20"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    
    <img
      src={fashionHodye}
      alt=""
      className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
    />

    {/* TAG */}
    <div className="absolute left-3 top-3 bg-red-600 px-3 py-1 text-[9px] font-bold tracking-[2px] text-white">
      NEW
    </div>

    {/* CATEGORY */}
    <p className="absolute right-3 top-3 text-[9px] tracking-[2px] text-gray-400 uppercase">
      TOPS
    </p>

    {/* QUICK ADD */}
    <button
      className="
        absolute bottom-4 left-4
        translate-y-5 opacity-0
        transition-all duration-500
        group-hover:translate-y-0
        group-hover:opacity-100
        rounded-full bg-red-600
        px-4 py-2
        text-[10px]
        font-semibold
        tracking-[2px]
        text-white
      "
    >
      + QUICK ADD
    </button>
  </div>

  {/* CONTENT */}
  <div className="flex items-center justify-between p-4">
    
    <div>
      <h3 className="text-sm font-semibold text-white">
      vold Tactical Hoodi
      </h3>

      <div className="mt-1 flex items-center gap-2">
        
        <span className="text-base font-bold text-red-500">
          $165
        </span>

        <span className="text-xs text-gray-500 line-through">
          
        </span>

      </div>
    </div>

    {/* ARROW */}
    <div
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-[#2a2a2a]
        transition-all duration-300
        group-hover:bg-red-600
        group-hover:border-red-600
      "
    >
      <span className="text-sm text-white">→</span>
    </div>

  </div>
</a>

<a
  href="/product/shadow-jacket"
  className="group relative block overflow-hidden bg-[#0d0d0d] border border-[#1a1a1a] w-full sm:w-[260px] md:w-[290px] mb-20"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    
    <img
    src={fashionShoe}
      alt=""
      className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
    />

    {/* TAG */}
    <div className="absolute left-3 top-3 bg-red-600 px-3 py-1 text-[9px] font-bold tracking-[2px] text-white">
      EXCLUSIVE
    </div>

    {/* CATEGORY */}
    <p className="absolute right-3 top-3 text-[9px] tracking-[2px] text-gray-400 uppercase">
      FOOTWEAR
    </p>

    {/* QUICK ADD */}
    <button
      className="
        absolute bottom-4 left-4
        translate-y-5 opacity-0
        transition-all duration-500
        group-hover:translate-y-0
        group-hover:opacity-100
        rounded-full bg-red-600
        px-4 py-2
        text-[10px]
        font-semibold
        tracking-[2px]
        text-white
      "
    >
      + QUICK ADD
    </button>
  </div>

  {/* CONTENT */}
  <div className="flex items-center justify-between p-4">
    
    <div>
      <h3 className="text-sm font-semibold text-white">
        Ember Low Sneaker
      </h3>

      <div className="mt-1 flex items-center gap-2">
        
        <span className="text-base font-bold text-red-500">
          $289
        </span>

        <span className="text-xs text-gray-500 line-through">
         
        </span>

      </div>
    </div>

    {/* ARROW */}
    <div
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-[#2a2a2a]
        transition-all duration-300
        group-hover:bg-red-600
        group-hover:border-red-600
      "
    >
      <span className="text-sm text-white">→</span>
    </div>

  </div>
</a>

<a
  href="/product/shadow-jacket"
  className="group relative block overflow-hidden bg-[#0d0d0d] border border-[#1a1a1a] w-full sm:w-[260px] md:w-[290px] mb-20"
>
  {/* IMAGE */}
  <div className="relative overflow-hidden">
    
    <img
      src={fashionBag}
      alt=""
      className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105 "
    />

    {/* TAG */}
    <div className="absolute left-3 top-3 bg-red-600 px-3 py-1 text-[9px] font-bold tracking-[2px] text-white">
      LIMITED
    </div>

    {/* CATEGORY */}
    <p className="absolute right-3 top-3 text-[9px] tracking-[2px] text-gray-400 uppercase">
      ACCESSORIES
    </p>

    {/* QUICK ADD */}
    <button
      className="
        absolute bottom-4 left-4
        translate-y-5 opacity-0
        transition-all duration-500
        group-hover:translate-y-0
        group-hover:opacity-100
        rounded-full bg-red-600
        px-4 py-2
        text-[10px]
        font-semibold
        tracking-[2px]
        text-white
      "
    >
      + QUICK ADD
    </button>
  </div>

  {/* CONTENT */}
  <div className="flex items-center justify-between p-4">
    
    <div>
      <h3 className="text-sm font-semibold text-white">
        Leather Crossbody Bag
      </h3>

      <div className="mt-1 flex items-center gap-2">
        
        <span className="text-base font-bold text-red-500">
          $189
        </span>

        <span className="text-xs text-gray-500 line-through">
        
        </span>

      </div>
    </div>

    {/* ARROW */}
    <div
      className="
        flex h-9 w-9 items-center justify-center
        rounded-full border border-[#2a2a2a]
        transition-all duration-300
        group-hover:bg-red-600
        group-hover:border-red-600
      "
    >
      <span className="text-sm text-white ">→</span>
    </div>

  </div>
</a>
    
    </div>

 };
