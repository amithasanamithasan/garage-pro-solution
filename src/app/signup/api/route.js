import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (request) =>{

const newuser = await request.json();


try {
// database conction
const db = await connectDB();

const userCollection = await db.collection('users');

const exist = await userCollection.findOne({email:newuser.email});

// console.log(exist )
if(exist)
    {
    return Response.json({message:'user Existes'}),{status: 304}
}
const hashedPassword = bcrypt.hashSync(newuser.password, 14);

const resp = await userCollection.insertOne({...newuser, password: hashedPassword});


return Response.json({message: 'User created'},{status: 200 })


} catch (error) 
{
return Response.json(
    {message: 'something worng'},
    {status: 500 }
)
    
}

}