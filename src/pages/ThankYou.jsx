import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-xl">

        <CheckCircle
          size={90}
          className="mx-auto text-red-500 mb-8"
        />

        <p className="uppercase tracking-[5px] text-red-500">
          Order Confirmed
        </p>

        <h1 className="text-6xl font-bold uppercase mt-4">
          Thank You
        </h1>

        <p className="text-white/60 mt-6">
          Your order has been placed successfully.
        </p>

        <div className="mt-10 border border-white/10 rounded-xl p-5">
          Order #
          <span className="ml-2 font-bold">
            VL-MSBJTHFS
          </span>
        </div>

        <div className="mt-10">
          <Link
            to="/shop"
            className="inline-block bg-red-600 px-10 py-4 rounded-xl hover:bg-red-700 transition"
          >
            Continue Shopping
          </Link>
        </div>

      </div>

    </main>
  );
}