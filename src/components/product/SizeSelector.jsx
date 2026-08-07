
const sizes = ["XS", "S", "M", "L", "XL"];

export default function SizeSelector({ size, setSize }) {
  return (

    <div className="mt-8">
      <h3 className="
        text-sm
        uppercase
        tracking-widest
        mb-4
      ">
        Size
      </h3>

      <div className="flex gap-3">


        {sizes.map((item)=>(

          <button
            key={item}
            onClick={()=>setSize(item)}
            className={`
              w-10
              h-10
              border
              transition
              uppercase

              ${
                size === item
                ? "bg-red-700/30 text-white border-red-700/40"
                : "border-white/10 hover:border-red-700/40"
              }
            `}
          >

            {item}

          </button>
        ))}
      </div>
    </div>

  )
}