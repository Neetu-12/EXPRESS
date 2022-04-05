const express=require("express")
const app=express()
port=8000

app.get('/',(req,res)=>{
    res.end('welcome at home page')
})
app.get('/about',(req,res)=>{
    res.end('welcome at about page')
})

app.get('/login',(req,res)=>{
    res.end('welcome at login page')
})

app.get('/contact',(req,res)=>{
    res.end('welcome at contact page')
}).listen(`${port}`,()=>{
    console.log(`listenin ${port}`);
})