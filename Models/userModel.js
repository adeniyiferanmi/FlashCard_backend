import mongoose from "mongoose"

const userSchema = {
    name: {
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    department:{
        type:String,
    },
    level: {
        type:String
    }
}

const userModel = mongoose.model("users",userSchema)
export default userModel