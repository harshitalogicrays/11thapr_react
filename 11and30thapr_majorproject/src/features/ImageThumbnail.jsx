import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const ImageThumbnail = ({imgs}) => {
    const [image,setImage]=useState(imgs[0])
    const [index,setIndex]=useState(0)
    let handleImage=(i)=>{
        setImage(imgs[i])
        setIndex(i)
    }
    let handlePrev=()=>{
        if(index > 0){
        setImage(imgs[index-1])
        setIndex(index-1) }
    }
    let handleNext=()=>{}
  return (
    <div>
      <img src={image} width={500} height={300} className="img-fluid"/><br/>
    
    <button  type="button" class="btn btn-primary"  onClick={handlePrev}> <FaArrowCircleLeft/> </button>  
      {imgs.map((item,i)=><img src={item} height={80} width={80} className={`m-2 ${index==i && 'border border-2 border-dark'}`} onClick={()=>handleImage(i)}/>
    )}
     <button  type="button" class="btn btn-primary" onClick={handleNext} > <FaArrowCircleRight/> </button>
    </div>
  )
}

export default ImageThumbnail
