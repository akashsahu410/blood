const userdb=require('./signupschema')
module.exports={
    //to save the data of signup form
    savedata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api",data)
            userdb.create(data,(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
    //to check login data
    finddata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api in finddata",data)
            userdb.find(data,(err,result)=>{
                if(err)
                {
                    console.log("error in api main",err)
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
     //to get data on edit profile data
     findprofiledata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api in finddata",data)
            userdb.find(data,{password:0},(err,result)=>{
                if(err)
                {
                    console.log("error in api main",err)
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
    //to find the blood group 
    findbloodgroup(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api in finddata",data)
            userdb.find({$and:[data]},{"name":1,"phone":1,"available":1,"email":1},(err,result)=>{
                if(err)
                {
                    console.log("error in api main",err)
                    reject(err)
                }
                else{
                    console.log("result of blood in api",result)
                    resolve(result)
                }
            })
        });
    },
    //to save the data of edit profile
    editprofiledata(key,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api",data)
            userdb.update(key,{$set:data},(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
    // to find email for forgot password
    findemail(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api in finddata",data)
            userdb.find(data,{email:1},(err,result)=>{
                if(err)
                {
                    console.log("error in api main",err)
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
    //to change the password
    changepassword(key,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the api",data)
            userdb.update(key,{$set:data},(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
}