import { useCart } from "../../context/CartContext";

export default function OrderSummary({
  shippingPrice = 0,
}) {
  const { cartItems, totalPrice } = useCart();

  const subtotal = totalPrice;
  const total = subtotal + shippingPrice;
console.log({
  subtotal,
  shippingPrice,
  total,
});

  return (
    <aside className="bg-[#140404] border border-white/10 rounded-2xl p-8 h-fit sticky top-24">

      {/* Title */}
      <h2 className="text-xs uppercase tracking-[4px] font-semibold mb-8">
        Order Summary
      </h2>

      {/* Products */}
      <div className="space-y-6">

        {cartItems.length === 0 ? (

          <p className="text-white/40 text-sm">
            Your cart is empty
          </p>

        ) : (

          cartItems.map((item) => (

            <div
              key={`${item.id}-${item.size}`}
              className="flex gap-5 border-b border-white/10 pb-6"
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-32 object-cover rounded-xl"
              />

              {/* Details */}
              <div className="flex flex-col justify-between flex-1">

                <div>

                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-white/50 text-sm mt-2">
                    Size: {item.size || "N/A"}
                  </p>

                  <p className="text-white/50 text-sm">
                    Qty: {item.quantity}
                  </p>

                </div>

                <span className="text-red-400 text-xl font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>

              </div>

            </div>

          ))

        )}

      </div>

      {/* Price Summary */}
      <div className="space-y-4 py-8">

        <div className="flex justify-between text-white/70">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-white/70">
          <span>Shipping</span>

          <span className="text-green-500">
            {shippingPrice === 0
              ? "FREE"
              : `$${shippingPrice.toFixed(2)}`}
          </span>
 
        </div>

        <div className="flex justify-between text-white/70">
          <span>Tax</span>
          <span>$0.00</span>
        </div>

      </div>

      {/* Total */}
      <div className="border-t border-white/10 pt-6 flex justify-between items-center">

        <span className="text-sm uppercase tracking-[3px]">
          Total
        </span>

        <span className="text-2xl font-bold text-red-500">
          ${total.toFixed(2)}
        </span>

      </div>

      {/* Security */}
      <div className="mt-8 bg-black/30 rounded-xl p-4 border border-white/10">

        <p className="text-center text-sm text-white/40">
          🔒 SSL Secure Checkout
        </p>

      </div>

    </aside>
  );
}