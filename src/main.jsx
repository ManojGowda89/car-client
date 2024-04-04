
import ReactDOM from 'react-dom/client'

import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import "./Components/css/main.css"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Auth/Login.jsx'
import Signup from './Pages/Auth/Signup.jsx'
import Pagenotfound from './Pages/Pagenotfound.jsx'
import PrivatePolicy from './Pages/PrivatePolicy.jsx'
import Contact from './Pages/Contact.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import Brands  from './Pages/Brands.jsx'
import Bookings from './Pages/Bookings.jsx'
const router = createBrowserRouter([
  
  {
    path: '/',
    element:<Home/>,
    errorElement:<Pagenotfound/>
  },
  {
    path :"/about",
    element:<About />
  },
  {

    path:"/login",
    element: <Login />,
  },
{
  path:"/signup",
  element: <Signup />

},{

  path:"/contact",
  element: <Contact/>
},
{
  path:"/private_policy",
  element: <PrivatePolicy/>
},
  {
     path:"/dashboard",
     element: <DashBoard/>
  },{

    path:"/brands/:id",
    element: <Brands/>
  }
,{
  path:"/bookings",
  element: <Bookings/>
}




])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>

)
