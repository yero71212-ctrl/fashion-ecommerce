import { Link } from "react-router-dom";
import products from "../../data/products";

export default function RelatedProducts({ currentProduct }) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== currentProduct.id &&
        item.category === currentProduct.category
    );

  const fallbackProducts = products
    .filter((item) => item.id !== currentProduct.id)
    .slice(0, 4);

  const displayProducts =
    relatedProducts.length >= 4
      ? relatedProducts.slice(0, 4)
      : [...relatedProducts, ...fallbackProducts].slice(0, 4);

  return (
    <section className="mt-24">

      <h2 className="text-1xl text-red-700 font-heading uppercase mb-10">
        ---You May Also Like
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {displayProducts.map((product) => (

          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >

            <div className="overflow-hidden bg-neutral-900">

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  aspect-[3/4]
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

            </div>

            <div className="mt-4">

              <p className="text-xs text-white/50 uppercase">
                {product.category}
              </p>

              <h3 className="mt-1 font-medium">
                {product.name}
              </h3>

              <p className="mt-2 text-red-700 text-lg">
                ${product.price}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}