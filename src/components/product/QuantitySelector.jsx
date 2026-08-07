import { Minus, Plus } from "lucide-react";


export default function QuantitySelector({
  quantity,
  setQuantity
}) {


  const increase = () => {
    setQuantity(quantity + 1);
  };


  const decrease = () => {

    if(quantity > 1){
      setQuantity(quantity - 1);
    }

  };


  return (

    <div className="mt-8">
      <div className="
        flex
        items-center
       
        w-fit
      ">


        <button
          onClick={decrease}
          className="
            py-3
            px-1
            hover:text-red-700
            transition
          "
        >
          <Minus size={18}/>
        </button>

        <span className="
          px-3
          text-lg
        ">
          {quantity}
        </span>



        <button
          onClick={increase}
          className="
            px-1
            py-3   
          hover:text-red-700
            transition
          "
        >
          <Plus size={18}/>
        </button>


      </div>


    </div>

  )
}