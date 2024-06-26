import { BsArrowLeftCircle } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Logout=()=>{
    const navigate=useNavigate()
    let handleLogout=()=>{
            sessionStorage.removeItem("11aprmini")
            toast.success("loggedout successfully")
            navigate('/')    
    }
    return(
        <> <span onClick={handleLogout}> <BsArrowLeftCircle />Logout </span>
        </>
    )
}

export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem('11aprmini') == null){
        return children
    }
    else return null
}

export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem('11aprmini') != null){
        return children
    }
    else return null
}