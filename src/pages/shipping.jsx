import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import ShippingMethods from "../components/checkout/ShippingMethods";
import OrderSummary from "../components/checkout/OrderSummary";
// import ContinueButton from "../components/checkout/ContinueButton";
import ShippingContinueButton from "../components/checkout/ShippingContinueButton";


export default function Shipping() {
  const [shippingPrice, setShippingPrice] = useState(0);

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        <CheckoutHeader />

        <CheckoutSteps step={2} />

        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-16 mt-16">

          <div>

            <ShippingMethods
              shippingPrice={shippingPrice}
              setShippingPrice={setShippingPrice}
            />

            <div className="mt-10">
              {/* <ContinueButton
                text="Continue To Payment"
                to="/payment"
              /> */}
              <ShippingContinueButton />
            </div>

          </div>

          <OrderSummary
            shippingPrice={shippingPrice}
          />

        </div>

      </section>

      <Footer />

    </main>
  );
}


// import { useState } from "react";
// import Navbar from "../components/layout/Navbar";
// import Footer from "../components/layout/Footer";

// import CheckoutHeader from "../components/checkout/CheckoutHeader";
// import CheckoutSteps from "../components/checkout/CheckoutSteps";
// import ShippingMethods from "../components/checkout/ShippingMethods";
// import OrderSummary from "../components/checkout/OrderSummary";
// import ContinueButton from "../components/checkout/ContinueButton";

// export default function Shipping() {
//   const [shippingPrice, setShippingPrice] = useState(0);
//   return (
//     <main className="bg-black text-white min-h-screen">
//       <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">

//         <CheckoutHeader />

//         <CheckoutSteps step={2} />

//         <div className="grid lg:grid-cols-[2fr_1fr] gap-16 mt-16">

//           <div>
//             {/* <ShippingMethods /> */}

//             <ShippingMethods
//   shippingPrice={shippingPrice}
//   setShippingPrice={setShippingPrice}
// />

//             <ContinueButton />
//           </div>

//           {/* <OrderSummary /> */}
// <OrderSummary
//   shippingPrice={shippingPrice}
// />
//         </div>

//       </div>

//       <Footer />
//     </main>
//   );
// }