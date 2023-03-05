import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    catg:[String],
    todo:[Object],
    token:String,
})
export const userModel=mongoose.model('user',userSchema)
