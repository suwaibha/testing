import { Link } from "react-router-dom";

const Organization= () => {
    return(
      <div className="min-h-screen flex items-center justify-center bg-white">
       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-90  border-1"> 
        <h1 className="text-xl font-medium text-center mb-3">Login with Your Organization Credentials</h1>
         
        <form className="space-y-4">
        <div className="mb-4">
          <label className="block mb-1 text-sm text-black">
            Enter Your Organization ID
          </label>
          <input
            type="text"
            placeholder="Organization ID"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

            </div>
            <div className="mb-4">
          <label className="block mb-1 text-sm text-black">
            Enter Your Organization Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

            </div>

            <div className="mb-4">
          <label className="block mb-1 text-sm text-black">
            Password
          </label>
          <input
            type="password"
            placeholder=" Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

            </div>
          
            <button
            type="submit"
             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200">
                Login
            </button>
          </form>
          
        </div>
      </div>
    );
  };
  export default Organization;