import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ANavbar from './ANavbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './Sidebar.css'
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};

const closeSidebar = () => {
    setIsSidebarOpen(false);
};

const contentStyle = {
  transition: 'margin-left 0.3s',
  marginLeft: isSidebarOpen ? '250px' : '0',
};
  return (
    <>
     <ToastContainer
      position="bottom-left" autoClose={2000}
      hideProgressBar={false} newestOnTop={false}
      closeOnClick rtl={false} pauseOnFocusLoss={false}
      draggable pauseOnHover={false} theme="colored"
      />
           <div className="d-flex">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className={`flex-grow-1 `}>
           
                <ANavbar toggleSidebar={toggleSidebar} />
                <div style={contentStyle} className='p-4'>
                   <Outlet/>
                </div>   </div>
      </div>
    </>
  )
}

export default AdminLayout
