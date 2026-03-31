import User from "../models/User.js";

export const register = async (req, res) => {
   try{
        const {username,email,password} = req.body;

        const user = await User.findOne({email});

        if(user){
            return res.status(401).json({message:"User already exits.!!"});
        }
      
        await User.create({
            username,
            email,
            password
        });
        res.status(201).json({message:"User register successfully.!!"});
   }
   catch(error){
        res.status(501).json({message:"Faild to register.!!"})
   }
};

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email,password});

        if(!user){
            return res.status(401).json({message:"User not found.!!"});
        }

        res.status(201).json({message:"Login Successfully.!!"});
    }
    catch(error){
        res.status(500).json({message:"Failed to login.!!"})
    }
};