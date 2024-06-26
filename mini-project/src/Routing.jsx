import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import ProductData from "./features/ProductData";
import AdminLayout from "./features/Admin/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";

const allroutes = createBrowserRouter([
    { path: "/", element: <App /> , 
        children:[
            {path:'',element:<Home/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            {path:'products',element:<ProductData/>},
        ]
     },
     {path:'/admin',element:<AdminLayout/>,
        children:[
            {path:'',element:<Dashboard/>},
        ]
     },
     {path:'*',element:<PageNotFound/>}
  ]);

  export default allroutes