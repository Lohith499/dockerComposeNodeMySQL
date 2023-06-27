const express=require("express")
const app=express()
const os=require("os");
require("dotenv").config();
const connection=require("./db");


app.get("/",(req,res)=>{
    connection.query("SELECT * FROM table_name",(err,results)=>{
        if(err) return res.status(500).json({message:"Error connecting to database",error:err})    
        return res.status(200).json({message: "Hello World", results:results})
    })

})




app.listen(process.env.PORT,()=>{
    console.log("Server is running on port 3000")
})