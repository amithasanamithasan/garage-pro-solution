import Image from "next/image";
import Link from "next/link";



const ServiceCard = ({service}) => {
    const{_id,service_id,title,img,price,description,}=service || {};
    return (
        <div className=" py-3">
    <div className="card   
    bg-gradient-to-r
     from-purple-300
     to-slate-200     
    border border-x-green-600
     border-y-green-600  
     shadow-xl gap-5 ">
  <figure >
    <Image className=""  
     height={120} width={430}
      src={img} alt="title" />
  </figure>
  <div className=" card-body  mb-5 gap-5">
    <h2 className="font-serif rounded-full 
    text-2xl font-extrabold
     text-emerald-400 bg-fuchsia-600 
    uppercase text-center">{title}</h2>
    {/* <p className="text-2xl  ">{description}</p> */}
    <div className="card-actions justify-between items-center">
            <h6 className="text-3xl md:text-3xl bg-slate-400 rounded text-black font-semibold">Price : ${price}</h6>
          <Link href={`/service/${_id}`}><button className="btn btn-primary  text-xl md:text-xl">View Details</button></Link>
        </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;