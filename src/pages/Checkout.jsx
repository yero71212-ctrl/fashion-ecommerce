
import Footer from "../components/layout/Footer";

import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ContactForm from "../components/checkout/ContactForm";
import ShippingForm from "../components/checkout/ShippingForm";
import OrderSummary from "../components/checkout/OrderSummary";
// import ContinueButton from "../components/checkout/ContinueButton";
import CheckoutContinueButton from "../components/checkout/CheckoutContinueButton";

export default function Checkout() {
  return (
    <main className="min-h-screen bg-black text-white">

     

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <CheckoutHeader />

        <CheckoutSteps step={1} />

        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-16 mt-16">

          {/* LEFT */}
          <div className="space-y-10">

            <ContactForm />

            <ShippingForm />
          
          {/* //  <ContinueButton/>
             */}

          <CheckoutContinueButton />
          </div>

          {/* RIGHT */}
          <OrderSummary shippingPrice={0} />

        </div>

      </section>

      <Footer />

    </main>
  );
}






// import CheckoutHeader from "../components/checkout/CheckoutHeader";
// import CheckoutSteps from "../components/checkout/CheckoutSteps";
// import ContactForm from "../components/checkout/ContactForm";
// import ShippingForm from "../components/checkout/ShippingForm";
// import OrderSummary from "../components/checkout/OrderSummary";

// export default function Checkout() {
//   return (
//     <section className="min-h-screen bg-[#090909] text-white">
//       <CheckoutHeader />

//       <div className="max-w-7xl mx-auto px-6 py-10">

        
//                 <CheckoutSteps step={2} />
//         <div className="grid lg:grid-cols-[1.8fr_1fr] gap-16 mt-12">

//           <div>

//             <div className="border border-red-500/20 rounded-md bg-red-500/10 p-3 mb-8">

//               <span className="text-red-400 mr-2">●</span>

//               Demo mode • All fields are pre-filled.

//             </div>

//             <ContactForm />

//             <ShippingForm />

//           </div>

//           <OrderSummary
//             shippingPrice={shippingPrice}
//           />

//         </div>

//       </div>

//     </section>
//   );
// }