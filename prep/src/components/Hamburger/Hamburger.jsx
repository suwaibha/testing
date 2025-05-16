import { useDisclosure } from '@mantine/hooks';
import { Burger } from '@mantine/core';
import { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from '@mantine/core';


function Hamburger(){

    const [opened, { toggle, close }] = useDisclosure();

    const navigate = useNavigate();

    const location = useLocation();
    const isExploreActive = location.pathname === '/courses' || location.pathname === '/check-your-ability';
  
    useEffect(() => {
        if (opened) {
          document.body.style.overflow = 'hidden'; // Disable scrolling when menu is open
        } else {
          document.body.style.overflow = 'auto'; // Re-enable scrolling when menu is closed
        }
    
        return () => {
          document.body.style.overflow = 'auto'; // Clean up when component is unmounted
        };
      }, [opened]);

    return(
        <>
        <div className='lg:hidden'>
            <Burger size="md" opened={opened} onClick={toggle} aria-label="Toggle navigation"/>
        </div>

        {opened && (
          <div className="fixed top-16 flex justify-center left-0 w-full bg-[#312d2d] text-white z-40 opacity-100 translate-y-0 sm:top-13 h-full py-48">
            <div className="flex flex-col text-3xl space-y-5">
              <NavLink to=''
              onClick={close}
              className={({isActive})=>
                isActive ? "text-blue-500":""
              }
              >Home</NavLink>

              <div class='explore'>
                <Menu position="bottom-start" withinPortal={false}>

                  <Menu.Target>
                      <p className={`flex items-center ${isExploreActive ? 'text-blue-500' : ''}`}>
                      Explore
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
                      </p>
                  </Menu.Target>
      
                  <Menu.Dropdown>

                    <Menu.Item style={{
                      borderBottom: '1px solid black',
                      marginRight: '12px',
                      padding:'4px 6px',
                      fontSize:'20px'
                    }}
                    onClick={
                      ()=>{
                        navigate('/check-your-ability');
                        close();
                      }
                    }
                    >
                    With Interview
                    </Menu.Item>

                    
                      <Menu.Item style={{
                          marginRight: '12px',
                          padding:'4px 6px',
                          fontSize:'20px'
                        }}
                        onClick={
                          ()=>{
                            navigate('/courses');
                            close();
                          }
                        }>

                        Without Interview
                      </Menu.Item>
                    
                    
                  </Menu.Dropdown>

                </Menu>
              </div>

              <div class='language'>
                <Menu position="bottom-start" withinPortal={false}>

                  <Menu.Target>
                        <p className='flex items-center'>Language
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
                        </p>
                  </Menu.Target>

                  <Menu.Dropdown >
                    <Menu.Item style={{
                      borderBottom: '1px solid black',
                      marginRight: '12px',
                      padding:'4px 6px',
                      fontSize:'20px',
                      // marginRight:'60px'
                    }}>
                    English
                    </Menu.Item>

                    <Menu.Item style={{
                      marginRight: '12px',
                      padding:'4px 6px',
                      fontSize:'20px',
                      // marginRight:'60px'
                    }}>
                    Hindi
                    </Menu.Item>
                  </Menu.Dropdown>

                </Menu>
              </div>

              <NavLink to='/login'
              onClick={close}
              className={({isActive})=>
                isActive ? "text-blue-500":""
              }
              >Login</NavLink>

              <NavLink to='/signup'
                onClick={close}
                className={({isActive})=>
                  isActive ? "text-blue-500":""
                }
              >
              Signup</NavLink>

            </div>
          </div>

        )
        }
        </>
    )
}
export default Hamburger;