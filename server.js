const express = require("express")
const app = express();
const port = 4000 ; //3000 , 3001
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")
const session = require("express-session")
app.get("/"  ,(req , res)=>{
    res.send("Hello Roua") ; 
})
app.use(cors())
// bodyParser()
app.use(bodyParser.json({limit : '10mb'}))
app.use(bodyParser.urlencoded({limit : '10mb' , extended : true}))
app.use(session({
    secret :"Ip4aPfWcmgnDyYgxPOb1HRORhOz1UfFY" , 
    saveUninitialized : false
}))
app.post("/logout" , (req , res)=>{
    req.session.destroy(error =>{
        if(error){
            console.log(error)
            return res.status(500).json({
                message : "server error while trying to logout"
            })
        }
        res.status(200).json({message : "logout Successfully"})
    })
})
mongoose.connect("mongodb+srv://malakhermassi111:NGwN7RJ1gSlbZcpK@cluster0.te0eq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to MongoDB")
})
.catch((error)=>{
    console.error("error while connecting to the DB" , error)
})
require("./routes/book.route")(app)
require("./routes/user.route")(app)
app.listen(port , ()=>{
    console.log("this app is succeefully working on port 4000");
})
// mongoDB ---> mongoose 
// class (user , book)
// git add .
// controller : user.controller.js , book.js
// model : user.model.js , book 
// route : user.route.js , book
// frontend , testing tools(postman)
// kahoot 2 backend done
// localhost:port/
// git and github
// git (website ---> version (1.0 --->))