const express=require('express')
const app=express.Router();
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const userapi=require('./userapi')

app.post('/signup',async (req,res)=>{
    try{
        console.log("data for signup",req.body)
        let data=await userapi.finddata({email:req.body.email})
        console.log("data ndskfdsf",data)
        if(data.length > 0 ){
            res.status(200).send("Email id already exists")
        }
        else{
            const userdata=await userapi.savedata(req.body)
            res.status(200).send("Registered Successfully");
        }
    }
    catch(err){
        console.log("error in signup router",err)
        res.status(404).send(err);
    }
})
app.post('/login',async (req,res)=>{
    try{
        let data=await userapi.finddata({email:req.body.email})
        console.log("data get from api in router",data)
        res.status(200).send({email:data[0].email,password:data[0].password})
    }
    catch(err){
        console.log("error in login router",err)
        res.status(404).send(data)
    }
})

app.post('/profile',async (req,res)=>{
    try{
        console.log("data get in router",req.body)
        let data=await userapi.findbloodgroup(req.body)
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in login router",err)
        res.status(404).send(data)
    }
})
module.exports=app;