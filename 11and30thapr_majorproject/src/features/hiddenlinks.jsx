import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn } from "../redux/authSlice"


export const ProtectedAdmin=({children})=>{
    if(sessionStorage.getItem('11aprmini') != null){
        let obj = JSON.parse(sessionStorage.getItem('11aprmini'))
        if(obj.isLoggedIn && obj.role=='0') return children
        else return <Navigate to='/' replace={true} />
    }
    else return <Navigate to='/login' replace={true} />
}

export const Protected=({children})=>{
    if(sessionStorage.getItem('11aprmini') != null){
        let obj = JSON.parse(sessionStorage.getItem('11aprmini'))
        if(obj.isLoggedIn && obj.role=='1') return children
        else return <Navigate to='/' replace={true} />
    }
    else return <Navigate to='/login' replace={true} />
}