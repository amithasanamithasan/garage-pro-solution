import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request)=>{
    const NewBooking =await request.json()

    const db = await connectDB()


    const bookingCollection = db.collection('bookings')

    try {

        const res =await bookingCollection.insertOne(NewBooking);
        return NextResponse.json({message: 'Services Booking Succcessfully '},{status:200});
    } catch (error) {
return NextResponse.json ({massage: 'something is wrong'},{status:400});
        
    }

}