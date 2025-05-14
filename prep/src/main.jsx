import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react'
import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom  from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Signup from './components/Signup/Signup.jsx'
import Login from './components/Login/Login.jsx'
import Reset from './components/Reset/Reset.jsx'
import Newpassword from './components/Newpassword/Newpassword.jsx'
import Auth from './components/Auth/Auth.jsx'
import Organization from './components/Organization/Organization.jsx'
import C from './components/Courses/Channels/C/C.jsx'
import Cpp from './components/Courses/Channels/Cpp/Cpp.jsx';
import Html from './components/Courses/Channels/Html/Html.jsx';
import Css from './components/Courses/Channels/CSS/CSS.jsx';
import Java from './components/Courses/Channels/Java/Java.jsx';
import JS from './components/Courses/Channels/Javascript/JS.jsx';
import Mern from './components/Courses/Channels/Mern/Mern.jsx';
import Python from './components/Courses/Channels/Python/Python.jsx'
import Role from './components/CompanyRoleSelector/Role.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx'
import Courses from './components/Courses/Courses.jsx';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />

//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"Contact",
//         element:<Contact />
//       }
//     ]


//   }
// ])
//Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />}>
    <Route path='signup' element={<Signup/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='reset' element={<Reset/>}/>
    <Route path='newpassword' element={<Newpassword/>}/>
    <Route path='Auth' element={<Auth/>}/>
    <Route path='Organization' element={<Organization/>}/>
    <Route path='/'element={<Aboutus/>}/>
    <Route path='c'element={<C/>}/>
    <Route path='Role'element={<Role/>}/>
    
    {/* //courses */}
    <Route path='courses' element={<Courses/>}/>
    <Route path='courses/c'element={<C/>}/>
    <Route path='courses/cpp'element={<Cpp/>}/>
    <Route path='courses/css'element={<Css/>}/>
    <Route path='courses/html'element={<Html/>}/>
    <Route path='courses/java'element={<Java/>}/>
    <Route path='courses/js'element={<JS/>}/>
    <Route path='courses/mern'element={<Mern/>}/>
    <Route path='courses/python'element={<Python/>}/>

    
    
    
     
    </Route>
  )
)

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <RouterProvider router={router}/>
    </MantineProvider>
  </StrictMode>,
)
