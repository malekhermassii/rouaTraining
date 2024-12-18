// book(author , prix , title  , nbPage  , desc)
const mongoose = require('mongoose')
// schema ()
const bookSchema = new mongoose.Schema({
    author:{
        type : String ,
        required : true
    }, 
    prix:{
        type : Number , 
        required : true
    },
    title:{
        type:String , 
        required : true
    },
    desc:{
        type:String 
    }
})
module.exports = mongoose.model("Book" , bookSchema)
// cors , body-parser