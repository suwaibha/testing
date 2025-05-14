
import {Link,NavLink} from 'react-router-dom';

function Header() {
    return (
      <>
        

        <div className='h-13 bg-[#e6e6e6] shadow-md content-center sticky top-0 sm:overflow-hidden md:overflow-hidden z-[9999]'>
          <div className='justify-between px-4 flex items-center md:px-14  lg:justify-center:p-4 xl:px-21'>
              <div class='Logo' className='flex flex-row items-center gap-3'>
                <img 
                  className='h-10 rounded-lg'
                  src="/comp/logo (1).jpg"
                  alt="LOGO"
                />
                <h1 className='font-bold text-xl'>PrepVio</h1>
              </div>
              <div className='lg:hidden'>
                {/* <TfiAlignJustify className='text-xl'/> */}
              </div>

              <div class='explore-btn hidden lg:block lg:px-3 xl:block content-center xl:px-10 xl:ps-18'>
                    <button class='border rounded-full text-center px-3 flex items-center gap-2 lg:text-md xl:text-xl'>
                      <span>Explore</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="3" 
                      stroke="currentColor" 
                      class="size-3"
                      >
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                        />
                      </svg>
        
                    </button>
              </div>

              <div class="search-btn hidden lg:block lg:content-center relative w-78 xl:w-98">
                <input 
                  type="text" 
                  placeholder="What do you want to learn...?"
                  class="border rounded-full text-md w-full px-8 pr-10 xl:text-lg"
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="2.5" 
                  stroke="currentColor" 
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 text-gray-500 pointer-events-none"
                >
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                  />
                </svg>
              </div>

              <div class='language-btn hidden lg:block content-center lg:px-3 xl:px-14'>
                    <button class='border rounded-full text-center px-4 text-md flex items-center justify-between gap-2 xl:text-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke-width="2" 
                    stroke="currentColor" 
                    class="size-5"
                    >
                      <path stroke-linecap="round" 
                      stroke-linejoin="round" 
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                      <span>language</span>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="3" 
                      stroke="currentColor" 
                      class="size-3"
                      >
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                        />
                    </svg>
        
                    </button>
              </div>

             <div className="signup-btn hidden xl:block content-center">
              <NavLink to='/signup'
               className={({isActive})=>
                
                  `px-4 py-2 border rounded-full ${
                  isActive?"bg-black text-white border-black":"border-gray-400 text-black"
                  }`
              }
              >
                Signup
              </NavLink>
             </div>

             <div className="signup-btn hidden xl:block content-center">
              <NavLink to='/Login'
               className={({isActive})=>
                
                  `px-4 py-2 border rounded-full ${
                  isActive?"bg-black text-white border-black":"border-gray-400 text-black"
                  }`
              }
              >
                Login
              </NavLink>
             </div>
              

              {/* <div className='for-large-tablets-hamburger hidden lg:block lg:ps-2 xl:hidden'>
                <TfiAlignJustify className='text-xl'/>
              </div> */}

          </div>
        </div>
      
      </>
    );
  }
  
  export default Header;






