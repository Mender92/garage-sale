import Section from "../components/layout/Section";
import ProductCard from "../components/garage-sale/ProductCard";
import products from "../data/products";

function GarageSale() {
  return (
    <Section>
      <div className="max-w-6xl">
        <h1 className="text-5xl font-bold mb-12">
          Garage Sale
        </h1>

        <div className="flex flex-wrap gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default GarageSale;