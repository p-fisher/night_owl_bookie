const bookCtrl = require("../controllers/book.controller");

module.exports = (app) => {
    app.get("/api/books", bookCtrl.findAllBooks);
    app.post("/api/books", bookCtrl.createNewBook);
    // routes that require an ID should come after those that don't
    app.get("/api/books/:id", bookCtrl.findOneBook);
    
    app.put("/api/books/:id", bookCtrl.updateExistingBook);
    app.delete("/api/books/:id", bookCtrl.deleteAnExistingBook);
};


// from PF: do we need a "suggestOneBook"?
// from PF: what about a PATCH for editing instead of PUT (PUT replaces the whole record where PATCH edits)