// import { Lock } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function CheckoutHeader() {
//   return (
//     <header className="border-b border-white/10">

//       <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

//         <button 
//          to="/cart"
//         className="uppercase tracking-[4px] text-[10px] md:text-xs text-white/70 hover:text-red-400">

//           ← Back to Bag

//         </button>

//         <div className="text-center">

//           <h1 className="md:text-3xl font-light tracking-[14px]">
//             VEIL
//           </h1>

//           <p className="uppercase text-[8px] tracking-[5px] text-white/30">
//             Fashion House
//           </p>

//         </div>

//         <div className="flex items-center gap-2 text-white/20">

//           <Lock size={18} />

//           Secure Checkout

//         </div>

//       </div>

//     </header>
//   );
// }


import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import { Lock } from "lucide-react";

export default function CheckoutHeader() {
  return (
    <header className="border-b border-white/10 pb-6">

      <div className="flex items-center justify-between">

        <Link
          to="/cart"
          className="text-sm uppercase tracking-[3px] text-white/60 hover:text-red-500 transition"
        >
          ← Back To Bag
        </Link>

        <Logo />

        <div className="flex items-center gap-2 text-white/50 text-sm">
          <Lock size={14} />
          <span>Secure Checkout</span>
        </div>

      </div>

    </header>
  );
}