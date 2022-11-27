const express= require('express');
const app = express();
const cookieSession= require('cookie-session');
 app.use(cookieSession({
    name:"nilesh",
    keys:["key1", "key2"]
 }))
 app.get('/',(req,res,next)=>{
    if(req.session.views){
        req.session.views++;
        res.send("no. of views:"+req.session.views);
    }else{
        req.session.views=1;
        res.send("no. of views:"+req.session.views);
    }
 })
 app.listen(4000)