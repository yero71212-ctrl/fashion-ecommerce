import { useState } from "react";

import product1 from "../../assets/p1.png";
import product2 from "../../assets/p2.png";
import product3 from "../../assets/p3.png";
import product4 from "../../assets/p4.png";


export default function CollectionFilter() {
  const [activeCollection, setActiveCollection] = useState("ALL");
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [sort, setSort] = useState("Featured");

  const collections = [
    { name: "ALL", count: 15 },
    { name: "SS26", count: 6 },
    { name: "FW25", count: 3 },
    { name: "RESORT", count: 3 },
    { name: "ARCHIVE", count: 3 },
  ];

  const categories = [
    "ALL",
    "OUTERWEAR",
    "TOPS",
    "BOTTOMS",
    "FOOTWEAR",
    "ACCESSORIES",
  ];
  const products = [
  {
    id: 1,
    image: product1,
    badge: "BESTSELLER",
    name: "Shadow Oversized Jacket",
    price: "$248",
    oldPrice: "$310",
    collection: "SS26",
    category: "OUTERWEAR",
  },
  {
    id: 2,
    image: product2,
    badge: "NEW",
    name: "Void Tactical Hoodie",
    price: "$165",
    collection: "SS26",
    category: "TOPS",
  },
  {
    id: 3,
    image: product3,
    badge: "EXCLUSIVE",
    name: "Ember Low Sneaker",
    price: "$289",
    collection: "FW25",
    category: "FOOTWEAR",
  },
  {
    id: 4,
    image: product4,
    badge: "LIMITED",
    name: "Leather Crossbody Bag",
    price: "$198",
    collection: "ARCHIVE",
    category: "ACCESSORIES",
  },
  {
    id: 5,
    image: product1,
    badge: "NEW",
    name: "Shadow Oversized Jacket",
    price: "$248",
    collection: "RESORT",
    category: "OUTERWEAR",
  },
  {
    id: 6,
    image: product2,
    badge: "NEW",
    name: "Void Tactical Hoodie",
    price: "$165",
    collection: "SS26",
    category: "TOPS",
  },
  {
    id: 7,
    image: product3,
    badge: "EXCLUSIVE",
    name: "Ember Low Sneaker",
    price: "$289",
    collection: "FW25",
    category: "FOOTWEAR",
  },
  {
    id: 8,
    image: product4,
    badge: "LIMITED",
    name: "Leather Crossbody Bag",
    price: "$198",
    collection: "ARCHIVE",
    category: "ACCESSORIES",
  },
];
   
 const filteredProducts = products
  .filter((product) => {
    const collectionMatch =
      activeCollection === "ALL" ||
      product.collection === activeCollection;

    const categoryMatch =
      activeCategory === "ALL" ||
      product.category === activeCategory;

    return collectionMatch && categoryMatch;
  })

  .sort((a, b) => {
    const priceA = Number(a.price.replace("$", ""));
    const priceB = Number(b.price.replace("$", ""));

    if (sort === "Price: Low to High") {
      return priceA - priceB;
    }

    if (sort === "Price: High to Low") {
      return priceB - priceA;
    }

    if (sort === "Newest") {
      return b.id - a.id;
    }

    return 0;
  });

  return (
    <section className="bg-black text-white p-8">
      <p className="text-red-500 uppercase tracking-[4px] text-sm mb-6">
        — Collection
      </p>

      {/* Collection Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {collections.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveCollection(item.name)}
            className={`flex items-center gap-4 px-3 py-2 rounded-lg border transition-all duration-300 
              ${
                activeCollection === item.name
                  ? "border-red-500 text-white bg-red-500/20"
                  : "border-zinc-800 text-zinc-400 hover:border-red-500/40"
              }`}
          >  
            <span className="text-[13px]">{item.name}</span>

            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px]
                ${
                  activeCollection === item.name
                    ? "bg-red-500/40 border border-red-500 text-red-500 "
                    : "bg-zinc-800 text-zinc-400"
                }`}
            >
              {item.count}
            </span>
          </button>
        ))}
      </div>

      {/* Category + Sort */}
      <div className="flex flex-wrap justify-between items-center gap-6 border-b border-zinc-900 pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`px-5 py-2 rounded-full border text-sm tracking-wider transition
                ${
                  activeCategory === item
                    ? "bg-red-500 border-red-500 text-white text-sm"
                    : "border-zinc-800 text-zinc-400 hover:border-zinc-600"
                }`}
            >
              {item}
            </button>
          ))}

          {activeCategory !== "ALL" && (
            <button
              onClick={() => setActiveCategory("ALL")}
              className="text-zinc-500 text-sm"
            >
              × Clear all
            </button>
          )}
        </div>

        <div className="flex items-center gap-6">
          <span className="text-zinc-500 text-sm">
            {filteredProducts.length} pieces
          </span>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-black border border-zinc-800 px-3 py-2 rounded-lg outline-none"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
      </div>

      {/* Active Filter Bar */}
      {activeCollection !== "ALL" && (
        <div className="mt-8 bg-red-900/25 border border-red-900/40 rounded-lg px-3 py-2 flex justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>

            <span className="text-red-400 font-semibold">
              {activeCollection}
            </span>

            <span className="text-zinc-500">
              — {filteredProducts.length} pieces
            </span>
          </div>

          <button
            onClick={() => setActiveCollection("ALL")}
            className="text-zinc-400"
          >
            × Clear
          </button>
        </div>
      )}


{/* Products */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
  {filteredProducts.map((item) => (
    <div
      key={item.id}
      className="group relative overflow-hidden bg-[#140404] border border-[#240808]"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-105"
      />

      <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] px-3 py-1 tracking-[2px]">
        {item.badge}
      </span>

      <span className="absolute top-4 right-4 text-zinc-400 text-xs">
        {item.price}
      </span>

      <button
        className="absolute left-1/2 -translate-x-1/2 bottom-28 bg-red-600 text-white
        px-6 py-2 rounded-full text-xs tracking-wider opacity-0 translate-y-6
        group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 mb-4"
      >
        + QUICK ADD
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-[#180404]/95 p-2 ">
        <h3 className="text-white font-medium mt-2">
          {item.name}
        </h3>

        <div className="flex justify-between items-center  mb-1">
          <div>
            <span className="text-red-500 font-bold">
              {item.price}
            </span>

            {item.oldPrice && (
              <span className="text-zinc-500 line-through ml-2 text-sm">
                {item.oldPrice}
              </span>
            )}
          </div>

          <button className="w-10 h-10 rounded-full border border-red-900 
          flex items-center justify-center text-red-500 hover:bg-red-600
           hover:text-white transition">
            →
          </button>
        </div>
      </div>
      
    </div>
    
  ))}

</div>

 {/* No Results */}
{filteredProducts.length > 0 ? (
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
    {filteredProducts.map((item) => (
      <div
        key={item.id}
        className="group relative overflow-hidden bg-[#140404] border border-[#240808]"
      >
       
      </div>
    ))}
  </div>
) : (
  <div className="flex flex-col items-center justify-center py-32">
    <h2 className="text-5xl font-bold tracking-[6px] text-zinc-700 uppercase">
      No Results
    </h2>

    <p className="text-zinc-500 mt-4">
      No products match your current filters.
    </p>

    <button
      onClick={() => {
        setActiveCollection("ALL");
        setActiveCategory("ALL");
      }}
      className="mt-8 px-8 py-3 border border-zinc-800 rounded-full"
    >
      Clear Filters
    </button>
  </div>
)}

    </section>

    
  );
}

