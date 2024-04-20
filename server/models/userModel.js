import mongoose from 'mongoose';

const userSchema= new mongoose.Schema({
    fullName:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required'],
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
});
const userModel= mongoose.model('User',userSchema)

export default userModel;