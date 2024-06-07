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
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import Signup from "../components/Signup"
import Login from "../components/Login"
import PrivateRoute from "../PrivateRoute/PrivateRoute"



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
      },
      {
        path: "/book/:id",
        element: <Singlebook/>,
        loader:({params})=>fetch(`http://localhost:3003/book/${params.id}`)
      }
     ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBook/>
        },
        {
          path:"/admin/dashboard/edit-book/:id",
          element:<EditBook/>,
          loader:({params})=>fetch(`http://localhost:3003/book/${params.id}`)
          
        }
        ]
    },
    {
      path:"sign-up",
      element:<Signup/>
    },
    {
      path:"login",
      element:<Login/>
    }

  ]);
  export default router