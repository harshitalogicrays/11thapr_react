import { createSlice } from "@reduxjs/toolkit";

const authSlice  = createSlice({
    name:'auth',
    initialState:{isLoggedIn:false,userEmail:null,userRole:null,userId:null,userName:null},
    reducers:{
        LOGIN_USER(state,action){
            // console.log(action.payload)
            let  {email,name,role,id}=action.payload
            state.isLoggedIn=true
            state.userEmail=email
            state.userRole=role
            state.userId=id
            state.userName=name
        },
        LOGOUT_USER(state,action){
            state.isLoggedIn=false
            state.userEmail=null
            state.userRole=null
            state.userId=null
            state.userName=null
        }
    }
})
export const {LOGIN_USER,LOGOUT_USER}=authSlice.actions
export default authSlice
export const selectIsLoggedIn=(state)=>state.auth.isLoggedIn
export const selectUserEmail=(state)=>state.auth.userEmail
export const selectUserName=(state)=>state.auth.userName
export const selectUserId=(state)=>state.auth.userId
export const selectUserRole=(state)=>state.auth.userRole