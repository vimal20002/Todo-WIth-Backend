import axios from "axios"
const API = axios.create({baseURL : "http://localhost:786"});
export const signIn =  (formData) => {
    return API.post("/user/login" , formData)
}
export const register =  (formData) => {
    return API.post("/user/register" , formData)
}
export const googleLogin =  (formData) => {
    return API.post("/user/glogin" , formData)
}
export const addTodo =  (formData) => {
    return API.post("/user/addtodo" , formData)
}
export const delTodo =  (formData) => {
    return API.post("/user/deltodo" , formData)
}
export const addCatg =  (formData) => {
    return API.post("/user/addcatg" , formData)
}
export const delCatg =  (formData) => {
    return API.post("/user/delcatg" , formData)
}
export const changeSt =  (formData) => {
    return API.post("/user/changest" , formData)
}
export const getTodo =  (formData) => {
    return API.post("/user/gettodo" , formData)
}