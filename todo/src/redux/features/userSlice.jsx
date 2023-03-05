import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import * as api from "../api"
export const login  = createAsyncThunk("auth/login", async ({formValue, history})=>{
    try {
        const response = await api.signIn(formValue);
        history.push("/");
        // window.location.reload(false)
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const register  = createAsyncThunk("auth/register", async ({formValue, history})=>{
    try {
        const response = await api.register(formValue);
        history.push("/logreg");
 

        // window.alert("SuceesFully Regitered")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const glogin  = createAsyncThunk("auth/glogin", async ({formValue1, history})=>{
    try {
        const response = await api.googleLogin(formValue1);
        history.push("/");
        window.location.reload(false)


        // window.alert("SuceesFully Regitered")
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const addTodo  = createAsyncThunk("auth/addtodo", async ({formValue, history})=>{
    try {
        const response = await api.addTodo(formValue);
        history.push("/");
        
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const delTodo  = createAsyncThunk("auth/deltodo", async ({formValue2, history})=>{
    try {
        const response = await api.delTodo(formValue2);
        // history.push("/");
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const addCatg  = createAsyncThunk("auth/addcatg", async ({formValue, history})=>{
    try {
        const response = await api.addCatg(formValue);
        history.push("/");
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const delCatg  = createAsyncThunk("auth/delcatg", async ({formValue1, history})=>{
    try {
        const response = await api.delCatg(formValue1);
        // history.push("/");
        console.log(response.data)
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const changeSt  = createAsyncThunk("auth/changest", async ({formValue, history})=>{
    try {
        const response = await api.changeSt(formValue);
        // history.push("/");
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const getTodo  = createAsyncThunk("auth/gettodo", async ({formValue, history})=>{
    try {
        const response = await api.getTodo(formValue);
        history.push("/");
        return response.data;
    } catch (error) {
       console.log(error) 
    }
})
export const logout  = createAsyncThunk("auth/logout", async ({history})=>{
    history.push('/logreg')
    window.location.reload(false)
})
const userSlice = createSlice({
    name :  "user",
    initialState:{
        user:null,
        todo:null,
        catg:null,
        error:"",
        loading:false,
    }, 
     extraReducers:{
        [login.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [login.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            state.user = action.payload;
        },
        [login.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [register.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [register.fulfilled]:(state,action)=>
        {
            state.loading = false;
            // localStorage.setItem("user", JSON.stringify({...action.payload}));
            // state.user = action.payload;
        },
        [register.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        
        [glogin.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [glogin.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}));
            // state.user = action.payload;
        },
        [glogin.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [addTodo.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [addTodo.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}))
            state.todo = action.payload;
        },
        [addTodo.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [addCatg.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [addCatg.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}))
            state.catg = action.payload;
        },
        [addCatg.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [delTodo.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [delTodo.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}))
            state.todo = action.payload;
        },
        [delTodo.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [delCatg.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [delCatg.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}))
            state.catg = action.payload;
        },
        [delCatg.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [changeSt.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [changeSt.fulfilled]:(state,action)=>
        {
            state.loading = false;
            localStorage.setItem("user", JSON.stringify({...action.payload}))
            state.todo = action.payload;
        },
        [changeSt.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getTodo.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [getTodo.fulfilled]:(state,action)=>
        {
            state.loading = false;
            state.todo = action.payload;
        },
        [getTodo.rejected]:(state,action)=>
        {
            state.loading = false;
            state.error = action.payload.message;
        },
        [logout.pending]:(state,action)=>
        {
            state.loading = true;
        },
        [logout.fulfilled]:(state,action)=>
        {
            state.loading = false;
            state.user = null;
        },
        [logout.rejected]:(state,action)=>
        {
            state.loading = false;
        },
     }
})
export default userSlice.reducer;