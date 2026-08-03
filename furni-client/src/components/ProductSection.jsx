import ProductCard from "./ProductCard";
import data from "../assets/data/data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios  from "axios";

function ProductSection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://furni-ecommerce-3.onrender.com/api/products");
      setProducts(response.data.data);
    };
    fetchProducts();
  }, []);

  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-16 max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-16">
        <div className="flex flex-col gap-8 max-w-sm items-center text-center  lg:items-start lg:text-left  ">
          <h2 className="text-3xl font-semibold max-w-70">
            Crafted with excellent material.
          </h2>

          <p className="text-gray-500 max-w-sm">
            Donec vitae odio quis nisl dapibus malesuada Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>

          <Link
            to="/blog"
            className="self-center lg:self-start px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-black"
          >
            Explore
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
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

export default ProductSection;
