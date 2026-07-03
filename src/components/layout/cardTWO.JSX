import product1 from "../../assets/p1.png";
import product2 from "../../assets/p2.png";
import product3 from "../../assets/p3.png";
import product4 from "../../assets/p4.png";
import product5 from "../../assets/p5.png";

import "remixicon/fonts/remixicon.css";

export default function Cards() {
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product1,
    product2,
    product3,
  ];

  return (
    <section className="bg-black py-8">
      <div className="flex gap-2 justify-center overflow-x-auto">
        {products.map((item, index) => (
          <div
            key={index}
            className="group relative w-[110px] h-[180px] overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <img
              src={item}
              alt=""
              className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-red-700/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
              <i className="ri-instagram-line text-white text-xl"></i>

              <h3 className="text-white text-[10px] tracking-[2px] font-semibold mt-2">
                ECLIPSE TEE
              </h3>

              <p className="text-white text-[10px] mt-1">
                ♥ 7K
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

