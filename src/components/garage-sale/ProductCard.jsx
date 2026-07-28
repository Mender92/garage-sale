import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-2xl p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-52 object-cover rounded-xl"
      />

      <h3 className="text-xl font-bold mt-5">
        {product.title}
      </h3>

      <p className="mt-2">{product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="inline-block mt-6 border rounded-full px-6 py-2"
      >
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;