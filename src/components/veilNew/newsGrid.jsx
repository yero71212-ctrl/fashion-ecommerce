
 import NewsCard from "./newsCard";

import Img1 from "../../assets/p1.jpg";
 import Img2 from "../../assets/p2.jpg";
import Img3 from "../../assets/p3.jpg";

export default function News() {
  const news = [
    {
      image: Img1,
      category: "Culture",
      title: "VEIL X TOKYO: AN EXCLUSIVE INSTALLATION",
      description:
        "A two-week immersive installation in Shibuya redefined what a fashion brand experience can be.",
      readTime: "4 min",
    },
    {
      image: Img2,
      category: "Craftsmanship",
      title: "PHANTOM LEATHER COAT: THE MAKING OF",
      description:
        "From the tanneries of Florence to the hands of our atelier team.",
      readTime: "8 min",
    },
    {
      image: Img3,
      category: "Campaign",
      title: "FW25 CAMPAIGN: SHOT IN TOTAL DARKNESS",
      description:
        "Photographer Kieran Black discusses the decision to shoot entirely in darkness.",
      readTime: "3 min",
    },
  ];

  return (
    <section className="bg-black min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full uppercase text-xs tracking-[3px]">
            All
          </button>

          <button className="border border-white/10 text-white px-6 py-3 rounded-full uppercase text-xs tracking-[3px]">
            Collection
          </button>

          <button className="border border-white/10 text-white px-6 py-3 rounded-full uppercase text-xs tracking-[3px]">
            Culture
          </button>

          <button className="border border-white/10 text-white px-6 py-3 rounded-full uppercase text-xs tracking-[3px]">
            Campaign
          </button>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}