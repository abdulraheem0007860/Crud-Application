const mongoose =require("mongoose");
const DB="mongodb+srv://abdul:1234567890@cluster0.q2dugdd.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB,{
    UseNewUrlParser:true,
    UseUnifiedTopology:true,
}).then(()=> console.log("connection start")).catch((error)=>console.log(error.message));