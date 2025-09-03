import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const mongoDb = process.env.MongoDbURL

const connectDB = async () => {
    console.log("connecting...");
    try {
        const connect = await mongoose.connect(mongoDb)
        if (connect) {
            console.log("Mongoose DB connected  ✅😎");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}
export default connectDB