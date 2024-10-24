 export const getservices = async()=>{

    const res = await fetch('http://localhost:3000/service/api/getall')
    const services= res.json();
  
    return services;
  
  
  }

  export const getServicesDetails = async(id)=>{

    const res = await fetch(`http://localhost:3000/service/api/getall${id}`)
    const service= res.json();
  
    return service;
  
  
  }