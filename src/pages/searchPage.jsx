import { useState } from "react";
import SearchBar from "../components/search/searchBar";
import SearchSuggestions from "../components/search/SearchSuggestions";
import SearchCard from "../components/search/searchCard";
import TrendingButtons from "../components/Search/TrendingButtons";

import products  from "../data/products";
import Footer from "../components/layout/Footer";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeCategory, setActiveCategory] = useState("TRENDING");

const filteredProducts = products.filter((item) => {

  const searchMatch =
    item.name.toLowerCase().includes(search.toLowerCase());

  const categoryMatch =
    activeCategory === "TRENDING"
      ? true     
      : item.category === activeCategory;

  return searchMatch && categoryMatch; 
});

  return (
    <section className="min-h-screen bg-black text-white px-6 ">

      <div className="max-w-7xl mx-auto ">

        {/* Search */}
        <div className="relative">

          <SearchBar
            search={search}
            setSearch={setSearch}
            setShowSuggestions={setShowSuggestions}
          />

          {showSuggestions && search.trim() !== "" && (
            <SearchSuggestions
              products={products}
              search={search}
              setSearch={setSearch}
              setShowSuggestions={setShowSuggestions}
            />
          )}

        </div>
 <div className="flex justify-between items-center mt-3">
        <h2 className="text-[0px] md:text-xs tracking-[4px] text-zinc-500 uppercase">
          All Products
        </h2>

        <TrendingButtons
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
        {/* Result Count */}
        <div className="mt-8 flex justify-between items-center border-b border-zinc-800 pb-5">

          <h2 className="text-sm font-semibold tracking-wider">

            {search.trim() === ""
              ? `${products.length} PRODUCTS`
              : `${filteredProducts.length} RESULT${
                  filteredProducts.length !== 1 ? "S" : ""
                }`}

          </h2>

          {search !== "" && (
            <button
              onClick={() => {
                setSearch("");
                setShowSuggestions(false);
              }}
              className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition"
            >
              Clear Search
            </button>
          )}

        </div>

        {/* No Result */}
        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32">

            <h2 className="text-4xl font-bold mb-4">
              No Results Found
            </h2>

            <p className="text-zinc-500">
              Try another keyword.
            </p>

          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">

            {filteredProducts.map((item) => (
              <SearchCard key={item.id} item={item}  />
            ))}

          </div>
        )}
          <Footer />
      </div>


    </section>
  );
}