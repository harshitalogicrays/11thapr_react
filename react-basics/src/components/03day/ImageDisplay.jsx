import React from 'react'
import Image1 from '../../assets/images/a.jpg'
const ImageDisplay = () => {
  return (
    <>
      <img src={Image1}></img> 
      <img src={require('../../assets/images/b.jpg')}></img>
    </>
  )
}

export default ImageDisplay
