import { useOutletContext } from "react-router-dom";
import Section from "../components/layout/Section";
import ProductCard from "../components/garage-sale/ProductCard";
import products from "../data/products";
import translations from "../data/translations";

function GarageSale() {
  const { language } = useOutletContext();
  const t = translations[language].garageSale;

  return (
    <Section>
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold mb-12">
          {t.title}
        </h1>

        <div className="flex flex-wrap gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default GarageSale;