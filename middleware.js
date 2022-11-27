const express= require('express');
const app=express();
const age=function(req,res,next){
    if(!req.query.age){
        res.send("please enter age");
    }else if(req.query.age<18){
        res.send("not authorised");

    }else{
        next();
    }
}
app.use(age);
app.get("/",(req,res)=>{
    res.send("home page")
})
app.listen(3000);