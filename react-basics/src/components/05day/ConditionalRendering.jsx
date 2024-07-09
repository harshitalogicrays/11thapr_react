import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ConditionalRendering = ({isLog,username}) => {
   /* if(isLog){
        return(<> <h1>Welcome {username}</h1> 
        </>)}
    else{
        return (<>  <h1>Welcome Guest</h1> </>)} */

   /* let result=''
    if(isLog){
        result = <> <h1>Welcome {username}</h1> </> }
    else{  result = <>  <h1>Welcome Guest</h1> </> }
    return (<> {result} </>) */

    return(
        <>
        <h1>Conditional rendering demo </h1>
            {isLog ? 
            <> <h1>Welcome {username}</h1> 
            {username=="admin" ? <h1>all access</h1> : <h1>user access</h1>}
           </>
        :
        <>  <h1>Welcome Guest</h1> </> }
    <hr/>
        {isLog && <>
            <h1>Welcome {username}</h1>
        </>}
            <hr/>
        {(isLog && username=="Ram") && <h1>Welcome Back</h1>}
        <hr/>
        {(isLog && username=="Ram") ? <h1>Welcome Back</h1> : ''}

          <Link
            type="button"
            class="btn btn-primary" to='/condition/cal'
          >
            Button
          </Link>
            
        <Outlet/>
        </>
    )
}

export default ConditionalRendering
