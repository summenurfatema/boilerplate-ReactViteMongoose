const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// variables
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

//Express app
const app = express()

// middlewares
app.use(express.json());
app.use(cors({credentials:true,}));

//test api
app.get("/",(req,res) => {
res.status(200).json({message:"Welcome to quest quill server !"})
})


// routes
const getAllUserRouter = require("./routes/user.route")
const getUserByEmailRouter = require("./routes/user.route")

// Bypassed apis
app.use("/api/v1",
getAllUserRouter,
getUserByEmailRouter
)





// Database
mongoose.connect(uri,{useUnifiedTopology:true,})
.then(()=>{
    app.listen(port,(req,res)=>{
        console.log(`Server is running on http://localhost:${port}`);
    }) 
})
.catch((error)=>console.log(error.message));
