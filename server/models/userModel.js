import { Schema,model } from "mongoose";
const userSchema=new Schema({
    username:{
        type:String,
        unique:true,
        required:[true,"Username is required"],
        min:5,
        max:15,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email is required"],
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        min:8,
        max:12,
        select:false,
    },
    signupDate:{
        type:Date,
        default:Date.now(),
        select:false,
    },
    image:{
        type:String,
        required:true,
    },
    profileSetup:{
      type:Boolean,
      default:false,
    }
})

const User=model("User",userSchema);

export {User}