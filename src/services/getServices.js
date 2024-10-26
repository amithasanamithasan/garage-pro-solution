import axios from "axios";

 export const getservices = async()=>{

    const res = await axios.get('http://localhost:3000/service/api/getall')
    // const services= res.json();
  
    // return services;
    return  res.data;
  
  
  }

  export const getServicesDetails = async(id)=>{

    const res = await axios.get(`http://localhost:3000/service/api/${id}`)
    // const service= res.json();
  
    // return service;
    return res.data;
  
  
  }