import React from 'react'

const ListRendering = () => {
    let names = ["abc","pqr","xyz","lmn",'uvw','abc']
  return (
    <>
      {names.map((n,b)=><h1 key={b}>{n}</h1>)}
    </>
  )
}   
    
export default ListRendering
