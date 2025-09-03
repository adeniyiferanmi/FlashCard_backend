import express from "express"
import  dotenv from "dotenv"
dotenv.config()
import authRouter from "./routers/authRouter.js"
import connectDB from "./config/connectToDb.js"
connectDB()


const app = express()
app.use(express.json())

const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    console.log("App is running");
    
}) 
app.get("/api/v1",(req,res)=>{
    res.send("Welcome to SQI Flash card API version 1")
})


app.use("/api/v1/users",authRouter)