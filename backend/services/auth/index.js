import express from 'express'

import dotenv from 'dotenv'
import connectDB from './config/db.js'
import dns from "node:dns";

dns.setServers(["1.1.1.1", "1.0.0.1"]);
dotenv.config()

const port = process.env.PORT

const app = express()

app.get("/",(req,res)=>{
    res.json({message : "Hello from auth"})
})

app.listen(port , ()=>{
    console.log(process.env.MONGODB_URI);
    console.log(process.env.MONGODB_URI.length);
    connectDB()
    console.log(`auth started at ${port}`);
})


