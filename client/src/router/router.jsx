import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App'
import Home from '../home/Home'
import Shop from '../shop/Shop'
import About from '../components/About'
import Blog from '../components/Blog'
import Singlebook from '../components/Singlebook'



  const router = createBrowserRouter([
    {
    path: "/",
    element:<App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/blogs",
        element: <Blog/>
      }
     ]
    },
  ]);
  export default router