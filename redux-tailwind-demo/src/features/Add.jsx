import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/userSlice'

const Add = () => {
    const dispatch=useDispatch()
    const [user,setUser]=useState({username:'',email:'',mobile:'',password:''})
    let handleAdd=(e)=>{
      e.preventDefault()
        dispatch(ADD_USER(user)) //Dispatch ADD_USER action --> userSlice --> ADD_USER reducer fucntion will get called 
        setUser({username:'',email:'',mobile:'',password:''})
    }
  return (
    <>
          <div className="">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" onSubmit={handleAdd}>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
              
              </div>
              <div className="mt-2">
                <input name="username"  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
              
              </div>
              <div className="mt-2" >
                <input name="email"  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Mobile
                </label>
              
              </div>
              <div className="mt-2">
                <input name="mobile"  type="number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.mobile} onChange={(e)=>setUser({...user,mobile:e.target.value})}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              
              </div>
              <div className="mt-2">
                <input name="password"  type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Add
