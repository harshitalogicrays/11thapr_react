import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_ALL_USERS, REMOVE_USER, selectUsers } from '../redux/userSlice'

const View = () => {
//   const users  =  useSelector((state)=>state.user.users)
const users  =  useSelector(selectUsers)
const dispatch=useDispatch()
  return (
   <>
    <table class="border-collapse border border-slate-400 table-auto">
  <thead>
    <tr>
      <th class="border border-slate-300 ">ID</th>
      <th class="border border-slate-300 ">Username</th>
      <th class="border border-slate-300 ">Email</th>
      <th class="border border-slate-300 ">Mobile</th>
      <th class="border border-slate-300 ">Password</th>
      <th class="border border-slate-300 ">Remove</th>
    </tr>
  </thead>
  <tbody>
    {users.length==0 && <tr><td class="border border-slate-300 " colSpan={6}>No user found</td></tr>}
    {users.map((user,i)=>
    <tr key={i}>
      <td class="border border-slate-300 ">{user.id}</td>
      <td class="border border-slate-300 ">{user.username}</td>
      <td class="border border-slate-300 ">{user.email}</td>
      <td class="border border-slate-300 ">{user.mobile}</td>
      <td class="border border-slate-300 ">{user.password}</td>
      <td class="border border-slate-300 "> <button type="button" 
     className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm" onClick={()=>dispatch(REMOVE_USER(user.id))}>Remove</button></td>
    </tr>)}
  </tbody>
</table>
    <button type="button" 
     className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm" onClick={()=>dispatch(REMOVE_ALL_USERS())}>Remove All Users</button>
   </>
  )
}

export default View
