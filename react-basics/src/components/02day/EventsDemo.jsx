import React from 'react'

const EventsDemo = () => {
  let handleDelete=()=>alert(2+3)

  let handleDelete1=(a,b)=>alert(a+b)

  return (
    <>
      <button type="button" class="btn btn-primary me-3" onClick={()=>alert("button clicked")}>
        Click Me </button>

      <button type="button" class="btn btn-primary me-3" onClick={handleDelete}>Click Me </button>
      
      <button type="button" class="btn btn-primary me-3" onClick={()=>handleDelete()}>Click Me </button>
    
      <button type="button" class="btn btn-primary me-3" onClick={()=>handleDelete1(4,5)}>Click Me </button>
    
    </>
  )
}

export default EventsDemo
