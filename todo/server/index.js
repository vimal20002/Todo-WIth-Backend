import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import morgan from 'morgan'
const app=express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json({limit:"30mb" ,extended:true}))
app.use(express.urlencoded({limit:"30mb" ,extended:true}))
const port =786;
const uri="mongodb+srv://vim9517:vim9517@cluster0.mtlshmc.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri,()=>{
    console.log("connected to database")
})

app.use('/user',userRoute)

app.listen(port,()=>{
    console.log("app is running at port 786");
})