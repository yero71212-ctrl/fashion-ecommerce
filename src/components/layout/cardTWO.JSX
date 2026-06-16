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
    product2,
    product5,
  ];

  return (
    <section className="w-full bg-black overflow-hidden">

      {/* CARDS */}
      <div className="flex overflow-x-auto scrollbar-hide">

        {products.map((item, index) => (

          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              flex-shrink-0
            "
          >
  
            {/* IMAGE */}
            <img
              src={item}
              alt=""
              className="
                w-[80px]
                md:w-[70px]
                lg:w-[80px]

                h-[150px]
                md:h-[80px]
                lg:h-[100px]

                object-cover

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:blur-[3px]
                group-hover:brightness-50
              "
            />
{/* RED EFFECT */}
            <div
              className="
                absolute inset-0
               hover: bg-red-700/60
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                mix-blend-multiply
              "
            >
          

            {/* CONTENT */}
            <div
              className="
                absolute inset-0
                flex flex-col
                items-center
                justify-center

                opacity-0
                translate-y-5

                group-hover:opacity-100
                group-hover:translate-y-0

                transition-all
                duration-500

                z-10
              "
            >

              <i className="ri-instagram-line  md:h-[20px] text-5xl text-white mb-3"></i>

              <h1 className="text-white font-bold uppercase tracking-[3px] text-sm">
                VEIL CULTURE
              </h1>

              <p className="text-gray-200 text-xs mt-2">
                Follow on Instagram
              </p>
       
            </div>
            </div>
          </div>

        ))}

      </div>

   {/* MOVING BAR */}
<div className="w-full overflow-hidden bg-gradient-to-r from-red-500 to-black py-8">
  <div className="animate-marquee flex gap-20 whitespace-nowrap w-max">
    {[...Array(8)].map((_, i) => (
      <h1
        key={i}
        className="
          text-white
          text-5xl
          md:text-[140px]
          font-black
          uppercase
          tracking-[10px]
          leading-none
        "
      >
        Bold. Modern. Independent.
      </h1>
    ))}
  </div>
</div>

    </section>
  );
}