import ProductCard from '../components/ProductCard';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dealhunt - Today’s Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard
          title="Sample Product 1"
          price="₹999"
          image="/sample1.jpg"
          link="#"
        />
        <ProductCard
          title="Sample Product 2"
          price="₹1499"
          image="/sample2.jpg"
          link="#"
        />
        <ProductCard
          title="Sample Product 3"
          price="₹799"
          image="/sample3.jpg"
          link="#"
        />
      </div>
    </div>
  );
}
