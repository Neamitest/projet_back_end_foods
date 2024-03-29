const mongoose = require("mongoose");
const validator = require('validator');
const dateCreation = new Date();
const userRoles = require("../utils/userRoles");

const userSchema = mongoose.Schema({
    firstName :{
        type:String,
    },
    lastName :{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, "filed must a valid email address"],
    },
    password:{
        type:String,
        required:true
    },
    dateCreation:{
        type:Date,
        default:dateCreation
    },
    phoneNumber:{
        type:Number,
    },
    token:{
        type:String
    },
    role:{
        type:String,
        enum:[userRoles.ADMIN,userRoles.MANGER,userRoles.USER],
        default:userRoles.USER

    }
})
module.exports = mongoose.model("User",userSchema);