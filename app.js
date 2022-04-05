// 1)
// var express = require('express');
// var app = express();

// app.get('/',(req, res)=>{
//    res.send("Hello world!");
// });


// app.listen(8000,()=>{
//    console.log("listening the port at 8000");
// });

// 2)
var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world!");
});

app.listen(8000,()=>{
   console.log("listen port 8000");
});