const express=require("express")
const app = express();

app.get("/get-data",(req,res)=>{
    res.send("hello World from the Neetu Sah")
    
})
app.listen(8000,()=>{
    console.log("listening the port at 8000");
});