import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Auth = () => {
  const location = useLocation();
  const { email, fullName } = location.state || {};
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:3002/otp/verify", { email, otp });

      if (res.data.message === "OTP verified successfully") {
        setIsVerified(true);
        setOtpMessage("✅ OTP verified successfully");

        try {
          const signupRes = await axios.post("http://localhost:3002/signup", { name:fullName, email });
          setSignupMessage(signupRes.data.message || "🎉 Signup successful");
        } catch (signupErr) {
          setSignupMessage(signupErr.response?.data?.message || "⚠️ Signup failed after OTP verification");
        }
      } else {
        setOtpMessage("❌ Incorrect OTP");
      }
    } catch (err) {
      setOtpMessage(err.response?.data?.message || "❌ OTP verification failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-90 border-1">
        <h1 className="text-2xl font-bold text-center mb-6">OTP Verification</h1>

        {!isVerified ? (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 mb-4"
            />
            <button
              onClick={handleVerifyOtp}
              className="block w-full text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-900 transition duration-200"
            >
              Verify OTP
            </button>
          </>
        ) : (
          <div className="text-center text-green-700 font-semibold">
            🎉 OTP Verified!
          </div>
        )}

        {otpMessage && (
          <p className="text-center text-sm mt-4 text-blue-600">{otpMessage}</p>
        )}

        {signupMessage && (
          <p className="text-center text-sm mt-2 text-red-600">{signupMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Auth;
