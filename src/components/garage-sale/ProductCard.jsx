import { Link } from "react-router-dom";
import translations from "../../data/translations";

function ProductCard({ product, language }) {
  const t = translations[language].garageSale;

  return (
    <div className="w-full max-w-[360px] border rounded-2xl p-5">

      {/* Product image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title[language]}
          className="w-full h-52 object-cover rounded-xl"
        />

        {/* Condition badge */}
        <span className="absolute top-3 right-3 rounded-full bg-[#1F1F1F] text-white px-4 py-2 text-sm font-bold">
          {product.condition[language]}
        </span>
      </div>

      {/* Product title */}
      <h3 className="mt-5 text-2xl font-bold">
        {product.title[language]}
      </h3>

      {/* Product price */}
      <p className="mt-2 text-lg">
        {product.price}
      </p>

      {/* View product button */}
      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-6 border rounded-full px-6 py-2 transition hover:bg-black hover:text-white"
      >
        {t.viewProduct}
      </Link>

    </div>
  );
}

export default ProductCard;