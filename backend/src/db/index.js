import mongoose from "mongoose";

const DB_NAME = "zomatoclonedb";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host : `, connectionInstance.connection.host);
    } catch(error) {
        console.log("MONGODB connection Failed " , error);
        process.exit(1)
    }
}

export default connectDB;