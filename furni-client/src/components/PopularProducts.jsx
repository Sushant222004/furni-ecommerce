import PopularProductCard from "./PopularProductCard";
import chair1 from "../assets/images/product-1.png";
import chair2 from "../assets/images/product-2.png";
import chair3 from "../assets/images/product-3.png";

const products = [
  {
    id: 1,
    image: chair1,
    head: "Nordic Chair",
    para: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 2,
    image: chair2,
    head: "Kruzo Aero Chair",
    para: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    id: 3,
    image: chair3,
    head: "Ergonomic Chair",
    para: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
];

function PopularProducts() {
  return (
    <section>
      <div className="max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <PopularProductCard
              key={product.id}
              image={product.image}
              head={product.head}
              para={product.para}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularProducts;
