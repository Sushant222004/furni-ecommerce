import PopularProductCard from "./PopularProductCard";
import chair1 from "../assets/images/product-1.png";
import chair2 from "../assets/images/product-2.png";
import chair3 from "../assets/images/product-3.png";
import { useState, useEffect } from "react";
import axios from "axios"

function PopularProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(  "https://furni-ecommerce-3.onrender.com/api/products"
);
      setProducts(response.data.data);
    };
    fetchProducts();
  });
  return (
    <section>
      <div className="max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <PopularProductCard
              key={product._id}
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
