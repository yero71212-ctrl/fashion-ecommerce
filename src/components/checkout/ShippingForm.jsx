export default function ShippingForm() {
  return (
    <section className="mt-12">

      <h2 className="text-xl uppercase tracking-[3px] mb-8">
        Shipping Address
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          placeholder="First Name"
          className="bg-transparent border border-white/15 rounded-xl p-4 outline-none focus:border-red-600"
        />

        <input
          placeholder="Last Name"
          className="bg-transparent border border-white/15 rounded-xl p-4 outline-none focus:border-red-600"
        />

        <input
          placeholder="Phone Number"
          className="bg-transparent border border-white/15 rounded-xl p-4 outline-none focus:border-red-600 md:col-span-2"
        />

        <input
          placeholder="Country"
          className="bg-transparent border border-white/15 rounded-xl p-4 outline-none focus:border-red-600"
        />

        <input
          placeholder="City"
          className="bg-transparent border border-white/15 rounded-xl p-4 outline-none focus:border-red-600"
        />

        <input
          placeholder="Street Address"
          className="bg-transparent border border-white/15 rounded-xl p-4 outline-none focus:border-red-600 md:col-span-2"
        />

        <input
          placeholder="Postal Code"
          className="bg-transparent border border-white/15 rounded-xl p-4 outline-none focus:border-red-600"
        />

      </div>

    </section>
  );
}



// import ContinueButton from "./ContinueButton";

// export default function ShippingForm() {
//   return (
//     <section className="space-y-8">

//       <h2 className="text-sm uppercase tracking-[4px] font-semibold">
//         Shipping Address
//       </h2>

//       <div className="grid md:grid-cols-2 gap-6">

//         {/* First Name */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             First Name *
//           </label>
//           <input
//             type="text"
//             defaultValue="Alex"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//         {/* Last Name */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             Last Name *
//           </label>
//           <input
//             type="text"
//             defaultValue="Carter"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//         {/* Address */}
//         <div className="md:col-span-2">
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             Address *
//           </label>
//           <input
//             type="text"
//             defaultValue="742 Madison Avenue"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//         {/* City */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             City *
//           </label>
//           <input
//             type="text"
//             defaultValue="New York"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//         {/* State */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             State *
//           </label>
//           <input
//             type="text"
//             defaultValue="NY"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//         {/* ZIP */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             ZIP Code *
//           </label>
//           <input
//             type="text"
//             defaultValue="10022"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//         {/* Country */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             Country *
//           </label>

//           <select className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition">
//             <option>United States</option>
//             <option>Canada</option>
//             <option>United Kingdom</option>
//             <option>Ethiopia</option>
//           </select>
//         </div>

//       </div>
//       <ContinueButton text="Continue to Shipping" />
// {/* 
//       <button
//         className="w-full mt-10 rounded-xl bg-gradient-to-r from-red-700 to-red-500 py-5 uppercase tracking-[4px] font-semibold hover:opacity-90 transition"
//       >
//         Continue to Shipping →
//       </button> */}

//     </section>
//   );
// }