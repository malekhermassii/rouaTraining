// User(author , prix , title  , nbPage  , desc)
const mongoose = require('mongoose')
// schema ()
const UserSchema = new mongoose.Schema({
    username:{
        type : String ,
    }, 
    email:{
        type : String ,
        required : true
    },
    password:{
        type : String ,
        required : true
    },
})
module.exports = mongoose.model("User" , UserSchema)
// cors , body-parser