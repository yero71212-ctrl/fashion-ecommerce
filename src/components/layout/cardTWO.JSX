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



// const products = [
//   {
//     id: 1,
//     name: "ECLIPSE TEE",
//     image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
//   },
//   {
//     id: 2,
//     name: "BLACK HOODIE",
//     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
//   },
//   {
//     id: 3,
//     name: "SHADOW JACKET",
//     image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
//   },
//   {
//     id: 4,
//     name: "MINIMAL PANTS",
//     image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
//   },
//   {
//     id: 5,
//     name: "VEIL BAG",
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
//   },
// ];
// export default function ProductCards() {
//   return (
//     <section className="bg-black py-8">
//       <div className="flex gap-2 overflow-x-auto px-4">
//         {products.map((item) => (
//           <div
//             key={item.id}
//             className="group relative min-w-[120px] h-[180px] overflow-hidden cursor-pointer"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
//             />

//             {/* Red Overlay */}
//             <div className="absolute inset-0 bg-red-700/85 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">
//               <i className="ri-instagram-line text-white text-lg mb-2"></i>

//               <h3 className="text-white text-[10px] tracking-[3px] font-semibold">
//                 {item.name}
//               </h3>

//               <p className="text-white text-[10px] mt-1">
//                 ♥ 7K
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// import product1 from "../../assets/p1.png";
// import product2 from "../../assets/p2.png";
// import product3 from "../../assets/p3.png";
// import product4 from "../../assets/p4.png";
// import product5 from "../../assets/p5.png";
// import "remixicon/fonts/remixicon.css";

// export default function Cards() {
//   const products = [
//     product1,
//     product2,
//     product3,
//     product4,
//     product5,
//     product1,
//   ];

//   return (
//     <section className=" bg-black py-10 overflow-hidden">


//       <div className="flex justify-center gap-1 scrollbar-hide">
//         {products.map((item, index) => (
//           <div
//             key={index}
//             className="
//               relative
//                w-[10px]
//                 h-[10px]
//               group
//               overflow-hidden
//               flex-shrink-0
              
//             "
//           >
//             {/* IMAGE */}
//             <img
//               src={item}
//               alt="Fashion"
//               className="
//                 w-[10px]
//                 h-[10px]
//                 object-cover
//                 transition-all
//                 duration-500
//                 group-hover:scale-105
//                 group-hover:brightness-75"
                
//             />

//             {/* DARK OVERLAY */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-black/20
//                 opacity-0
//                 group-hover:opacity-100
//                 transition-all
//                 duration-500
//               "
//             />

//             {/* RED OVERLAY */}
//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-[#7A0000]/85
//                 opacity-0
//                 group-hover:opacity-100
//                 transition-all
//                 duration-500
//                 flex
//                 flex-col
//                 items-center
//                 justify-center
//                 text-center
//                 w-[10px]
//                 h-[10px]
//               "
//             >
//               <i className="ri-instagram-line text-white text-2xl mb-3"></i>

//               <h3
//                 className="
//                   text-white
//                   uppercase
//                   tracking-[0.15em]
//                   text-[2px]
//                   font-semibold
//                 "
//               >
//                 VOID DROP CARGO
//               </h3>

//               <p
//                 className="
//                   text-white/70
//                   text-[10px]
//                   mt-2
//                   tracking-wider
//                 "
//               >
//                 ♥ 3.5K
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
