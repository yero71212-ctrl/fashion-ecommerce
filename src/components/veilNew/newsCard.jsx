import { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/p1.png";
import img2 from "../../assets/p2.png";
import img3 from "../../assets/p3.png";
import img4 from "../../assets/p4.png";
import img5 from "../../assets/p5.png";

export default function News() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "COLLECTION",
    "CULTURE",
    "CRAFTSMANSHIP",
    "CAMPAIGN",
    "EDITORIAL",
    "DROP",
  ];

  const news = [
    {
      id: 1,
      image: img1,
      category: "CULTURE",
      title: "VEIL X TOKYO: AN EXCLUSIVE INSTALLATION",
      desc: "A two-week immersive installation in Shibuya redefined what a fashion brand experience can be.",
      date: "Jan 28, 2026",
      readTime: "4 min",
      slug: "/news/tokyo",
    },
    {
      id: 2,
      image: img2,
      category: "CRAFTSMANSHIP",
      title: "PHANTOM LEATHER COAT: THE MAKING OF",
      desc: "A behind-the-scenes look at how our most complex piece comes to life.",
      date: "Jan 10, 2026",
      readTime: "8 min",
      slug: "/news/phantom-coat",
    },
    {
      id: 3,
      image: img3,
      category: "CAMPAIGN",
      title: "FW25 CAMPAIGN: SHOT IN TOTAL DARKNESS",
      desc: "Photographer Kieran Black discusses the creative process.",
      date: "Dec 5, 2025",
      readTime: "3 min",
      slug: "/news/fw25",
    },
    {
      id: 4,
      image: img4,
      category: "EDITORIAL",
      title: "ON RESTRAINT: THE VEIL DESIGN PHILOSOPHY",
      desc: "What does it mean to do less? VEIL's design approach explained.",
      date: "Nov 18, 2025",
      readTime: "10 min",
      slug: "/news/editorial",
    },
    {
      id: 5,
      image: img5,
      category: "DROP",
      title: "ARCHIVE DROP: 12 PIECES RETURN",
      desc: "Everything you need to know before they sell out.",
      date: "Oct 30, 2025",
      readTime: "2 min",
      slug: "/news/archive-drop",
    },
  ];

  const filteredNews =
    activeCategory === "ALL"
      ? news
      : news.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-black min-h-screen px-6 lg:px-20 py-16">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-2 md:px-6 py-1 md:py-3 rounded-full border uppercase tracking-[3px] text-xs transition-all duration-300
            ${
              activeCategory === category
                ? "bg-red-600 border-red-600 text-white"
                : "border-zinc-800 text-zinc-400 hover:border-red-600 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map((item) => (
          <Link
            key={item.id}
            to={item.slug}
            className="group block overflow-hidden bg-[#120202]"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full  md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="bg-[#180202] p-6 border-t border-[#2d0707]">
              <div className="flex justify-between items-center mb-5">
                <span className="bg-[#2d0707] text-red-500 text-[10px] px-3 py-1 tracking-[2px] font-semibold">
                  {item.category}
                </span>

                <span className="text-zinc-500 text-sm">
                  ⏱ {item.readTime}
                </span>
              </div>

              <h2 className="text-white md:text-3xl font-bold leading-tight uppercase mb-4">
                {item.title}
              </h2>

              <p className="text-zinc-400 mb-6 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-zinc-500 text-sm">
                  {item.date}
                </span>

                {/* Hover Read */}
                <span className="text-red-500 font-semibold tracking-[2px]
                  opacity-0 translate-x-4
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-300">
                  READ →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}