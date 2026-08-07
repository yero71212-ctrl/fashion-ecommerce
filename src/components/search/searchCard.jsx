import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function SearchCard({ item }) {
   const [activeCard, setActiveCard] = useState(null);
    
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="group bg-[#111111]  overflow-hidden cursor-pointer 
    transition-all duration-500 hover:border-white mt-5 mb-5 md:w-[300px]   md-h-[300px]">
     
      {/* Image */}
      <div className="relative overflow-hidden md:w-[300px]   md-h-[300px]">
        <img
          src={item.image}
          alt={item.name}
          className=" md:w-[300px] md:h-[300px] object-cover
           transition-transform duration-700 group-hover:scale-110"
        />
        
          {/* Quick Add */}
             <div className="absolute bottom-5 left-1/2 -translate-x-1/2">

  {activeCard === item.id ? (
    <div className="flex gap-1 bg-black/90 p-2 rounded-full">
      {["XS", "S", "M", "L", "XL"].map((size) => (
        <button
          key={size}
          className="w-8 h-8 rounded-full border border-red-500 text-white text-[10px]
          hover:bg-red-600 transition"
        >
          {size}
        </button>
      ))}
    </div>
  ) : (
    <button
      onClick={() => setActiveCard(item.id)}
      className="bg-red-600 px-4 py-2 rounded-full text-xs uppercase tracking-widest
      opacity-0 group-hover:opacity-100 transition"
    >
      + QUICK ADD
    </button>
  )}

</div>
      </div>

      {/* Content */}
      <div className="p-1 ">

        <h2 className="text-white text-xs font-semibold tracking-wide">
          {item.name}
        </h2>

        <p className="text-zinc-500 uppercase text-xs">
          {item.category}
        </p>

        <div className="flex items-center gap-3">

          <span className="text-red-500 text-xs font-semibold">
            ${item.price}
          </span>

          <span className="text-zinc-500  text-xs line-through">
            ${item.oldPrice}
          </span>

             {/* Arrow */}
              <div className="">
                <button className="w-[30px] h-[30px] rounded-full  
          flex items-center justify-center text-white-500 hover:bg-red-600
           hover:text-white transition ml-20 ">
                  →
                </button>
               </div>
        </div>
      </div>

    </div>
    </div>
  );
}