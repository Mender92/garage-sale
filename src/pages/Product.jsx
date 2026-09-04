import { Link, useOutletContext, useParams } from "react-router-dom";
import Section from "../components/layout/Section";
import products from "../data/products";
import translations from "../data/translations";

function Product() {
  const { id } = useParams();
  const { language } = useOutletContext();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const t = translations[language].garageSale;

  if (!product) {
    return (
      <Section>
        <h1 className="text-4xl font-bold">
          Product not found
        </h1>

        <p className="mt-4">
          The product you are looking for does not exist.
        </p>

        <Link
          to="/garage-sale"
          className="inline-block mt-8 border rounded-full px-6 py-3"
        >
          {t.backToGarageSale}
        </Link>
      </Section>
    );
  }

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        <img
          src={product.image}
          alt={product.title[language]}
          className="w-2/3 rounded-2xl object-cover"
        />

        <div>
          <h1 className="text-5xl font-bold">
            {product.title[language]}
          </h1>

          <p className="mt-6 text-3xl font-semibold">
            {product.price}
          </p>

          {product.minimumOrder && (
            <p className="mt-2 text-sm text-gray-500">
              {product.minimumOrder[language]}
            </p>
          )}

          <p className="mt-8 leading-8 text-lg">
            {product.description[language]}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-black text-white px-6 py-3"
            >
              {translations[language].nav.contact}
            </Link>

            <Link
              to="/garage-sale"
              className="rounded-full border px-6 py-3"
            >
              {t.backToGarageSale}
            </Link>
          </div>
        </div>

      </div>
    </Section>
  );
}

export default Product;