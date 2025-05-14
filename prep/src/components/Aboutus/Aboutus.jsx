import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import ScrollVelocity from '/Reactbits/ScrollVelocity/ScrollVelocity.jsx';
//import GradientText from '/Reactbits/GradientText/GradientText.jsx';

function Aboutus() {
  const velocity = 80;

  return (
    <>
      
      <style>
        {`
          @keyframes gradientMove {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}
      </style>

      <div className="border-b py-4 xl:border-none">
        <div className="w-fit ml-10">
          <h1 className="text-3xl xl:text-6xl mt-10 ml-5 xl:ml-12">
            Learn And <span className="text-blue-600">Practice</span> <br />
            Without Limit
          </h1>
        </div>

        <div className="flex flex-row scroll-auto mb-14 gap-4 mt-8 mr-10 justify-center sm:block sm:ml-16 sm:space-x-4 xl:ml-24 xl:text-xl">
          <ScrollLink to="aboutus" smooth={true} duration={600} offset={-50}>
            <button className="px-6 py-2 cursor-pointer rounded-full bg-white shadow-md  border-gray-300 border-1 not-last:">
              <span className="text-transparent bg-clip-text bg-[linear-gradient(270deg,#40ffaa,#4079ff,#40ffaa)] bg-[length:200%_200%] animate-[gradientMove_3s_ease_infinite] font-medium ">
                About us
              </span>
            </button>
          </ScrollLink>

          <button className="px-4 py-2 cursor-pointer rounded-full bg-white shadow-md border-gray-300 border-1 ">
          <span className="text-transparent bg-clip-text bg-[linear-gradient(270deg,#40ffaa,#4079ff,#40ffaa)] bg-[length:200%_200%] animate-[gradientMove_3s_ease_infinite] font-medium ">
                Try For Free 
              </span>
          
          </button>
          
        </div>
      </div>

      <div>
        <ScrollVelocity
          texts={['PrepVio *', 'Scroll Down']}
          velocity={velocity}
          className="custom-scroll-text hidden xl:block xl:font-bold xl:text-orange-300"
        />
      </div>

      <div className="border-b px-5">
        <div className="flex flex-col md:flex-row items-center gap-10 mt-10 mb-15 sm:justify-center xl:space-x-55 xl:mb-10">
          <div className="flex flex-col items-center sm:mb-10">
            <div className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] bg-white flex justify-center items-center shadow-[0_4px_15px_rgba(128,128,128,0.4)] rounded-md">
              Learn And Perform
            </div>
            <Link to="/courses">
              <button className="w-[200px] h-10 cursor-pointer bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-shadow duration-300 mt-5 sm:ml-0">
                Learn And Perform
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center md:mt-0 sm:mb-10">
            <div className="w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] bg-white flex justify-center items-center shadow-[0_4px_15px_rgba(128,128,128,0.4)] rounded-md">
              Check Your Ability
            </div>
            <Link to="/Check">
              <button className="w-[200px] h-10 cursor-pointer bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-shadow duration-300 mt-5 sm:ml-0">
                Learn And Perform
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div id="aboutus">
        <div className="sm:block justify-items-center p-6">
          <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
          <div className="text-center px-2 py-6 sm:text-2xl font-thin justify-items-center sm:p-6">
            <p>Welcome to PrepVio, where learning has no limits!</p>
            <p>We provide higher-quality and career-focused platform to prepare for your interviews.</p>
            <p>Analyse & upgrade their skills and achieve their goals.</p>
          </div>
        </div>

        <div className="py-4 px-6 lg:px-30">
          <h1 className="text-3xl text-center sm:text-4xl font-extrabold mb-9 font-family whitespace-nowrap">
            Why Choose Us?
          </h1>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="sm:py-4 md:block h-66 w-72 border rounded-2xl shadow-lg px-2 py-7 text-center">
              <h2 className="font-thin text-3xl/8 mb-5 underline decoration-1 underline-offset-4">
                Real-Time AI Avatar
              </h2>
              <p className="text-xl/6">
                Experience human-like interviews with our interactive AI avatar,
                making the process natural and engaging.
              </p>
            </div>

            <div className="sm:py-4 md:block h-66 w-72 border rounded-2xl shadow-lg px-2 py-7 text-center">
              <h2 className="font-thin text-3xl mb-3 underline decoration-1 underline-offset-4">
                AI-Powered Analysis
              </h2>
              <p className="text-xl/6">
                Our AI evaluates speech clarity, sentiment, confidence, and relevance,
                providing deep performance insights.
              </p>
            </div>

            <div className="sm:py-4 md:block h-66 w-72 border rounded-2xl shadow-lg px-4 py-7 text-center">
              <h2 className="font-thin text-3xl mb-3 underline decoration-1 underline-offset-4">
                Automated <br /> Report
              </h2>
              <p className="text-xl/6">
                Get detailed AI-driven feedback on strengths, weaknesses, and improvement areas instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
