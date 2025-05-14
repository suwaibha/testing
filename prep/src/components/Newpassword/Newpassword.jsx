import React from "react";
// import { Link } from "react-router-dom";
const Newpassword= () => {
    return(
      <div className="min-h-screen flex items-center justify-center bg-white">
       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-90 border-1"> 
        <h1 className="text-2xl font-bold text-center mb-6">Reset Password</h1>
        <form className="space-y-4">
            <div className="mb-4">
            <label className="block mb-1 text-lg text-black">
            New Password
            </label>
            <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
          
          <div className="mb-4">
          <label className="block mb-1 text-lg text-black">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

            </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
          >
            Submit
          </button>
          </form>
          
          
        </div>
      </div>
    );
  };
  export default Newpassword;