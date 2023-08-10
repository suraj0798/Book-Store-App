import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongodb_url = process.env.MONGODB_URL;

        const options = {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };

        await mongoose.connect(mongodb_url, options);
        console.log("Connected to mongoDB");
    } catch (error) {
        console.log("error in connection mongodb.");
    }
}

export default connectDB;