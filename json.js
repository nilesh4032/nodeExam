const fs=require('fs');
const http=require('http');

fs.readFile("data.json","utf-8",(err, data) => {
    const orgdata=JSON.parse(data);
    console.log(data);
    console.log(orgdata);

})

