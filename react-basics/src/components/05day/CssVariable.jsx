import React from 'react'

const CssVariable = () => {
    let cssvar = {
        color:'pink',borderRadius:'20px',border:'2px solid blue',textDecoration:'underline'
    }
  return (
    <>
        <h1 style={cssvar}>css variable</h1>
        
      {/* <h3 className={csmodule.cls}>css module file</h3> */}
    </>
  )
}

export default CssVariable
