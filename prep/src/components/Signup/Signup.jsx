import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendCode = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/otp/send", { email });
      setMessage(res.data.message);

      // ✅ Navigate to Auth route with email + fullName
      navigate("/signup/auth", { state: { fullName, email } });
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-90 border-1">
        <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>

        <form className="space-y-4" onSubmit={handleSendCode}>
          <input
            type="text"
            placeholder="Fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
          >
            Send Code
          </button>
        </form>

        {message && (
          <p className="text-center text-sm mt-2 text-green-600">{message}</p>
        )}

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-900 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
