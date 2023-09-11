const User = require("../models/user.model")


//geting all vab

const getAllUser = async (req,res)=>{

   try{
    const allUser = await User.find().sort({_id : -1})
    res.status(200).json(allUser)
   } catch(error){
    console.log(error);
    res.status(500).json({message:"Error"})
   }
}
//get specific vab
const getUserByEmail = async(req,res)=>{
   try {
    const email = req.params.email;
    const data = await User.find({ email : email });
    res.status(200).json(data);
   } catch(error){
    console.log(error);
    res.status(500).json({messege: "Id not found"})
   }

}

module.exports = {getAllUser,getUserByEmail}