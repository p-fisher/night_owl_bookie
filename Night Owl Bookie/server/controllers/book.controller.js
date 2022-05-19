const Book = require("../models/book.model");

// When calling from front end, make sure to pay attention on the camel-cases! below comments should help out.

module.exports.findAllBooks = (req, res) => {
    Book.find()
        .then(findAllBooks => {
            console.log(findAllBooks)
            res.json({Books: findAllBooks}) // response.data.Books is how you want to get the data
        })
        .catch(err => {
            console.log(err)
            res.json({message: `Something went wrong`, error: err});
        })
};

module.exports.findOneBook = (req, res) => {
    Book.findOne({_id: req.params.id})
        .then((findBook) => {
            console.log(findBook)
            res.json({Book: findBook}) // response.data.Book is how you want to get the data
        })
        .catch(err => {
            console.log(err)
            res.json({message: `Something went wrong`, error: err});
        });
};

module.exports.createNewBook = (req, res) => {
    Book.create(req.body)
        .then(newlyCreatedBook => {
            console.log(newlyCreatedBook)
            res.json({createdBook: newlyCreatedBook}) // response.data.createdBook
        })
        .catch(err => {
            console.log("newlyCreatedBook has failed")
            res.status(400).json(err);
        });
};

module.exports.updateExistingBook = (req, res) => {
    Book.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedBook => {
            console.log(updatedBook)
            res.json({updatedBook: updatedBook}) // response.data.updateBook
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
};

module.exports.deleteAnExistingBook = (req, res) => {
    Book.deleteOne({_id: req.params.id})
        .then(result => {
            console.log(result)
            res.json({result: result}) // response.data.result
        })
        .catch(err => {
            console.log(err)
            res.json({message: `Something went wrong`, error: err})
        })
};