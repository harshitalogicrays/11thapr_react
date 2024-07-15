import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './features/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <ToastContainer
      position="bottom-left" autoClose={2000}
      hideProgressBar={false} newestOnTop={false}
      closeOnClick rtl={false} pauseOnFocusLoss={false}
      draggable pauseOnHover={false} theme="colored"
      />
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
