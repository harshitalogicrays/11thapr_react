import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
name:"user",
initialState:{users:[]},
reducers:{
    ADD_USER(state,action){
        console.log("added")
        // console.log(action.payload)
    },
    REMOVE_USER(state,action){},
    REMOVE_ALL_USERS(state,action){}
}
})

console.log(userSlice.actions)
export const {ADD_USER,REMOVE_USER,REMOVE_ALL_USERS}=userSlice.actions
export default userSlice
