import { ArrowUpRight } from "lucide-react";

export default function SearchSuggestions({
  products,
  search,
  setSearch,
  setShowSuggestions,
}) {
  if (search.trim() === "") return null;

  const suggestions = products
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 5);

  if (suggestions.length === 0) return null;

  return (
    <div className="absolute left-0 right-0 mt-3 bg-[#111111] border
     border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-50">

      {suggestions.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            setSearch(item.name);
            setShowSuggestions(false);
          }}
          className="w-full flex items-center justify-between px-6 py-5 border-b
           border-zinc-800 last:border-b-0 hover:bg-zinc-900 transition"
        >
          <div className="flex items-center gap-4">

            <img
              src={item.image}
              alt={item.name}
              className="w-8 h-8 object-cover rounded-md"
            />

            <div className="text-left">
              <p className="text-white text-sm font-medium">
                {item.name}
              </p>

              <p className="text-zinc-500 text-xs mt-1">
                {item.category}
              </p>
            </div>
          </div>

          <ArrowUpRight
            size={18}
            className="text-zinc-500"
          />
        </button>
      ))}
    </div>
  );
}
