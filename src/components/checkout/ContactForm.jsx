export default function ContactForm() {
  return (
    <section>

      <h2 className="text-xl uppercase tracking-[3px] mb-8">
        Contact
      </h2>

      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-transparent border border-white/10 rounded-xl p-4 outline-none focus:border-red-600"
      />

    </section>
  );
}

// export default function ContactForm() {
//   return (
//     <section className="mb-12">

//       <h2 className="text-sm uppercase tracking-[4px] font-semibold mb-8">
//         Contact
//       </h2>

//       <div className="grid md:grid-cols-2 gap-6">

//         {/* Email */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             Email *
//           </label>

//           <input
//             type="email"
//             defaultValue="alex.carter@veilhouse.com"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="block text-[10px] uppercase tracking-[3px] text-white/60 mb-2">
//             Phone
//           </label>

//           <input
//             type="tel"
//             defaultValue="+1 (212) 555-0188"
//             className="w-full bg-[#111] border border-white/10 rounded-lg px-2 py-3 outline-none focus:border-red-500 transition"
//           />
//         </div>

//       </div>

//     </section>
//   );
// }