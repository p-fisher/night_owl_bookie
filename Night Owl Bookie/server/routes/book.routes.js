const bookCtrl = require("../controllers/book.controller");
// const jwtMiddleware = require("../middleware/jwt.middleware")

module.exports = (app) => {
    app.get("/api/books", bookCtrl.findAllBook);
    app.get("/api/books/:id", bookCtrl.findOneBook);
    app.put("/api/books/:id", bookCtrl.updateExistingBook);
    app.post("/api/books", jwtMiddleware.authenticateJwt, bookCtrl.createNewBook);
    app.delete("/api/books/:id", bookCtrl.deleteAnExistingBook);
};