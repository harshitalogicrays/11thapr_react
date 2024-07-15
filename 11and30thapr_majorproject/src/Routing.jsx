import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";

const allroutes = createBrowserRouter([
    { path: "/", element: <App /> , 
        children:[
            {path:'',element:<Home/>},
            {path:'login',element:<Login/>},
            {path:'register',element:<Register/>},
            // {path:'products',element:<ProductData/>},
            // {path:'cart',element:<Protected><Cart/></Protected>},
        ]
     },
    //  {path:'/admin',element:<ProtectedAdmin><AdminLayout/></ProtectedAdmin>,
    //     children:[
    //         {path:'dash',element:<Dashboard/>},
    //         {path:'add',element:<AddProduct/>},
    //         {path:'view',element:<ViewProduct/>},
    //         {path:'edit/:id',element:<AddProduct/>},
    //     ]
    //  },
     {path:'*',element:<PageNotFound/>}
  ]);

  export default allroutes