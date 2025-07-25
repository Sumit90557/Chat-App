import path from 'path' ;
import dotenv from 'dotenv' ;
dotenv.config() ; 
import express from 'express' ; 
import cookieParser from 'cookie-parser';


//Routes 
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000 ; 
const __dirname = path.resolve() ; 


app.use(express.json()) ; 
app.use(cookieParser());

app.use("/api/auth" , authRoutes) ;
app.use("/api/messages" , messageRoutes) ; 
app.use("/api/users" , userRoutes) ; 

app.use(express.static(path.join(__dirname, "/frontend/dist"))) ;

app.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "frontend" , "dist" , "index.html"));
})


server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is listening in port ${PORT}`) ; 
})