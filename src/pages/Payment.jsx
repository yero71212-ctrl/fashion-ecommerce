import Footer from "../components/layout/Footer";

import CheckoutHeader from "../components/checkout/CheckoutHeader";
import CheckoutSteps from "../components/checkout/CheckoutSteps";
import PaymentForm from "../components/checkout/PaymentForm";
import OrderSummary from "../components/checkout/OrderSummary";


export default function Payment(){

  return (

    <main className="min-h-screen bg-black text-white">

     


      <section className="
        max-w-7xl 
        mx-auto 
        px-6 
        pt-32 
        pb-20
      ">


        <CheckoutHeader />


        <CheckoutSteps step={3}/>



        <div className="
          grid 
          lg:grid-cols-[1.8fr_1fr]
          gap-16
          mt-16
        ">



          {/* LEFT */}

          <PaymentForm />



          {/* RIGHT */}

          <OrderSummary
            shippingPrice={0}
          />


        </div>


      </section>


      <Footer />

    </main>

  )
}