import express from 'express'//import express

const app=express()//a new instance from express 

app.get('/ping',(req,res)=>{ //when a ping request arrives, /ping is a route from request
    res.send("pong")//we return a "pong" text
})

app.get('/tasks',(req,res)=>{
    res.json([]);
})

app.post('/tasks',(req,res)=>{
    res.json({})//we send a json response
})



export default app