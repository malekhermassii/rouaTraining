module.exports = (app)=>{
    const users = require("../controllers/user.contorller")
    //http methods : post(create) , get(readall , readByid) , put(update) , delete
    app.post("/signUp" , users.SignUp)
    app.post("/login" , users.login)
    app.get("/logout" , users.logout)
}