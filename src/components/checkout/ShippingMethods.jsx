export default function ShippingMethods({
  shippingPrice,
  setShippingPrice,
}) {

  const methods = [
    {
      id: 1,
      title: "Standard Shipping",
      time: "5–7 Business Days",
      price: 0,
    },
    {
      id: 2,
      title: "Express Shipping",
      time: "2–3 Business Days",
      price: 15,
    },
    {
      id: 3,
      title: "Overnight Delivery",
      time: "Next Day",
      price: 35,
    },
  ];

  return (

    <section>

      <h2 className="text-2xl font-bold uppercase tracking-[3px] mb-8">
        Shipping Method
      </h2>

      <div className="space-y-5">

        {methods.map((item) => (
            
          <button
            key={item.id}
            onClick={() => setShippingPrice(item.price)}
            className={`
              w-full
              p-6
              rounded-2xl
              border
              transition
              flex
              justify-between
              items-center

              ${
                shippingPrice === item.price
                ? "border-red-600 bg-white/5"
                : "border-white/10 hover:border-red-600"
              }
            `}
          >

            <div>

              <h3 className="text-left font-semibold">
                {item.title}
              </h3>

              <p className="text-white/40 text-sm mt-1">
                {item.time}
              </p>

            </div>

            <span className="text-red-500 font-bold">

              {item.price === 0
                ? "FREE"
                : `$${item.price}`}

            </span>

          </button>
                
        ))}

      </div>

    </section>

  );
}


// import { useState } from "react";

// export default function ShippingMethods({
//   shippingPrice,
//   setShippingPrice,
// }) {
//   const [method, setMethod] = useState("standard");

//   const shippingMethods = [
//     {
//       id: "standard",
//       title: "Standard Shipping",
//       time: "5–7 business days",
//       price: "FREE",
//     },
//     {
//       id: "express",
//       title: "Express Shipping",
//       time: "2–3 business days",
//       price: "$15.00",
//     },
//     {
//       id: "overnight",
//       title: "Overnight Delivery",
//       time: "Next business day",
//       price: "$35.00",
//     },
//   ];

//   return (
//     <div>

//       <h2 className="text-2xl font-display uppercase mb-8">
//         Shipping Method
//       </h2>

//       <div className="space-y-5">

//         {shippingMethods.map((item) => (

//           <label
//             key={item.id}
//             className={`
//               flex
//               justify-between
//               items-center
//               border
//               rounded-xl
//               p-6
//               cursor-pointer
//               transition
//               ${
//                 method === item.id
//                   ? "border-red-600 bg-white/5"
//                   : "border-white/10 hover:border-red-600"
//               }
//             `}
//           >

//             <div className="flex items-center gap-5">
// {/* <input
//                 type="radio"
//                 checked={method === item.id}
//                 onChange={() => setMethod(item.id)}
//               /> */}
//               <input
//   type="radio"
//   checked={shippingPrice === item.price}
//   onChange={() => setShippingPrice(item.price)}
// />
              

//               <div>

//                 <h3 className="font-semibold">
//                   {item.title}
//                 </h3>

//                 <p className="text-white/50 text-sm mt-1">
//                   {item.time}
//                 </p>

//               </div>

//             </div>

//             <span className="text-red-500 font-bold">
//               {item.price}
//             </span>

//           </label>

//         ))}

//       </div>

//     </div>
//   );
// }