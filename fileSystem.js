const { dir } = require("console");
let fs=require("fs");
const path=require("path");
//reaidng
// let buffer=fs.readFileSync("abc.js");
// console.log("bin data"+buffer);

// create
// fs.openSync("abc.txt","w");

//no file-- crate and enterr content if already exixts then replace
//fs.writeFileSync("abc.txt","jaai shree ram");

// update
//fs.appendFileSync("abc.txt"," jor se bolo");


//create folder
// fs.mkdirSync("ayodhya");
// fs.writeFileSync("ayodhya/ram.txt","jai ram ji ki");
//  let content= fs.readdirSync("ayodhya");
//  console.log(content);
//remove files
// for(let i=0;i<content.length;i++){ 
//     console.log("file",content[i],"is removed");
//     fs.unlinkSync("ayodhya/"+content[i]);
// }
//remove folder

//fs.rmdirSync("ayodhya");
//fs.existSync if file xists or not at a path in t or f
// let doesExist=fs.existsSync("abc.txt");
// console.log(doesExist);
// doesExist=fs.existsSync("abcd.txt");
// console.log(doesExist);
// //fs.lstatSync  tells if the object is a file or a directory
// let obj=fs.lstatSync(__dirname+"\\fileSystem.js");
// let ans=obj.isFile();
// console.log(ans);
// ans=obj.isDirectory();
// console.log(ans);

//automate file making

// for(let i=0;i<=10;i++){
//     let dirMake=`lecture-${i}`;
//     fs.mkdirSync(dirMake);
//      fs.writeFileSync(dirMake+"//"+"readme.md",`#readme for ${dirMake}`);

// }
//path join 

let ext=path.extname(path.join(__dirname,"abc.js"));//gives extension
console.log("ext",ext);
let name=path.basename(__dirname);//bease folder
console.log(name);
name=path.basename(path.join(__dirname,"abc.js")); 
console.log(name);