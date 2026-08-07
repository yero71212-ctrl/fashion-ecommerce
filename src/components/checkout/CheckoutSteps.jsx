
export default function CheckoutSteps({ step }) {
  const steps = [
    "Information",
    "Shipping",
    "Payment",
  ];

  return (
    <div className="flex justify-center items-center gap-10 mt-12">

      {steps.map((item, index) => (
        <div
          key={item}
          className="flex items-center gap-4"
        >
          <div
            className={`
              w-8
              h-8
              rounded-full
              flex
              items-center
              justify-center
              text-sm
              font-bold
              ${
                step === index === 0
                  ? "bg-red-600 text-white"
                  : "border border-white/20 text-white/40"
              }
            `}
          >
            {index + 1}
          </div>

          <span
            className={`
              uppercase
              tracking-[3px]
              text-sm
              ${
                step === index === 0
                  ? "text-white"
                  : "text-white/40"
              }
            `}
          >
            {item}
          </span>

          {index !== steps.length - 1 && (
            <div className="w-20 h-px bg-white/20" />
          )}
        </div>
      ))}

    </div>
  );
}