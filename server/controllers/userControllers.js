import User from "../models/User.js";

export const register = async (req, res) => {
   try{
        const {username,email,password} = req.body;

        const user = await User.findOne({email});

        if(user){
            return res.status(401).json({message:"User already exits.!!"});
        }
        const newUser = {
            username,
            email,
            password
        }
        await User.create(newUser);
        res.status(201).json({message:"User register successfully.!!"});
   }
   catch(error){
        res.status(501).json({message:"Faild to register.!!"})
   }
};