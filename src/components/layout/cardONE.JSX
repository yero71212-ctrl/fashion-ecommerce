import fashionBag from "../../assets/c4.png";
import fashionShoe from "../../assets/c3.png";
import fashionJacket from "../../assets/c1.png";
import fashionHodye from "../../assets/c2.png";

export default function CardONE() {
  const products = [
    {
      id: 1,
      image: fashionJacket,
      badge: "BESTSELLER",
      category: "OUTERWEAR",
      name: "Shadow Oversized Jacket",
      price: "$248",
      oldPrice: "$310",
    },
    {
      id: 2,
      image: fashionHodye,
      badge: "NEW",
      category: "TOPS",
      name: "Void Tactical Hoodie",
      price: "$165",
      oldPrice: "",
    },
    {
      id: 3,
      image: fashionShoe,
      badge: "EXCLUSIVE",
      category: "FOOTWEAR",
      name: "Ember Low Sneaker",
      price: "$289",
      oldPrice: "",
    },
    {
      id: 4,
      image: fashionBag,
      badge: "LIMITED",
      category: "ACCESSORIES",
      name: "Leather Crossbody Bag",
      price: "$198",
      oldPrice: "",
    },
  
  ];

  return (

    <div className="mb-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden bg-[#140404] "
          >
            {/* Image */}
            <div className="relative overflow-hidden ">
              <img
                src={item.image}
                alt={item.name}
                className="md:w-full md:h-[420px] object-cover transition-transform 
                duration-500 group-hover:scale-110"
              />

              {/* Badge */}
              <span className="absolute top-4 left-4 bg-red-600
               text-white text-[10px] px-3 py-1 uppercase tracking-[2px]">
                {item.badge}
              </span>

              {/* Category */}
              <span className="absolute top-4 right-4 text-white/70
               text-[10px] uppercase tracking-[2px]">
                {item.category}
              </span>

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

            {/* Bottom */}
            <div className="px-4 py-3 ">
               <div className="flex justify-between items-center">
              <h2 className="text-white text-xs  font-medium">
                {item.name}
              </h2> 
              {/* Arrow */}
                  <button className="w-8 h-8 rounded-full border border-red-900 
          flex items-center justify-center text-red-500 hover:bg-red-600
           hover:text-white transition">
                  →
              </button>
             </div>
<br />
              <div className="flex items-center  ">
                <span className="text-red-500 text-xs font-semibold">
                  {item.price}
                </span>
                {item.oldPrice && (
                  <span className="text-gray-500 line-through text-xs">
                    {item.oldPrice}
                  </span>
                )}
               
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}