// operation crud(create , read  , update , delete)
// create : 
const Book = require("../models/book.model")
exports.createBook = (req , res)=>{
    // create book 
    const book = new Book({
        author : req.body.author ,
        prix : req.body.prix , 
        title : req.body.title , 
        desc : req.body.desc
    })
    // error handling (try -catch , then , catch)
    book
    .save()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        // status 404 , 500, 200(ok) , 401 , 
        res.status(500).send({
            message : error.message || "error while creating new book"
        })
    })

}
// read(read all  , read one ) : affichage 
exports.affichageAll = (req, res)=>{
    // find
    Book.find()
    .then((books)=>{
        res.send(books)
    })
    .catch((error)=>{
        // status 404 , 500, 200(ok) , 401 , 
        res.status(500).send({
            message : error.message || "error while displaying all books"
        })
    })
}
// update : name : Roua --> mayssa
// delete : 
// form->  (req.body.author , req.body.title)
// CreateRead(all , one) , U(update) ,D(delete)
// id
exports.FindElementById = (req , res)=>{
    // methods findById(id)
    Book.findById(req.params.bookId)
    .then((book)=>{
        if(!book){
            return res.status(404).send({
                message : "book not found with this id " + req.params.bookId
        })
        }
        res.send(book)
    })
    .catch((error)=>{
        res.status(500).send({
            message : error.message || "error while displaying a single book"
        })
    })
}
// url(link) : www.rouaWeb.com\home\?id="23456789oefsvhjdj425678i9o0p" : req.params
// update
exports.updateBook = (req , res)=>{
    // findByIdAndUpdate
    Book.findByIdAndUpdate(req.params.bookId ,
         {
        author : req.body.author ,
        prix : req.body.prix , 
        title : req.body.title , 
        desc : req.body.desc
        },
        {new : true }
    )
    .then((book)=>{
        if(!book){
            return res.status(404).send({
                message : "book not found with this id " + req.params.bookId
        })
        }
        res.send(book)
    })
    .catch((error)=>{
        res.status(500).send({
            message : error.message || "error while updating a  book"
        })
    })
}
// roua , 120 , python book , this book is good book
// Rania , 160 , python book , this book is great book
exports.deleteBook = (req , res)=>{
    Book.findByIdAndDelete(req.params.bookId)
    .then((book)=>{
        if(!book){
            return res.status(404).send({
                message : "book not found with this id " + req.params.bookId
        })
        }
        res.send({message : "book deleted successfully"})
    })
    .catch((error)=>{
        res.status(500).send({
            message : error.message || "error while delete a book"
        })
    })
}