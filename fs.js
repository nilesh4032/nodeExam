const fs=require("fs");
const http=require("http");

// // const student={
// //     name:"nilesh",
// //     age:22

// // }
// // let data=JSON.stringify(student);
// // fs.writeFile("data.json",data,(err)=>{
// //     if(err) 
// //         throw err; 
// //         console.log("data writing successfully");
    
   
// // })
// const server=http.createServer((req,res)=>{

//     fs.readFile("/data.json",(err,data)=>{
//        if(err) {
//        throw err;
//        } 
//        let student=JSON.parse(data);
//        res.write( JSON.stringify(student));
//        res.end();
      

//     })
// })

const server=http.createServer((req,res)=>{
    res.end(`<html>
        <body>
            <input type="text" id="num1"></input>
            <input type="text" id="num2"></input>
            <input type="button" onClick="cal()" value="solve" ></input>
            <p id="temp1"
            >result:
            </p>
            <script>
            
            function cal() {
                num1=document.getElementById("num1").value;
                num2=document.getElementById("num2").value;
                document.getElementById("temp1").innerHTML=parseInt((num1))+parseInt((num2));
            }   

            </script>
        </body>
    </html>`)
})


server.listen(3000,()=>{
    console.log('nilesh');
})

//    function cal() {
            //     num1=document.getElementById("temp").value;
            //     document.getElementById("temp1").innerHTML=(num1-31)/1.8;
            //    }
