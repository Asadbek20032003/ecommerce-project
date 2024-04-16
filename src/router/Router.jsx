import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
//  import Home from "../pages/home/Home";
// import About from "../pages/about/About";
import Cart from '../pages/cart';
import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';
import Home from '../pages/Home/index';
import Listing from '../pages/Listing';
import NotFound from '../pages/NotFound';
import DetailsPage from '../pages/Details';
import Checkout from '../pages/checkout';
import data from '../data'

 const router = createBrowserRouter ([
   {
    exact: true ,
    path: '/',
    element : <Layout/>,
    children:[
         {
           
            path: '/',
            element: <Home data={data.productData} />
         },
         {
            
            path: "/cat/:id",
            element: <Listing data={data.productData} single={true} />
         },
         {
           
            path: "/cat/:id/:id",
            element:<Listing data={data.productData} single={false} />
         },
         {
             
            path: "/product/:id",
            element: <DetailsPage data={data.productData} />
         },
         {
           
            path:"/cart",
            element: <Cart />
         },
         {
            
            path: "/signIn",
            element: <SignIn />
         },
         // {
           
         //    path: "/signUp",
         //    element:<SignUp />
         // },
         {
            
            path: "/checkout",
            element: <Checkout />
         },
         {
           
            path: "*",
            element: <NotFound />
         }
    ]
   }
 ]) 
 
  export default router;