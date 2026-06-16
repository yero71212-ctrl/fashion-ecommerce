
import { ArrowRight } from "lucide-react";

export default function NewsCard({
  image,
  category,
  title,
  description,
  readTime,
}) {
  return (
    <article className="group overflow-hidden bg-[#0B0000] cursor-pointer">
      
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full
            h-[380px]
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="bg-[#120202] p-7">
        
        <div className="flex items-center justify-between mb-5">
          <span className="bg-red-600 text-white text-[10px] uppercase tracking-[3px] px-3 py-1">
            {category}
          </span>

          <span className="text-gray-500 text-xs">
            {readTime}
          </span>
        </div>

        <h3 className="text-white uppercase text-[34px] leading-[1.05] font-black">
          {title}
        </h3>

        <p className="text-gray-400 mt-4 leading-relaxed text-sm">
          {description}
        </p>

        {/* READ BUTTON */}
        <div
          className="
            mt-6
            flex items-center gap-2
            text-red-500
            uppercase
            tracking-[3px]
            text-sm
            opacity-0
            translate-y-4
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:translate-y-0
          "
        >
          READ
          <ArrowRight size={16} />
        </div>
      </div>
    </article>
  );
}