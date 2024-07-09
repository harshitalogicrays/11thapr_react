import React from 'react'

const MycustomButton = ({class1='btn-primary',click,children=[],size='',...props}) => {
  return (
    <>
    {size=="lg" ?  
        <button type="button" className={`btn ${class1} btn-lg`} onClick={click} {...props}
        >
            {children.length !=0 ? children : "Button"}
        </button>
:
<button type="button" className={`btn ${class1} `} onClick={click} {...props}
        >
            {children.length !=0 ? children : "Button"}
        </button>
        }
    </>

  )
}

export default MycustomButton
