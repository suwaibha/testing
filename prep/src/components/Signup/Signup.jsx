import React from "react";
import { Link } from "react-router-dom";
const Signup= () => {
    return(
      <div className="min-h-screen flex items-center justify-center bg-white">
       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-90 border-1"> 
        <h1 className="text-2xl font-bold text-center mb-6">Signup</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Fullname"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" //rounded-xl can be changed to rounded-blg
          />
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <Link to='/Auth' 
          className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
            >
                Send Code
            </Link>
          </form>
          <p className="text-sm text-center mt-4">
            already have an account? {" "}
            <Link to="/Login" className="text-blue-900 hover:underline">
                Login
            </Link>
          </p>
          
          
        </div>
      </div>
    );
  };
  export default Signup;