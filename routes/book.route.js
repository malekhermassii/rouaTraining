module.exports = (app)=>{
    const books = require("../controllers/book.controller")
    //http methods : post(create) , get(readall , readByid) , put(update) , delete
    app.post("/books" , books.createBook)
    app.get("/affichageBooks" , books.affichageAll)
    app.get("/bookById/:bookId" , books.FindElementById)
    app.put("/updateBook/:bookId", books.updateBook)
    app.delete("/deleteBook/:bookId" , books.deleteBook)
}