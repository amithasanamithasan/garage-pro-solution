import { connectDB } from "@/lib/connectDB"

export const POST = async(request)=>{
    const booking =await request.json()
    const db = await connectDB()


    const bookingCollection = db.collection('bookings')

    try {

        const NewBooking =await bookingCollection.insertOne(booking);
        return Response.json({message: 'Services Booking Succcessfully '})
    } catch (error) {

        console.log(error);
        
    }

}