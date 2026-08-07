import { useState } from "react";

export default function ProductGallery({ images }) {

  const [activeImage, setActiveImage] = useState(images[0]);


  return (

    <div className="
      grid 
      md:grid-cols-[100px_1fr]
      gap-6
    ">


      {/* THUMBNAIL GALLERY */}

      <div className="
        flex 
        md:flex-col
        gap-4
        order-2
        md:order-1
      ">

        {images.map((img,index)=>(

          <button
            key={index}
            onClick={()=>setActiveImage(img)}
            className={`
              border
              border-red-700
              overflow-hidden
              transition
              ${
                activeImage === img
                ? "border-red-700/50"
                : "border-white/20"
              }
            `}
          >

            <img
              src={img}
              alt={`thumbnail-${index}`}
              className="
                w-20
                h-30
                object-cover
              "
            />

          </button>

        ))}


      </div>



      {/* LARGE IMAGE */}

      <div className="
        order-1
        md:order-2
        overflow-hidden
        bg-neutral-900
      ">


        <img
          src={activeImage}
          alt="product"
          className="
            w-full
            h-[600px]
            object-cover
            hover:scale-105
            transition
            duration-500
          "
        />


      </div>


    </div>

  );
}