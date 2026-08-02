import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/api/products/${id}`,
      );
      setProduct(response.data.data);

      const productsResponse = await axios.get(
        "http://localhost:5000/api/products",
      );

      setProducts(productsResponse.data.data);
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };
  if (!product) {
    return (
      <h2 className="max-w-339 mx-auto px-6 py-16 text-4xl text-red-600">
        Product not found!
      </h2>
    );
  }

  return (
    <div className="max-w-339 mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <img
          className="w-full max-w-87.5"
          src={`http://localhost:5000/images/${product.image}`}
          alt={product.name}
        />
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-bold"> {product.name}</h3>
          <p className="text-2xl font-semibold text-[#3b5d50]">
            ${product.price}
          </p>
          <p className="text-gray-500 leading-7 max-w-lg">
            Crafted with premium materials and designed for modern living
            spaces. This chair combines comfort, durability, and elegant design.
          </p>
          <button
            onClick={addToCart}
            className="self-start bg-[#3b5d50] text-white px-8 py-3 rounded-full hover:bg-black transition"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <h2 className="text-5xl font-bold text-center mt-24 mb-12">
        Related Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products
          .filter((item) => item._id !== product._id)
          .map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductDetail;
