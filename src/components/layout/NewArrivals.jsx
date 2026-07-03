import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import product1 from "../../assets/p1.png";
import product2 from "../../assets/p2.png";
import product3 from "../../assets/p3.png";
import product4 from "../../assets/p4.png";
import product5 from "../../assets/p5.png";

const products = [
  {
    id: 1,
    name: "Crimson Edge Jacket",
    category: "OUTERWEAR",
    price: "$312",
    image: product1,
  },
  {
    id: 2,
    name: "Phantom Leather Coat",
    category: "OUTERWEAR",
    price: "$485",
    image: product2,
  },
  {
    id: 3,
    name: "Void Drop Cargo",
    category: "BOTTOMS",
    price: "$198",
    image: product3,
  },
  {
    id: 4,
    name: "Eclipse Tee",
    category: "TOPS",
    price: "$89",
    image: product4,
  },
  {
    id: 5,
    name: "Shadow Fit",
    category: "TOPS",
    price: "$120",
    image: product5,
  },
];

export default function NewArrivals() {

  const [startIndex, setStartIndex] = useState(0);

  // 4 cards only
  const visibleProducts = products.slice(startIndex, startIndex + 4);

  // next
  const nextSlide = () => {
    if (startIndex < products.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  // prev
  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-black text-white py-24 px-6 lg:px-16 overflow-hidden md:mt-0 mt-0">

      {/* Top */}
      <div className="flex items-center justify-between mb-14">

        {/* Left */}
        <div>
          <p className="text-red-600 uppercase tracking-[0.3em] md:text-sm text-xs mb-4">
            — Just Dropped
          </p>

          <h2 className="font-display text-4xl md:text-6xl font-black uppercase leading-none">
            New
          </h2>

          <h2 className="font-display text-5xl md:text-6xl font-black uppercase leading-none text-transparent stroke-text">
            Arrivals

          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          <span className="text-gray-500 text-sm tracking-widest">
            {startIndex + 1} — {Math.min(startIndex + 4, products.length)} / {products.length}
          </span>

          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:border-red-600 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:border-red-600 transition"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
          >

            {/* Image */}
            <div className="relative overflow-hidden bg-[#111]">
               
              <img
                src={product.image}
                alt={product.name}
                className="md:w-full md:h-[420px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Badge */}
              <span className="absolute top-4 right-4 bg-red-600 text-white text-[10px] px-3 py-1 uppercase tracking-widest">
                New
              </span>

              {/* Hover Button */}
              <button className="absolute bottom-5 left-1/2 -translate-x-1/2
               bg-red-600 md:px-3 px-1 py-1 rounded-full text-xs uppercase 
              tracking-widest opacity-0 group-hover:opacity-100 transition duration-300">
                + Quick Add
              </button>
            </div>

            {/* Info */}
            <div className="mt-4 flex items-start justify-between border-b border-transparent pb-4 group-hover:border-red-600 transition-all duration-500">

              <div>
                <h3 className="text-xs uppercase tracking-wide">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-xs mt-1 tracking-widest">
                  {product.category}
                </p>
              </div>

              <p className="text-red-500 text-sm font-semibold">
                {product.price}
              </p>
             
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}