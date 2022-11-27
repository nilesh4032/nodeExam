const express= require('express');
const app=express();
const bodyParser= require('body-parser');
const {check,validationResult}= require('express-validator');
app.use(bodyParser.urlencoded({ extended:true}));

//html show karna

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/form.html')
})
// app.get('/login',val=(req,res)=>{
//     response={
//         username: req.query.username,
//         email: req.query.email,
//         age: req.query.age
//     }
//     console.log(response);
//     res.end(JSON.stringify(response))


// })




// form validation

app.post('/login',[
    check('username').isAlpha().withMessage("Name must be a valid alpha character").isLength({min:2, max:16}).withMessage("length must be betwen 2 and 16"),
    check('email').isEmail().withMessage("Name must be a valid email").isLength({min:3, max:16}).withMessage("length must be betwen 3 and 16"),
    check('age').isLength({min:2, max:3}).withMessage("length must be betwen 1 and 3"),

],(req,res)=>{
   const errors=validationResult(req);
   if(!errors.isEmpty()){
    res.send(errors);
   }else{
    response={
         username: req.query.username,
        email: req.query.email,
        age: req.query.age
    }
   }
    console.log(response);
    res.end(JSON.stringify(response))


})

// app.get('/app',(req,res)=>{
//     res.send("hello nilesh");
// })
//  app.post('/app',(req,res)=>{
//     res.send("hello nilesh");
//  })
// app.listen(port,()=>{
//     console.log("listening on port " + port);
// })
app.listen(4000,()=>{
    console.log("nilesh ");
})
 
