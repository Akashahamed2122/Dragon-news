import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
    {
      path: "/",
     element: <HomeLayout></HomeLayout>,
     children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: "/category/:id",
            element: <CategoryNews></CategoryNews>,
          
        }
     ]
    },
    {
        path: '/auth',
        element: <p>auth </p>
    },
    {
        path: '/news',
        element: <p> news pages</p>
    }
  ]);