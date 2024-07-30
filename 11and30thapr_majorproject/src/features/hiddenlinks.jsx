import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn, selectUserRole } from "../redux/authSlice"
import { addDoc, collection, Timestamp } from "firebase/firestore"
import { db } from "../firebase/config"
import { toast } from "react-toastify"


export const ShowOnLogout=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    if(isLoggedIn==false) return children
     return null
}

export const ShowOnLogin=({children})=>{
    const isLoggedIn=useSelector(selectIsLoggedIn)
    if(isLoggedIn) return children
     return null
}


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


export const saveorder=async(orderconfig)=>{
    // console.log("order",orderconfig)
    try{
        const docRef=collection(db,"orders")
        await addDoc(docRef , {...orderconfig,createdAt:Timestamp.now().toMillis()})
            toast.success("order placed")
    }
    catch(error){toast.error(error.message)}
}

export const sendmail=(data)=>{
    fetch("https://11thapr-firebase-node.vercel.app/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => toast.success(data.msg));
}