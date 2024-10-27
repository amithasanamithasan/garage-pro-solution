import axios from "axios";

 export const getservices = async()=>{

    try {
      
      const res = await axios.get
      (`${process.env.NEXT_PUBLIC_BASE_URL}/service/api/getall`)
      return res.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  
  
  }

  export const getServicesDetails = async(id)=>{

    


  

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/service/api/${id}`)
      return res.data;
    } catch (error) {
      return [];
    }
  
  }