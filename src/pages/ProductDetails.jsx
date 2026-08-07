import { useState } from "react";
import { useParams } from "react-router-dom";

import products from "../data/products";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductGallery from "../components/product/ProductGallery";
import SizeSelector from "../components/product/SizeSelector";
import QuantitySelector from "../components/product/QuantitySelector";
import WishlistButton from "../components/product/WishlistButton";
import ProductAccordion from "../components/product/ProductAccordion";
import RelatedProducts from "../components/product/RelatedProducts";
import AddToBagButton from "../components/product/AddToBagButton";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen px-6 py-20  mt-8">
      <Navbar />
           
      <section
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-12
        "
      >

        {/* LEFT */}

        <ProductGallery  key={product.id} images={product.images} />

        {/* RIGHT */}

        <div>

          <p className="text-sm uppercase tracking-[4px] text-red-700 mb-2">
            {product.category}
          </p>

          <h1 className="text-4xl font-display uppercase">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mt-5">

            {product.oldPrice && (
              <span className="text-white/40 line-through">
                ${product.oldPrice}
              </span>
            )}

            <span className="text-2xl text-red-700 font-bold">
              ${product.price}
            </span>

          </div>

          <p className="mt-8 text-white/70 leading-7">
            {product.description}
          </p>

          <SizeSelector
            size={size}
            setSize={setSize}
          />

          <div className="flex gap-4 mt-8">
             <QuantitySelector
            quantity={quantity}
            setQuantity={setQuantity}
          />

            <AddToBagButton
              product={product}
              size={size}
              quantity={quantity}
            />

            <WishlistButton />

          </div>

          <ProductAccordion product={product} />

        </div>

      </section>

      <RelatedProducts currentProduct={product} />
             <Footer />
    </main>
         
  );
}
