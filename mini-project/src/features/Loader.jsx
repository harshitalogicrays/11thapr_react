import React from 'react'
import cssmodule from './Loader.module.css'
import LoaderImg from '/src/assets/loader.gif'
import reactDOM from 'react-dom'
const Loader = () => {
  return reactDOM.createPortal(
    <div className={cssmodule.wrapper}>
            <div className={cssmodule.loader}>
                    <img src={LoaderImg}/>
            </div>
    </div> , document.getElementById('loader')
  )
}

export default Loader
