import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ANavbar from './ANavbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import './Sidebar.css'
const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};

const closeSidebar = () => {
    setIsSidebarOpen(false);
};
  return (
    <>
     <ToastContainer
      position="bottom-left" autoClose={2000}
      hideProgressBar={false} newestOnTop={false}
      closeOnClick rtl={false} pauseOnFocusLoss={false}
      draggable pauseOnHover={false} theme="colored"
      />
        <ANavbar toggleSidebar={toggleSidebar} />
        <Row>
        <Col xs={3}>  <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} /></Col>
        <Col><Outlet/> </Col>
        </Row>
           {/* <div className="d-flex">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className={`flex-grow-1`}>
           
                <ANavbar toggleSidebar={toggleSidebar} />
                <div className="container-fluid p-4">
                   <Outlet/>
                </div>
            </div>
        </div> */}
    </>
  )
}

export default AdminLayout
