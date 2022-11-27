// const express= require('express');
// const app=express()
// const cookieParser= require('cookie-parser')
// app.use(cookieParser())
// let users={
//     name:"navneet",
//     age:20
// }
// app.get('/set',(req,res)=>{
//     res.cookie("userdata:",users)
//     res.send('cokkie is set');
// })
// app.get('/get',(req,res)=>{
//     res.send(req.cookies);
// })
// app.get('/clear',(req,res)=>{
//     res.clearCookie('userdata',users);
//     res.send('clear cookie')
// })
// app.listen(5000,()=>{
//     console.log('syuifdsghjkhghfdghjkhgf');
// })

//////////////////////////////////////////////////////// cookies-session
 const cookieParser= require('cookie-parser')
const express = require('express');
const app=express();
app.use(cookieParser());

// const data={
//     name:"nilesh",
//     age:23
// }
// app.get("/set",(req,res)=>{
//     res.cookie("data",data);
//   res.send("set");
// })

// app.get("/get",(req,res)=>{
//     res.send(req.cookies);
   
// })
// app.get("/clear",(req,res)=>{
//     res.clearCookie("data",data);
//     res.send("cleared")
// })




app.listen(5000,()=>{
    console.log("running on 5000");
})



//downloading

// const express = require('express');
// const app= express();

// app.get("/", (req, res)=>{
//     res.sendFile(__dirname+'/form.html');
// });

// app.get("/thisPage", (req, res)=>{
//     res.download('./demo.txt', function(err){
//         if(err) console.log(err);
//         else console.log("file downloaded successfully");
//     })
// })

// app.listen(3000,()=>{
//     console.log(`sdfhjk 3000`)
// })