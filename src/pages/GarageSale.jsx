import Section from "../components/layout/Section";
import ProductCard from "../components/garage-sale/ProductCard";
import products from "../data/products";

function GarageSale() {
  return (
    <Section>
      <h1 className="text-4xl font-bold">
        Garage Sale
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </Section>
  );
}

export default GarageSale;