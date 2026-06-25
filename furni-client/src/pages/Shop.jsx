import data from "../assets/data/data";
import ProductCard from "../components/ProductCard";

function Shop() {
  return (
    <section>
      <div className="bg-[#3b5d50]">
        <div className="max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-32">
          <h1 className="text-6xl text-white font-bold ">Shop</h1>
        </div>
      </div>
      <div className="max-w-339 mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-[#006a42] mb-8 ">Discover our collection of modern furniture.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Shop;
