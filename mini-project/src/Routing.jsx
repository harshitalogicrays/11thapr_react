import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import ProductData from "./features/ProductData";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";
import AddProduct from "./features/Admin/AddProduct";
import ViewProduct from "./features/Admin/ViewProduct";
import { Protected, ProtectedAdmin } from "./features/hiddenlinks";
import Cart from "./features/Cart";

const allroutes = createBrowserRouter([
    { path: "/", element: <App /> , 
        children:[
            {path:'',element:<Home/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'products',element:<ProductData/>},
            {path:'cart',element:<Protected><Cart/></Protected>},
        ]
     },
     {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
        children:[
            {path:'dash',element:<Dashboard/>},
            {path:'add',element:<AddProduct/>},
            {path:'view',element:<ViewProduct/>},
            {path:'edit/:id',element:<AddProduct/>},
        ]
     },
     {path:'*',element:<PageNotFound/>}
  ]);

  export default allroutes