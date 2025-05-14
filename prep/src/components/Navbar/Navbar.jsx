import {Link} from 'react-router-dom';
import {NavLink, useLocation} from 'react-router-dom';
import { Menu, Button } from '@mantine/core';
import React, { useState } from 'react';
// import Hamburger from '/src/components/Hamburger/Hamburger.jsx'
// import Hamburger_for_large_tablets from '/src/components/Hamburger/Hamburger_for_large_tablets.jsx'
// import { useDisclosure } from '@mantine/hooks';
// import { Burger } from '@mantine/core';

function Navbar() {

  const [isHoveringWithInterview ,setIsHoveringWithInterview] = useState(false);
  const [isHoveringWithoutInterview ,setIsHoveringWithoutInterview] = useState(false);

  const [isEnglishHovering, setIsEnglishHovering] = useState(true);
  const [isHindiHovering, setIsHindiHovering] = useState(false);

  // const [opened, { toggle }] = useDisclosure();

    return (
      <>
      
        <div className='h-16 bg-[#e6e6e6] shadow-md content-center sticky top-0 z-[9999] sm:h-16 sm:overflow-hidden md:overflow-hidden'>
          <div className='justify-between px-4 flex items-center md:px-14 lg:justify-center:p-4 xl:px-21'>
              <div class='Logo' className='flex flex-row items-center gap-3'>
                <img 
                  className='h-10 rounded-lg'
                  src="./src/logo.jpg"
                  alt="LOGO"
                />
                <h1 className='font-bold text-2xl xl:text-2xl'>PrepVio</h1>
              </div>

              {/* <div className='lg:hidden'>
                <Burger size="sm" opened={opened} onClick={toggle} aria-label="Toggle navigation"/>
              </div> */}

                {/* <Hamburger/> */}

              <div class='explore-btn hidden lg:block lg:px-3 xl:block content-center xl:px-10 xl:ps-18'>
                <Menu trigger="hover" openDelay={100} closeDelay={100} position="bottom-start" offset={18}>
                  <Menu.Target style={{
                    borderRadius:'100px',
                    backgroundColor: '#e6e6e6',
                    border: '1px solid black',
                    color:'black',
                    padding:'1px 12px',
                    height:'31px',
                    fontSize:'large',
                    fontWeight:'normal',
                  }}>
                    <Button>Explore
                    <span style={{marginLeft:'8px',}}>
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
                    </span>
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown style={{
                    border: '1px solid black',
                    padding:'0px',
                    }}>
                      <NavLink to='/courses'
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                      >
                        <Menu.Item style={{
                          backgroundColor : isHoveringWithInterview ? '#799CF4' : '',
                          color: isHoveringWithInterview ? 'white' : 'inherit',
                          borderBottom: '1px solid black',
                          marginRight: '122px',
                          padding:'4px 12px',
                        }}
                        onMouseEnter={() => setIsHoveringWithInterview(true)}
                        onMouseLeave={() => setIsHoveringWithInterview(false)}
                        >
                            <span className='text-lg'>With Interview</span>
                        </Menu.Item>
                      </NavLink>
                    
                    <Menu.Item style={{
                      backgroundColor : isHoveringWithoutInterview ? '#799CF4' : '',
                      color: isHoveringWithoutInterview ? 'white' : 'inherit',
                      padding:'4px 12px',
                    }}
                    onMouseEnter={() => setIsHoveringWithoutInterview(true)}
                    onMouseLeave={() => setIsHoveringWithoutInterview(false)}
                    >
                      <span className='text-lg'>Without Interview</span>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>

              <div class="search-btn hidden lg:block lg:content-center relative w-78 xl:w-98 xl:text-lg">
                <input 
                  type="text" 
                  placeholder="What do you want to learn...?"
                  class="border rounded-full px-6 text-lg w-full  pr-10 h-[31px]"
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
                <Menu trigger="hover" openDelay={100} closeDelay={100} position="bottom-start" offset={18}>
                  <Menu.Target style={{
                    backgroundColor: '#e6e6e6',
                    color: 'black',
                    border: '1px solid black',
                    borderRadius: '100px',
                    padding:'0px 10px',
                    height:'31px',
                    fontSize:'large',
                    fontWeight:'normal',
                    }}>
                    <Button>
                    <span className='mr-2'>
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
                    </span>
                    Language
                    <span className='ml-2'>
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
                    </span>
                    </Button>
                  </Menu.Target>

                  <Menu.Dropdown style={{
                    padding: 0,
                    border: '1px solid black'
                    }}>
                    <Menu.Item style={{
                        background: isEnglishHovering? '#799CF4':'',
                        color: isEnglishHovering? 'white' : 'inherit',
                        borderBottom:'1px solid black',
                        marginRight: '122px',
                        padding:'4px 12px',
                        }}
                        onMouseEnter = {() => setIsEnglishHovering(true)}
                        onMouseLeave = {() => setIsEnglishHovering(false)}
                        >
                          <span className='text-lg'>English</span>
                    </Menu.Item>

                    <Menu.Item style={{
                        background: isHindiHovering? '#799CF4':'',
                        color: isHindiHovering? 'white' : 'inherit',
                        padding:'4px 12px',
                        }}
                      onMouseEnter = {() => setIsHindiHovering(true)}
                      onMouseLeave = {() => setIsHindiHovering(false)}
                    >
                      <span className='text-lg'>Hindi</span>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>

              <div className='signup-btn hidden xl:block content-center'>
                <Link to='/signup' className='border rounded-full text-center px-4 text-lg p-1'>SignUp</Link>
              </div>

              <div className='login-btn hidden xl:block content-center px-2 '>
                <Link to='/login' className='border rounded-full text-center px-6 text-lg p-1'>Login</Link>
              </div> 

              {/* <Hamburger_for_large_tablets/> */}

          </div>
        </div>
      
      </>
    );
  }
  
  export default Navbar;
    

