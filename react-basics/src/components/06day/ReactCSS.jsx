import React from 'react'
import Inlinecss from './Inlinecss'
import CssVariable from '../05day/CssVariable'
import './ReactCSS.css'
import csmodule from './ReactCSS.module.css'
const ReactCSS = () => {
  return (
    <>
      <h1>Inline CSS </h1>
      <Inlinecss/>
      <hr/>
      <h1>Css Variable</h1>
      <CssVariable/>
      <hr/>
      <h2 className='success'>css file</h2>
      <h3 className={csmodule.cls}>css module file</h3>
    </>
  )
}

export default ReactCSS
