import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to Mongodb.");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
  }
};
