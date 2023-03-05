import { userModel } from "../models/user.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const secret="todo"
export const userRegister=async(req,res)=>{
    // console.log(req.body)

    try {
        const c=await userModel.find({email:req.body.email})
        if(c.length!==0)
        {
            res.json({message:"already registered please login"})
        }
        else{
            const hpass=await bcrypt.hash(req.body.password,10)
       const user= await new userModel({...req.body,password:hpass})
       await user.save()
    //    console.log(user)
       res.json({message:"registered successfully"})}
    } catch (error) {
    console.log(error.message)
    }
  
}
export const userLogin=async(req,res)=>{
    console.log(req.body)
    try {
        const user=await userModel.findOne({email:req.body.email})
        console.log(user)
        if(user){
        if(await bcrypt.compare(req.body.password,user.password))
        {
            try {
                const token=jwt.sign({user},secret,{expiresIn:"30s"})
                const userr=await userModel.findOneAndUpdate({},{token:token})
                // console.log(token)
                await userr.save()
            } catch (error) {
                console.log(error + "log")
            }
            const data=await userModel.findOne({email:req.body.email})
            res.json(data);
        }
        else{
            res.json({message:"invalid credentials"})
        }}
        else{
            res.json({message:"user not found kindly register first"})

        }
    } catch (error) {
    console.log(error.message)
    }
  
}
export const googleLogin = async(req, res)=>{
    const {email} = req.body;
    try {
        const c=await userModel.findOne({email:email})
        if(c&&c.length!==0)
        {
            res.json(c)
        }
        else{
       const user= await new userModel(req.body)
       await user.save()
    //    console.log(user)
       res.json(user)}
    } catch (error) {
    console.log(error.message)
    }
}
export const addTodo=async(req,res)=>{
    // console.log(req.body)
    try {
        const user=await userModel.findOne({email:req.body.email})
        // console.log(user)
        if(user){
            const todo = {title:req.body.title,
            date:req.body.date,
        catg:req.body.catg}
                await user.todo.push(todo)
           await user.save()
           res.json(user)
      }
        else{
            res.json({message:"user not found kindly register first"})

        }
    } catch (error) {
    console.log(error.message)
    }
  
}
export const getTodo=async(req,res)=>{
    // console.log(req.body)
    try {
        const user=await userModel.findOne({email:req.body.email})
        console.log(user)
        if(user){
           res.json(user)
      }
        else{
            res.json({message:"user not found kindly register first"})
        }
    } catch (error) {
    console.log(error.message)
    }
  
}
export const addCatg=async(req,res)=>{
    // console.log(req.body)
    try {
        const user=await userModel.findOne({email:req.body.email})
        // console.log(user)
        if(user){
            
                await user.catg.push(req.body.catg)
           await user.save()
           res.json(user)
       }
        else{
            res.json({message:"user not found kindly register first"})

        }
    } catch (error) {
    console.log(error.message)
    }
  
}

export const delTodo=async(req,res)=>{
    // console.log(req.body)
    try {
        const user=await userModel.findOne({email:req.body.email})
        // console.log(user)
        if(user){
     
                const i=user.todo.findIndex((t)=>{
                    return t.title===req.body.title
                })
                await  user.todo.splice(i,1);
                
           await user.save()
           res.json(user)
       }
        else{
            res.json({message:"user not found kindly register first"})

        }
    } catch (error) {
    console.log(error.message)
    }
  
}
export const delCatg=async(req,res)=>{
    console.log(req.body)
    try {
        const user=await userModel.findOne({email:req.body.email})
        // console.log(user)
        if(user){
            
                user.catg = req.body.myCatg;
                
           await user.save()
           res.json(user)
      }
        else{
            res.json({message:"user not found kindly register first"})

        }
    } catch (error) {
    console.log(error.message)
    }
  
}
export const changeSt=async(req,res)=>{
    // console.log(req.body)
    try {
        const user=await userModel.findOne({email:req.body.email})
        // console.log(user)
        if(user){
                const todo=user.todo.find((t)=>{
                    return t.title===req.body.title
                })
                todo.status="c"
                const i=user.todo.findIndex((t)=>{
                    return t.title===req.body.title
                })
                  user.todo.splice(i,1)
               await user.todo.push(todo)
           await user.save()
           res.json(user)
       }
        else{
            res.json({message:"user not found kindly register first"})

        }
    } catch (error) {
    console.log(error.message)
    }
  
}
