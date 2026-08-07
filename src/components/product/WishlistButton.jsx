import { Heart } from "lucide-react";
import { useState } from "react";


export default function WishlistButton(){

  
  const [liked,setLiked] = useState(false);



  return (

    <button

      onClick={()=>setLiked(!liked)}

      className="
        w-14
        h-14
        border
        border-white/10
        flex
        items-center
        justify-center
        transition
      "

    >

      <Heart

        size={24}

        className={`
          transition

          ${
            liked
            ?
            "fill-red-500 text-red-500"
            :
            ""
          }

        `}

      />


    </button>

  )

}