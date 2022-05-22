const commentCtrl = require("../controllers/comment.controller");

module.exports = (app) => {
    app.get("/api/comments", commentCtrl.findAllComments);
    app.post("/api/comments", commentCtrl.createNewComment);
    app.get("/api/comments/:id", commentCtrl.findOneComment);
    app.put("/api/comments/:id", commentCtrl.updateExistingComment);
    app.delete("/api/comments/:id", commentCtrl.deleteAnExistingComment);
};