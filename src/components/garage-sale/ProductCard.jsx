import { Link } from "react-router-dom";
import translations from "../../data/translations";

function ProductCard({ product, language }) {
  const t = translations[language].garageSale;

  return (
    <div className="w-full max-w-[360px] border rounded-2xl p-5">
      <img
        src={product.image}
        alt={product.title[language]}
        className="w-full h-52 object-cover rounded-xl"
      />

      <h3 className="mt-5 text-2xl font-bold">
        {product.title[language]}
      </h3>

      <p className="mt-2 text-lg">
        {product.price}
      </p>

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