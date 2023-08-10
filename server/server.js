import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./db.js";
import router from "./routes/bookRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/books", router)

const startServer = async () => {
    try {
        connectDB();
        await app.listen(port);
        console.log(`Server is running on port: ${port}`);
    } catch (error) {
        console.log("Error in connection server", error);
    }
}

startServer();