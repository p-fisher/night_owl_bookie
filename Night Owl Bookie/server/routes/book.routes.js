const bookCtrl = require("../controllers/book.controller");

module.exports = (app) => {
    app.get("/api/books", bookCtrl.findAllBooks);
    app.get("/api/books/:id", bookCtrl.findOneBook);
    app.post("/api/books", bookCtrl.createNewBook);
    app.put("/api/books/:id", bookCtrl.updateExistingBook);
    app.delete("/api/books/:id", bookCtrl.deleteAnExistingBook);
};


// from PF: do we need a "suggestOneBook"?