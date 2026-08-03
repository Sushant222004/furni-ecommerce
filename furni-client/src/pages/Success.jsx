import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-lg w-full">
        <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />

        <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with Furni.
          <br />
          Your order has been received and is being processed.
        </p>

        <Link
          to="/shop"
          className="bg-[#3b5d50] text-white px-8 py-3 rounded-full hover:bg-black transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Success;
