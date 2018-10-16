const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const signupRouter=require('./signuprouter')
const profileRouter=require('./profilerouter')
const forgotPasswordRouter=require('./forgotpasswordrouter')

app.use(cors());
mongoose.connect("mongodb://localhost:27017/database");
app.use('/',signupRouter);
app.use('/',profileRouter);
app.use('/forgot',forgotPasswordRouter);

app.listen(8081,()=>{
    console.log("server is listening at port 8081")
})