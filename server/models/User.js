import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    },
    profileImg:{
        type:String,
    }
});

const User = mongoose.model('User',userSchema);
export default User;