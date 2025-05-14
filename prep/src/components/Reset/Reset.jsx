import { Link } from "react-router-dom";

const Reset= () => {
    return(
      <div className="min-h-screen flex items-center justify-center bg-white">
       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-90  border-1"> 
        <h1 className="text-2xl font-bold text-center mb-1">Forgot Password?</h1>
         <p className="text-sm text-center mb-4">
           Remember Your Password?{" "}
            <a href="/Login" className="text-blue-900 hover:underline">
              Login Here
            </a>
          </p>
        <form className="space-y-4">
          <input
            type="Email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" //rounded-xl can be changed to rounded-blg
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* <button
            
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
          >
            <Link to="/Newpassword" className="w-full text-white">
            Reset Password
            </Link>
          </button> */}
          <Link
            to="/Newpassword"
               className="block w-full text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition duration-200"
                >
             Reset Password
           </Link>
          </form>
          
        </div>
      </div>
    );
  };
  export default Reset;