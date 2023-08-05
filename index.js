import express from "express";
import cors from "cors";
import * as dotenv from "dotenv"; 
import connectDB from "./MongoDB/connect.js";   //Allways use .js

import heroRouter from "./Routes/hero.Routes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb' }));

app.get('/', (req, res)=> {
    res.send({message:"Hello"});
});

app.use("/Hero",heroRouter);


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,() => console.log("server started"));
    } catch (error) {
        console.log(error)
        
    }
};

startServer();