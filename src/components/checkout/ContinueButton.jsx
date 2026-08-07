// import { Link } from "react-router-dom";

// export default function ContinueButton({
//   text,
//   to,
// }) {
//   return (
//     <Link
//       to={to}
//       className="block w-full mt-10"
//     >
//       <button
//         className="w-full py-4 rounded-xl bg-red-700 hover:bg-red-600 transition uppercase tracking-[3px] font-semibold"
//       >
//         {text}
//       </button>
//     </Link>
//   );
// }

// import { Link } from "react-router-dom";

// export default function ContinueButton({
//   text = "Continue",
//   onClick,
//   type = "button",
// }) {
//   return (
//     <Link to="/shipping">
//       <button
//         type={type}
//         onClick={onClick}
//         className="w-full mt-10 rounded-xl bg-gradient-to-r from-red-700 via-red-600 to-red-500 py-5 uppercase tracking-[4px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.35)] active:scale-[0.98]"
//       >
//       {text} →
//     </button>

//      <button
//       onClick={() => navigate("/payment")}
//       className="
//         w-full
//         mt-10
//         py-4
//         bg-red-600
//         rounded-xl
//         uppercase
//         font-bold
//         tracking-widest
//         hover:bg-red-700
//         transition
//       "
//     >
//       Continue To Payment →
//     </button>
//     </Link>
//   );
// }