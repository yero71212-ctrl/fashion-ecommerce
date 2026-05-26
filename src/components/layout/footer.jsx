// // Footer.jsx
// import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import { ArrowUpRight } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-black ml-0 text-white border-t border-white/10">
//       {/* MAIN FOOTER */}
//      <div className="max-w-7xl mx-auto  px-6 md:px-10 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          
//           {/* BRAND */}
//           <div >
//             <h1 className="text-5xl font-black tracking-[0.5em]">
//               VEIL
//             </h1>

//             <p className="text-white/60 mt-8 leading-8 max-w-sm">
//               Bold fashion for those who define their own era.
//               Designed between Berlin, Tokyo, and New York.
//             </p>

//             {/* NEWSLETTER */}
//             <div className="flex mt-10 border border-white/10 rounded-full overflow-hidden max-w-md">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="bg-transparent px-6 py-4 w-full outline-none text-sm"
//               />

//               <button className="bg-red-600 hover:bg-red-500 transition-all duration-300 px-6">
//                 <ArrowUpRight size={20} />
//               </button>
//             </div>

//             <p className="text-white/40 text-sm mt-4">
//               Join 14,000+ subscribers. Get early access to drops
//               and exclusive content.
//             </p>
//           </div>

//           {/* SHOP */}
//           <div>
//             <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
//               Shop
//             </h3>

//             <ul className="space-y-5 text-white/60">
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 New Arrivals
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Featured Collection
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Outerwear
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Tops
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Bottoms
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Accessories
//               </li>
//             </ul>
//           </div>

//               {/* Support */}
//           <div>
//             <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
//              Support
//             </h3>

//             <ul className="space-y-5 text-white/60">
//             <li className="hover:text-red-500 transition-all cursor-pointer">
//                Size Guide
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Shipping & Returns
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Order Tracking
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 FAQ
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                Contact Us
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                Care Instructions
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Privacy Policy
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Terms of Service
//               </li>
//             </ul>
//           </div>
//           {/* COMPANY */}
//           <div>
//             <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
//               Company
//             </h3>

//             <ul className="space-y-5 text-white/60">
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Our Story
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Sustainability
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Careers
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Press & Media
//               </li>
//               <li className="hover:text-red-500 transition-all cursor-pointer">
//                 Collaborations
//               </li>
//             </ul>
    

// {/* SOCIAL */}
// <div>
//   <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
//     Social
//   </h3>

//   <div className="space-y-5">

//     <div className="group border border-white/10 bg-white/[0.03] hover:bg-red-600/10 transition-all duration-300 rounded-2xl p-5 cursor-pointer">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
          
//           <div className="bg-red-600/20 p-3 rounded-xl">
//             <FaInstagram className="text-red-500" size={20} />
//           </div>

//           <div>
//             <h4 className="font-medium">Instagram</h4>
//             <p className="text-white/40 text-sm">
//               @veil.official
//             </p>
//           </div>
//         </div>

//         <ArrowUpRight
//           className="group-hover:text-red-500 transition-all"
//           size={18}
//         />
//       </div>
//     </div>

//     <div className="group border border-white/10 bg-white/[0.03] hover:bg-red-600/10 transition-all duration-300 rounded-2xl p-5 cursor-pointer">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">

//           <div className="bg-red-600/20 p-3 rounded-xl">
//             <FaTwitter className="text-red-500" size={20} />
//           </div>

//           <div>
//             <h4 className="font-medium">Twitter / X</h4>
//             <p className="text-white/40 text-sm">
//               @veilfashion
//             </p>
//           </div>
//         </div>

//         <ArrowUpRight
//           className="group-hover:text-red-500 transition-all"
//           size={18}
//         />
//       </div>
//     </div>

//     <div className="group border border-white/10 bg-white/[0.03] hover:bg-red-600/10 transition-all duration-300 rounded-2xl p-5 cursor-pointer">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">

//           <div className="bg-red-600/20 p-3 rounded-xl">
//             <FaYoutube className="text-red-500" size={20} />
//           </div>

//           <div>
//             <h4 className="font-medium">YouTube</h4>
//             <p className="text-white/40 text-sm">
//               VEIL Studio
//             </p>
//           </div>
//         </div>

//         <ArrowUpRight
//           className="group-hover:text-red-500 transition-all"
//           size={18}
//         />
//       </div>
//     </div>

//   </div>
// </div>



            
//         </div>
            
//         </div>






         
//         {/* BOTTOM */}
//         <div className="border-t border-white/10 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-white/40 text-sm">
//             © 2026 VEIL Fashion House. All rights reserved.
//           </p>
//           <div className="flex gap-8 text-sm text-white/40">
//             <p className="hover:text-red-500 cursor-pointer transition-all">
//               Privacy Policy
//             </p>
//             <p className="hover:text-red-500 cursor-pointer transition-all">
//               Terms of Service
//             </p>
//             <p className="hover:text-red-500 cursor-pointer transition-all">
//               Cookie Settings
//             </p>
//           </div>
//           <div className="flex items-center gap-3 text-white/40 text-sm">
//             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
//             Berlin · Tokyo · New York
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// Footer.jsx

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* BRAND */}
          <div>
            <h1 className="text-5xl font-black tracking-[0.5em]">
              VEIL
            </h1>

            <p className="text-white/60 mt-8 leading-8 max-w-sm">
              Bold fashion for those who define their own era.
              Designed between Berlin, Tokyo, and New York.
            </p>

            {/* NEWSLETTER */}
            <div className="flex mt-10 border border-white/10 rounded-full overflow-hidden max-w-md">

              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent px-6 py-4 w-full outline-none text-sm"
              />

              <button className="bg-red-600 hover:bg-red-500 transition-all duration-300 px-6">
                <ArrowUpRight size={20} />
              </button>

            </div>

            <p className="text-white/40 text-sm mt-4">
              Join 14,000+ subscribers. Get early access to drops
              and exclusive content.
            </p>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
              Shop
            </h3>

            <ul className="space-y-5 text-white/60">

              <li className="hover:text-red-500 transition-all cursor-pointer">
                New Arrivals
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Featured Collection
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Outerwear
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Tops
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Bottoms
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Accessories
              </li>

            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
              Support
            </h3>

            <ul className="space-y-5 text-white/60">

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Size Guide
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Shipping & Returns
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Order Tracking
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                FAQ
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Contact Us
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Care Instructions
              </li>

            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
              Company
            </h3>

            <ul className="space-y-5 text-white/60">

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Our Story
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Sustainability
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Careers
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Press & Media
              </li>

              <li className="hover:text-red-500 transition-all cursor-pointer">
                Collaborations
              </li>

            </ul>
          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="uppercase tracking-[0.3em] text-sm mb-8 text-white">
              Social
            </h3>

            <div className="space-y-5">

              {/* Instagram */}
              <div className="group border border-white/10 bg-white/[0.03] hover:bg-red-600/10 transition-all duration-300 rounded-2xl p-5 cursor-pointer">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-red-600/20 p-3 rounded-xl">
                      <FaInstagram className="text-red-500" size={20} />
                    </div>

                    <div>
                      <h4 className="font-medium">
                        Instagram
                      </h4>

                      <p className="text-white/40 text-sm">
                        @veil.official
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    className="group-hover:text-red-500 transition-all"
                    size={18}
                  />

                </div>
              </div>

              {/* Twitter */}
              <div className="group border border-white/10 bg-white/[0.03] hover:bg-red-600/10 transition-all duration-300 rounded-2xl p-5 cursor-pointer">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-red-600/20 p-3 rounded-xl">
                      <FaTwitter className="text-red-500" size={20} />
                    </div>

                    <div>
                      <h4 className="font-medium">
                        Twitter / X
                      </h4>

                      <p className="text-white/40 text-sm">
                        @veilfashion
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    className="group-hover:text-red-500 transition-all"
                    size={18}
                  />

                </div>
              </div>

              {/* Youtube */}
              <div className="group border border-white/10 bg-white/[0.03] hover:bg-red-600/10 transition-all duration-300 rounded-2xl p-5 cursor-pointer">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="bg-red-600/20 p-3 rounded-xl">
                      <FaYoutube className="text-red-500" size={20} />
                    </div>

                    <div>
                      <h4 className="font-medium">
                        YouTube
                      </h4>

                      <p className="text-white/40 text-sm">
                        VEIL Studio
                      </p>
                    </div>

                  </div>

                  <ArrowUpRight
                    className="group-hover:text-red-500 transition-all"
                    size={18}
                  />

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-white/40 text-sm">
            © 2026 VEIL Fashion House. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm text-white/40">

            <p className="hover:text-red-500 cursor-pointer transition-all">
              Privacy Policy
            </p>

            <p className="hover:text-red-500 cursor-pointer transition-all">
              Terms of Service
            </p>

            <p className="hover:text-red-500 cursor-pointer transition-all">
              Cookie Settings
            </p>

          </div>

          <div className="flex items-center gap-3 text-white/40 text-sm">

            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>

            Berlin · Tokyo · New York

          </div>

        </div>

      </div>
    </footer>
  );
}