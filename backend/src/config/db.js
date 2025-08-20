import mongoose from "mongoose"

const connectDB = async() => {
    const MongoDB_URL = process.env.MongoDB_URL

    try {
        await mongoose.connect(MongoDB_URL)
        
        console.log(`MongoDB Successfully Connected`);
    } 
    catch (error) {
        console.log(`MongoDB connection error: ${error}`);        
        process.exit(1)
    }
}

export default connectDB