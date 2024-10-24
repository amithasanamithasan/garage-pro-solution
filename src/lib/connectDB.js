import { MongoClient, ServerApiVersion } from "mongodb";

let db;
let client;

export const connectDB = async () => {
  if (db) return db;  // Reuse the existing connection

  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;  // Use server-side env variable
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables.");
    }

    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();  // Establish the connection explicitly
    console.log("Connected to MongoDB successfully!");

    db = client.db('garage-pro');  // Set the database
    return db;

  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Failed to connect to the database.");
  }
};
