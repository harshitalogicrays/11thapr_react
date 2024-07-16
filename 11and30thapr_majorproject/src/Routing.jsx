import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductData from "./features/ProductData";
import Cart from "./features/Cart";
import { ProtectedAdmin } from "./features/hiddenlinks";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";
import AddProduct from "./features/Admin/AddProduct";
import ViewProduct from "./features/Admin/ViewProduct";
import AddCategory from "./features/Admin/AddCategory";
import ViewCategory from "./features/Admin/ViewCategory";

const allroutes = createBrowserRouter([
    { path: "/", element: <App /> , 
        children:[
            {path:'',element:<Home/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'products',element:<ProductData/>},
            {path:'cart',element:<Cart/>},
        ]
     },
     {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'dash',element:<Dashboard/>},
            {path:'add/category',element:<AddCategory/>},
            {path:'view/category',element:<ViewCategory/>},
            {path:'add/product',element:<AddProduct/>},
            {path:'view/product',element:<ViewProduct/>},
        ]
     },
     {path:'*',element:<PageNotFound/>}
  ]);

  export default allroutes