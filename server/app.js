require('dotenv').config();
const express=require('express');
const app = express();
const users =require("./models/userSchema");
const mongoose= require('mongoose');
require("./db/conn");
const cors= require("cors");
const router =require('./routes/router');

const port=4000;
app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port,()=>{
    console.log(`server is start port number ${port}`);
});
