import React, { useState } from 'react'

const FetchTextBoxData = ({name}) => {
    let [username,setUsername] = useState(name)
    let handleChange=(e)=>{
        // console.log(e.target.value)
        setUsername(e.target.value)
    }
  return (
    <>
        <div className="container col-6 ">  
            {/* <div className="mb-3">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text"  name="username" className="form-control"
                value={username} onChange={handleChange}/>
            </div>
            <h1>Hello {username} </h1> */}

        <div className="mb-3">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text"  name="username" className="form-control"
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <h1>Hello {username} </h1>
        </div>


    </>
  )
}

export default FetchTextBoxData
