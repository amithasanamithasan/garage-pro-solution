import { connectDB } from "@/lib/connectDB";

export const POST = async (request) =>{

const newuser = await request.json();


try {
// database conction
const db = await connectDB();

const userCollection = await db.collection('users');

const exist = await userCollection.findOne({email:newuser.email})

if(exist)
    {
    return Response.json({message:'user Existes'}),{status: 304}
}

const resp = await userCollection.insertOne(newuser);

return Response.json({message: 'User created'}),{status: 200 }


} catch (error) 
{
return Response.json({message: 'something worng'}),{status: 500 }
    
}

}