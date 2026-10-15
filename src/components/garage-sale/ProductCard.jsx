import Button from "../ui/Button";
import translations from "../../data/translations";

function ProductCard({ product, language }) {
  const t = translations[language].garageSale;

  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-[#1F1F1F]/20 p-4">
      {/* Product image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title[language]}
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />

        {/* Condition badge */}
        <span className="absolute right-3 top-3 rounded-full bg-[#1F1F1F] px-3 py-2 text-xs font-semibold text-white">
          {product.condition[language]}
        </span>
      </div>

      {/* Product title and price */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="min-w-0 text-lg font-bold leading-6">
          {product.title[language]}
        </h3>

        <p className="shrink-0 text-lg font-bold leading-6">
          {product.price}
        </p>
      </div>

      {/* Short description */}
      <p className="mt-3 line-clamp-2 min-h-12 text-sm leading-6 text-[#5D574D]">
        {product.cardDescription[language]}
      </p>

      {/* View product button */}
      <div className="mt-auto flex justify-end pt-4">
        <Button
          to={`/product/${product.id}`}
          variant="primary"
          className="px-5 py-2.5"
        >
          {t.viewProduct} →
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;