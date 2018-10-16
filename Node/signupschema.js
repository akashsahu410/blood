const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String},
    gender:{type:String},
    age:{type:Number},
    bloodgroup:{type:String},
    email:{type:String},
    password:{type:String},
    state:{type:String},
    city:{type:String},
    block:{type:String},
    phone:{type:String},  
    available:{type:String},  
});

module.exports=mongoose.model("bloodsignupcollections",userSchema);