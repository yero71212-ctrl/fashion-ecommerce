import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ open, setOpen }) {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price.replace("$", "")) * item.quantity,
    0
  );
  const navigate = useNavigate();
  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[400px] bg-black text-white
        transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-zinc-800">
          <h2 className="text-xl font-bold">
            Shopping Bag ({cartItems.length})
          </h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Products */}
        <div className="p-5 space-y-5 overflow-y-auto h-[70vh]">
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your bag is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-4 border-b border-zinc-800 pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-28 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-sm text-gray-400">
                    Size: {item.size}
                  </p>

                  <p className="text-red-500">{item.price}</p>

                  <div className="flex items-center gap-2 mt-3">
                    <button onClick={() => decreaseQty(item.id, item.size)}>
                          <Minus size={16} />
                    </button>

                    <span>{item.quantity}</span>

                   <button onClick={() => increaseQty(item.id, item.size)}>
                       <Plus size={16} />
                   </button>
                  </div>
                </div>

                <button onClick={() => removeFromCart(item.id, item.size)}>
                   <Trash2 size={18} className="text-red-500" />
                 </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 p-6">
          <div className="flex justify-between mb-5">
            <span>Total</span>
            <span className="text-red-500 font-bold">
              ${total.toFixed(2)}
            </span>
          </div>

          <button 
          onClick={() => {
               setOpen(false);      
               navigate("/checkout"); 
                    }}
          className="w-full bg-red-600 py-3 rounded-lg font-semibold hover:bg-red-700">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}