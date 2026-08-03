import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !registerData.firstName ||
      !registerData.lastName ||
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword
    ) {
      alert("Please fill all the fields.");
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await axios.post("https://furni-ecommerce-3.onrender.com/api/auth/register", {
        ...registerData,
      });
      alert("Registered Successfully!");
      setRegisterData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      console.log(err.response);

      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <>
      {/* Register Form */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex justify-center">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-xl p-10">
          <h2 className="text-3xl font-bold text-center text-[#3b5d50] mb-8">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-medium">First Name</label>

                <input
                  type="text"
                  name="firstName"
                  value={registerData.firstName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b5d50] outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Last Name</label>

                <input
                  type="text"
                  name="lastName"
                  value={registerData.lastName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b5d50] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>

              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b5d50] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Password</label>

              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b5d50] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3b5d50] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f9bf29] text-black font-semibold py-3 rounded-full hover:bg-yellow-400 transition"
            >
              Register
            </button>

            <p className="text-center text-gray-600">
              Already have an account
              <Link
                to="/login"
                className="text-[#3b5d50] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
