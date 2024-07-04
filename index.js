// importing necessary components
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utilis/config.js";
import mntrRouter from "./routers/mentorRouter.js";
import stdRouter from "./routers/studentRouter.js";

// middleware
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/mentor", mntrRouter);
app.use("/api/student", stdRouter);
connectDB();

// setting port
const port = 3000 || process.env.PORT ;

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Connecting to MongoDB...`)
});