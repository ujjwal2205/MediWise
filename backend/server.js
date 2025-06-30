import express from "express";
import cors from "cors"
import AdminRouter from "./Routes/predictionResultRoute.js";
const app=express();
const port=4000;

app.use(express.json())
app.use(cors());
app.use("/api",AdminRouter);
app.get("/",(req,res)=>{
    res.send("API Working");
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})