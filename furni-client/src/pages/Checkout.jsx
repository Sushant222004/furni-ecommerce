import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.state ||
      !formData.zipCode
    ) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/orders", {
        ...formData,
        items: cartItems,
        total,
      });

      console.log(response.data);

      alert("Order placed successfully!");
      setCartItems([]);

      navigate("/success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
      });
    } catch (err) {
      console.error(err);

      alert("Failed to place order.");
    }
  };

  const total = cartItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <>
      <div className="bg-[#3b5d50]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold text-white">Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        {/* Billing Details */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Billing Details</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg p-3"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label>ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-8 bg-black text-white py-4 rounded-full hover:bg-gray-800 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary  */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Your Order</h2>

          <div className="border rounded-xl p-6">
            <div className="flex justify-between font-semibold border-b pb-3 mb-4">
              <p>Product</p>
              <p>Total</p>
            </div>

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between py-3 border-b"
              >
                <p>
                  {item.name} × {item.quantity}
                </p>

                <p>${item.price * item.quantity}</p>
              </div>
            ))}

            <div className="flex justify-between font-bold text-xl mt-6">
              <p>Total</p>
              <p>${total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
