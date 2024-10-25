import { connectDB } from "@/lib/connectDB";

export const POST = async (request)=>{
    const NewBooking =await request.json()

    const db = await connectDB()


    const bookingCollection = db.collection('bookings')

    try {

        const res =await bookingCollection.insertOne(NewBooking);
        return Response.json({message: 'Services Booking Succcessfully '},{status:200});
    } catch (error) {
return Response.json ({massage: 'something is wrong'},{status:400});
        
    }

}