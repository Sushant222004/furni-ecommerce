import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const increaseQuantity = (indexToUpdate) => {
    const updatedCart = cartItems.map((item, index) => {
      if (index === indexToUpdate) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (indexToUpdate) => {
    const updatedCart = cartItems.map((item, index) => {
      if (index === indexToUpdate && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCartItems(updatedCart);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + Number(item.price.replace("$", "") * item.quantity);
  }, 0);

  return (
    <div>
      <div className="bg-[#3b5d50]">
        <div className="max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-32">
          <h1 className="text-6xl text-white font-bold ">Cart</h1>
        </div>
      </div>
      <div className="max-w-339 mx-auto px-4 md:px-6  lg:px-8 py-32">
        <div className="flex text-xl font-semibold justify-between items-center border-b-2 py-6 ">
          <h2>Image</h2>
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
          <h2>Remove</h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl text-gray-500">Your cart is empty.</h2>
            <Link
              to="/shop"
              className="self-start bg-black text-white py-2 px-4 rounded-full text-lg hover:bg-gray-800 transition duration-200 "
            >
              Return to Shop
            </Link>
          </div>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-gray-300 py-6"
            >
              <img src={item.image} alt={item.name} className="w-32" />

              <p className="font-semibold text-xl">Product {index + 1}</p>

              <p className="text-gray-700">{item.price}</p>

              <div className="flex items-center gap-3">
                <FiMinus
                  className="cursor-pointer"
                  onClick={() => {
                    decreaseQuantity(index);
                  }}
                />

                <input
                  className="w-10 h-10 border border-gray-300 rounded-sm text-center"
                  type="text"
                  value={item.quantity}
                  readOnly
                />

                <FiPlus
                  className="cursor-pointer"
                  onClick={() => increaseQuantity(index)}
                />
              </div>

              <p>${item.price.replace("$", "") * item.quantity}.00</p>

              <div>
                <FiX
                  onClick={() => removeFromCart(index)}
                  className="self-start text-xxl text-red-500 hover:text-red-700"
                ></FiX>
              </div>
            </div>
          ))
        )}

        {cartItems.length === 0 ? null : (
          <div className="flex flex-col sm:flex-row py-12 justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold">Coupon</h2>
              <p className="text-gray-600">
                Enter your coupon code if you have one.
              </p>
              <div className="flex flex-col  sm:flex-row gap-8 ">
                <input
                  className="border  py-2 px-4 md:w-100  rounded-lg"
                  type="text"
                  placeholder="Coupon Code"
                />
                <button className="text-white bg-black  py-3 px-7 rounded-3xl hover:bg-gray-800 transition duration-200">
                  Apply Coupon
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-6  ">
              <h2 className="text-2xl font-semibold border-b border-gray-300 pr-50">
                CART TOTALS
              </h2>

              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>${subtotal}.00</p>
              </div>

              <div className="flex justify-between ">
                <p>Total</p>
                <p>${subtotal}.00 </p>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="self-start bg-black text-white py-5 px-10 rounded-full text-xl disabled:bg-gray-400 hover:bg-gray-800 transition duration-200"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/shop"
                className="self-start bg-black text-white py-5 px-10 rounded-full text-xl hover:bg-gray-800 transition duration-200"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
