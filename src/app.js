import express from 'express'//import express
import { v4 } from 'uuid'

const tasks=[];

const app=express()//a new instance from express 
app.use(express.json())//any request that comes transform to json


app.get('/ping',(req,res)=>{ //when a ping request arrives, /ping is a route from request
    res.send("pong")//we return a "pong" text
})

app.get('/tasks',(req,res)=>{
    res.status(200).json(tasks);
})

app.post('/tasks',(req,res)=>{
    const {title,description}= req.body;

    if(!title || !description) return res.sendStatus(400)//if ther no title and description, send status 400

    res.json({//we send a json response
            title,
            description,
            id:v4()//this id is going to come from uuid
    })
})



export default app