import React, { useEffect } from 'react'
import useFetchCollection from '../customhook/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { selectsliders, store_slider } from '../redux/sliderSlice'
const Slider = () => {
  const {data}=useFetchCollection("sliders")
    const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(store_slider(data)) 
    },[data])   
  
    const sliders = useSelector(selectsliders)
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        {sliders.map((s,i)=>
        <div class={`carousel-item ${i==0 && 'active'}`} key={s.id} data-bs-interval="2000">
            <img src={s.image} class="d-block w-100" height={350} alt={s.title}/>
            <div class="carousel-caption d-none d-md-block">
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
            </div>
        </div>
        )}
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slider
