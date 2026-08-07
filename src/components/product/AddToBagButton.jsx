import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";


export default function AddToBagButton({
  product,
  size,
  quantity
}) {


  const {addToCart} = useCart();



  const handleAdd = ()=>{


    if(!size){

      alert("Please select a size");

      return;

    }


    addToCart(
      product,
      size,
      quantity
    );


  };



  return (

    <button

      onClick={handleAdd}

      className="    
        flex-1
        flex
        items-center
        justify-center
        gap-3
        bg-red-700
        text-white      
        uppercase
        tracking-widest
        font-bold
        hover:bg-red-800
        transition
        rounded-2xl
      "

    >

      <ShoppingBag size={20}/>

      Add To Bag

    </button>

  )

}