import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");

  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({ message: "Deleted Booking Successfully", response: resp });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json({ message: "Something Went Wrong" });
  }
};

export const PATCH = async (request, { params }) => {
    const db = await connectDB();
  
    const bookingsCollection = db.collection("bookings");
    const updateDoc = await request.json();
  
    try {
      const resp = await bookingsCollection.updateOne({_id: new ObjectId(params.id)},
      {
        $set:{
          ...updateDoc
        },
    
      },
      {
        upsert:true
      }
    );
      return NextResponse.json({ message: "Update Booking Successfully", data: resp });
    } catch (error) {
      console.error('Error deleting booking:', error);
      return NextResponse.json({ message: "Something Went Wrong" });
    }
  };

  export const GET = async (request, { params }) => {
    const db = await connectDB();
    const bookingsCollection = db.collection("bookings");
  
    try {
      const resp = await bookingsCollection.findOne({
        _id: new ObjectId(params.id),
      });
      return NextResponse.json({ message: "Find One Booking", data: resp });
    } catch (error) {
      console.error('Error deleting booking:', error);
      return NextResponse.json({ message: "Something Went Wrong" });
    }
  };
  
