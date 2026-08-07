import { useNavigate } from "react-router-dom";

export default function PaymentForm(){
const navigate = useNavigate();

  const handlePlaceOrder = () => {
    navigate("/thank-you");
  };
return (

            <section>
            {/* DEMO */}
            <div className="
            border
            border-red-500/30
            bg-red-500/10
            p-4
            rounded-xl
            mb-10
            text-sm
            text-white/70
            ">

            <span className="text-red-500">
            ●
            </span>

            &nbsp;
            Demo mode • All fields are pre-filled. Just click Place Order.

            </div>
          <h2 className="
            text-2xl
            uppercase
            tracking-[3px]
            font-bold
            mb-8
            ">
            Payment
            </h2>
            {/* CARD NUMBER */}
            <label className="text-xs tracking-widest">
            CARD NUMBER *
            </label>
            <input
            value="4242 4242 4242 4242"
            readOnly
            className="
            w-full
            mt-3
            p-4
            bg-white/5
            border
            border-white/10
            rounded-xl
            outline-none
            "
            />
            {/* NAME */}

            <label className="
            block
            mt-6
            text-xs
            tracking-widest
            ">
            CARDHOLDER NAME *
            </label>
            <input
            value="ALEX CARTER"
            readOnly
            className="
            w-full
            mt-3
            p-4
            bg-white/5
            border
            border-white/10
            rounded-xl
            "
            />
            <div className="
            grid
            md:grid-cols-2
            gap-5
            mt-6
            ">
            <div>
            <label className="text-xs tracking-widest">
            EXPIRY DATE *
            </label>
            <input
            value="12/28"
            readOnly
            className="
            w-full
            mt-3
            p-4
            bg-white/5
            border
            border-white/10
            rounded-xl
            "
            />
            </div>
            <div>

            <label className="text-xs tracking-widest">
            CVV *
            </label>


            <input
            value="•••"
            readOnly
            className="
            w-full
            mt-3
            p-4
            bg-white/5
            border
            border-white/10
            rounded-xl
            "
            />


            </div>
            </div>
            {/* BILLING */}
            <h3 className="
            mt-12
            mb-5
            uppercase
            tracking-[3px]
            font-bold
            ">
            Billing Address
            </h3>
            <div className="
            bg-white/5
            border
            border-white/10
            rounded-xl
            p-6
            text-white/70
            leading-7
            ">
            <div className="
            flex
            gap-3
            items-center
            mb-4
            ">
            <span className="
            w-5
            h-5
            bg-red-500
            rounded
            flex
            items-center
            justify-center
            text-xs
            ">
            ✓
            </span>
            Same as shipping address
            </div>
            Alex Carter
            <br/>
            420 W 14th Street, Suite 3B
            <br/>
            New York, NY 10014
            <br/>
            United States
            </div>
            <button
             onClick={handlePlaceOrder}
            className="
            w-full
            mt-10
            py-5
            rounded-xl
            bg-red-600
            hover:bg-red-500
            transition
            uppercase
            tracking-[4px]
            font-bold
            " >
            🔒 Place Order

            </button>
            </section>
)

}