import axios from "axios"

let BASEURL = "https://6678ef690bd45250562056c5.mockapi.io/products"

export const postdata = (data)=>axios.post(BASEURL,data)

export const fetchdata = ()=>axios.get(BASEURL)

export const deleteData = (id)=>axios.delete(`${BASEURL}/${id}`)

export const fetchdatabyid = (id)=>axios.get(`${BASEURL}/${id}`)

export const updatedata = (product,id)=>axios.put(`${BASEURL}/${id}`,product)




export const deletebyfetchapi=(id)=> fetch(`${BASEURL}/${id}`,{method:'DELETE'})

export const postusingfetchapi=(data)=>{        
        return fetch(BASEURL,{
            method:'POST',
            headers:{'content-type':'applciation/json'},
            body:JSON.stringify(data)}
        )
} 