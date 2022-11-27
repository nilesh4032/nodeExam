const express=require("express");
const { reset } = require("nodemon");
const app=express();
const mongodb=requiree("mogodb").MongoClient;
const url="mongodb://localhost:27017";
app.use(bodyparser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
res.sendFile(__dirname+"/form.html");
})

//insert data

app.post('/sign',function(req,res){
    MongoClient.connect(url,(err,db)=>{
        if(err)throw err;
        var dbo=db.db("customer");
        dbo.collection("customer-details").insertOne(req.body,function(err,res){
            if(err) throw err;
            db.close()
            res.sendFile(__dirname+"sign.html");

        })

    })
})

//find

app.post('/search',(req,res)=>{
    MongoClient(url,(err,db)=>{
        if(err) throw err;
        var dbo=db.db("customer");
        dbo.collection("customer-details").find(req.body).toArray(function(err,res){
            if(err) throw err;
            console.log(res);
            db.close();
            res.json(res)
        })
    })
})
app.listen(5000,()=>{
    console.log("running on 5000");

})