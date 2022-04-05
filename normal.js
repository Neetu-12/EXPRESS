// var ex=require("express")
// var app=ex()
// app.get("/",(req,res)=>{
//     res.send("hello  Neetu");
// }).listen(8000,()=>{
//     console.log("listen port 8000");
// })


const express=require("express")
const app=express()
app.get('/',(a,s)=>{
    s.send("Hello Neetu sah....")
})
app.listen(8000,()=>{
    console.log("I'm using port 8000");
})