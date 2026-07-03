import { Search, X } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
  setShowSuggestions,
}) {
  return (
    <div className="w-full max-w-4xl mx-auto relative">
      <div className="flex items-center border border-red-700/40
       bg-red-700/20 rounded-full px-2 py-1 transition-all duration-300
        focus-within:border-white">

        {/* Search Icon */}
        <Search
          size={22}
          className="text-zinc-400 mr-4 flex-shrink-0"
        />

        {/* Input */}
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="flex-1 bg-transparent outline-none
           text-white placeholder:text-zinc-500 text-lg"
        />

        {/* Clear Button */}
        {search.length > 0 && (
          <button
            onClick={() => {
              setSearch("");
              setShowSuggestions(false);
            }}
            className="ml-4 text-zinc-400 hover:text-white transition"
          >
            <X size={22} />
          </button>
        )}
      </div>
    </div>
  );
}