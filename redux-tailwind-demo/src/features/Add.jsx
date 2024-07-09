import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/useSlice'

const Add = () => {
    const dispatch=useDispatch()
    const [user,setUser]=useState({username:'',email:'',mobile:'',password:''})
    let handleAdd=()=>{
        dispatch(ADD_USER(user))
    }
  return (
    <>
        <button type="button" onClick={handleAdd}>Add User</button>
    </>
  )
}

export default Add
