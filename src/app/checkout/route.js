import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(request)=>{
    const booking =await request.json()
    const db = await connectDB()


    const bookingCollection = db.collection('bookings')

    try {

        const NewBooking =await bookingCollection.insertOne(booking);
        return NextResponse.json({message: 'Services Booking Succcessfully '})
    } catch (error) {

        return NextResponse.json({message: 'Services not found '})
        
    }

}