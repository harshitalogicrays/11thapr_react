import React from 'react'

const Increase = ({increase,decrease}) => {
  return (
    <>
        <button type="button" class="btn btn-primary me-3" onClick={()=>increase(1)} >
            Increase by 1
        </button>
        <button type="button" class="btn btn-primary me-2" onClick={()=>increase(5)}>
            Increase by 5
        </button>
        
        <button type="button" class="btn btn-danger me-3" onClick={()=>decrease(1)} >
        decrease by 1
        </button>
        <button type="button" class="btn btn-danger" onClick={()=>decrease(5)}>
        decrease by 5
        </button>
    </>
  )
}

export default Increase
