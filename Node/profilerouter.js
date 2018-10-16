const express=require('express')
const app=express.Router();
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const userapi=require('./userapi')

app.post('/getprofile',async (req,res)=>{
    try{
        let data=await userapi.findprofiledata(req.body)
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in login router",err)
        res.status(404).send(data)
    }
})
app.post('/editprofile',async (req,res)=>{
    try{
        let data=await userapi.editprofiledata({email:req.body.email},req.body)
        console.log("data get from api in router",data)
        res.status(200).send(data)
    }
    catch(err){
        console.log("error in login router",err)
        res.status(404).send(data)
    }
})
module.exports=app;