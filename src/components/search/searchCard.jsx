import { ArrowUpRight } from "lucide-react";

export default function SearchCard({ item }) {
  return (
    <div className="group bg-[#111111]  overflow-hidden cursor-pointer 
    transition-all duration-500 hover:border-white mt-5 mb-5">

      {/* Image */}
      <div className="relative overflow-hidden h-[300px]">
        <img
          src={item.image}
          alt={item.name}
          className="w-[300px] h-[300px] object-cover
           transition-transform duration-700 group-hover:scale-110"
        />
        
          {/* Quick Add */}
              <button
                className=" 
             absolute bottom-5 left-1/2 -translate-x-1/2
               bg-red-600 px-3 py-1 rounded-full text-xs uppercase 
              tracking-widest opacity-0 group-hover:opacity-100 transition duration-300 "
              >
               
                + QUICK ADD
              </button>
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
  );
}