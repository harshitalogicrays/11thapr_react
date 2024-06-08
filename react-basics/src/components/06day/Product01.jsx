import React, { useState } from 'react'
import image1 from '../../assets/images/a.jpg'

const Product01 = () => {
    let [user,setUser] = useState({proname:"",disc:"",category:"",color:"",fileUpload:"",price:""})
    let handlechange=(e)=>{
        console.log(e)
        setUser({...user,[e.target.name]:e.target.value})
    } 

    let handleFileUpload=(e)=>{
        // console.log(e.target.files)
        let file = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            // console.log(reader.result)
            setUser({...user,fileUpload:reader.result})
        }
    }

    let handlesubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
   
  return (
    <>
        <div className="row">
            <div className="col-4">
                <img src={image1} className='img-fluid' />
            </div>
            <div className="col-8">
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                    <label htmlFor="" className='form-label'>Product name</label>    
                    <input type="text" className='form-control' id="proname"
                     name="proname" value={user.proname} onChange={handlechange}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="" className='form-label'>Description</label>    
                    <input type="text-area" className='form-control' value={user.disc} name="disc" onChange={handlechange}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="" className='form-label'>Category</label>    
                    <select className='form-select' value={user.category} name="category" onChange={handlechange}>
                        <option value="electric">Electronics</option>
                        <option value="fashion">Fashion</option>
                    </select>    
                    </div>
                    <div className="mb-3">
                    <label htmlFor="" className='form-label' >Color</label><br></br> 
                     <input type="checkbox" id="red" name="color" className="form-check-input" value="red"/>&nbsp;
                     <label for="red" className='form-check-label'>Red</label> 	&nbsp;
                     <input type="checkbox" id="blue" name="color" value="blue" className="form-check-input"  />&nbsp;
                     <label for="blue" className='form-check-label'>Blue</label>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="" className='form-label'>Image</label>    
                    <input type="file" className='form-control' name='fileUpload' onChange={handleFileUpload}/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="" className='form-label'>Price</label>    
                    <input type="number" className='form-control' value={user.price} name='price' onChange={handlechange} />
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Product01
