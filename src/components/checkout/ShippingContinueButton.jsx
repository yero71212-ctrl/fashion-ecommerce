import { useNavigate } from "react-router-dom";

export default function ShippingContinueButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/payment")}
      className="
        w-full
        mt-10
        rounded-xl
        bg-gradient-to-r
        from-red-700
        via-red-600
        to-red-500
        py-5
        uppercase
        tracking-[4px]
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
        active:scale-[0.98]
      "
    >
      Continue To Payment →
    </button>
  );
}