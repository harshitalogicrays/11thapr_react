import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn, selectUserRole } from "../redux/authSlice"


export const ProtectedAdmin=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    const role=useSelector(selectUserRole)
    if(isLoggedIn){
        if(role=="0")return children
        else return <Navigate to='/' replace={true} />
    }
    else return <Navigate to='/login' replace={true} />
}

export const Protected=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    const role=useSelector(selectUserRole)
    if(isLoggedIn){
        if(role=="1")return children
        else return <Navigate to='/' replace={true} />
    }
    else return <Navigate to='/login' replace={true} />
}