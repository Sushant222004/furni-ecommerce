import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        loginData,
      );

      // Save JWT
      localStorage.setItem("token", response.data.data.jwttoken);

      alert("Login Successful!");

      navigate("/");
    } catch (err) {
      console.error(err);

      alert(err.response?.data?.message || "Invalid email or password.");
    }
  };

  return (
    <>
      {/* Login Form */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex justify-center">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-10">
          <h2 className="text-3xl font-bold text-center text-[#3b5d50] mb-8">
            Login to Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Email Address</label>

              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b5d50] outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Password</label>

              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b5d50] outline-none"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f9bf29] text-black font-semibold py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Login
            </button>

            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-[#3b5d50] font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
