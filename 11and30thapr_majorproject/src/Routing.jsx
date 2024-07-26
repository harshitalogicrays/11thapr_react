import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductData from "./features/ProductData";
import Cart from "./features/Cart";
import { Protected, ProtectedAdmin } from "./features/hiddenlinks";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";
import AddProduct from "./features/Admin/AddProduct";
import ViewProduct from "./features/Admin/ViewProduct";
import AddCategory from "./features/Admin/AddCategory";
import ViewCategory from "./features/Admin/ViewCategory";
import AddSlider from "./features/Admin/AddSlider";
import ViewSlider from "./features/Admin/ViewSlider";
import CheckoutDetails from "./features/CheckoutDetails";
import Checkout from "./features/Checkout";
import CheckoutPayment from "./features/CheckoutPayment";
import CheckoutSuccess from "./features/CheckoutSuccess";

const allroutes = createBrowserRouter([
    { path: "/", element: <App /> , 
        children:[
            {path:'',element:<Home/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'products',element:<ProductData/>},
            {path:'cart',element:<Cart/>},
            {path:'checkout-details',element:<Protected><CheckoutDetails/></Protected>},
            {path:'checkout',element:<Protected><Checkout/></Protected>},
            {path:'checkout-payment',element:<Protected><CheckoutPayment/></Protected>},
            {path:'checkout-success',element:<CheckoutSuccess/>},
        ]
     },
     {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'dash',element:<Dashboard/>},
            {path:'add/category',element:<AddCategory/>},
            {path:'edit/category/:id',element:<AddCategory/>},
            {path:'view/category',element:<ViewCategory/>},
            {path:'add/slider',element:<AddSlider/>},
            {path:'edit/slider/:id',element:<AddSlider/>},
            {path:'view/slider',element:<ViewSlider/>},
            {path:'add/product',element:<AddProduct/>},
            {path:'view/product',element:<ViewProduct/>},
            {path:'edit/product/:id',element:<AddProduct/>},
        ]
     },
     {path:'*',element:<PageNotFound/>}
  ]);

  export default allroutes