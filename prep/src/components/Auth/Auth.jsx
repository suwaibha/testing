const Auth=()=>{
    return(
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="bg-white shadow-md p-8 rounded-xl w-full max-w-90 border-1">
            <h1 className="text-2xl font-bold text-center">Check Your Inbox</h1>
            <h2 className="text-xl font-medium text-center">Enter 6-Digit Code We Sent To</h2>
            <h3 className="text-xl font-light text-center mt-4">suwaibharauf08@gmail.com</h3>
            <form className="space-y-4">
                <input 
                     type="text"
                     placeholder="Enter code"
                     className="w-full py-2 px-4 border rounded-xl focus:outline-none focus:ring-2  focus:ring-blue-400 mt-8"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 hover:bg-blue-900 transition duration-200 rounded-xl mt-1.5"
                >
                    Sign Up
                </button>

             </form>
             <p className="text-sm text-center mt-5"> 
               Didn't Receive The Code? {" "} 
                <a href="/resend" className="text-blue-900 hover:underline ">
                    Resend
                </a>
             </p>
            
    
          </div>
        </div>
    )
}
export default Auth;