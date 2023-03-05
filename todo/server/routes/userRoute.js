import express from 'express'
import { userRegister,userLogin,addTodo,addCatg,delTodo,delCatg,changeSt,getTodo, googleLogin} from '../controllers/index.js'
const router=express.Router()
router.post('/login',userLogin)
router.post('/register',userRegister)
router.post('/glogin',googleLogin)
router.post('/addtodo',addTodo)
router.post('/gettodo',getTodo)
router.post('/addcatg',addCatg)
router.post('/delcatg',delCatg)
router.post('/deltodo',delTodo)
router.post('/changest',changeSt)



export default router;