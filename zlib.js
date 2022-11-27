const fs=require("fs");
const zlib=require("zlib");

// var zip=zlib.createGzip();
// var r= fs.createReadStream("nilesh.txt");
//  var w=fs.createWriteStream("nilesh.txt.zip");
//  r.pipe(zip).pipe(w);

var zip=zlib.createGunzip();
var r=fs.createReadStream("nilesh.txt.zip");
var w=fs.createWriteStream("nilesh.txt");
r.pipe(zip).pipe(w);

