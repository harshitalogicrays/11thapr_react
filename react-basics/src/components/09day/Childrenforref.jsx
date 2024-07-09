import React from 'react'

const Childrenforref = ({refprop}) => {
  return (
    <>
    <button
        type="button"
        class="btn btn-primary" onClick={()=>refprop.current.focus()}
    >
        Focus on parent textbox
    </button>
    
    </>
  )
}

export default Childrenforref
