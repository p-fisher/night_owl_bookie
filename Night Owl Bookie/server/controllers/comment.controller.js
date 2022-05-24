const Comment = require('../models/comment.model');

module.exports.findAllComments = (req, res) => {
    Comment.find({}) 
        .then(findAllComments => {
            console.log(findAllComments)
            res.json({Comments: findAllComments})
        })
        .catch(err => {
            console.log(err)
            res.json({message: `Something went wrong`, error: err});
        })
};

module.exports.findOneComment = (req, res) => {
    Comment.findOne({_id: req.params.id})
        .then((findComment) => {
            console.log(findComment)
            res.json({Comment: findComment})
        })
        .catch(err => {
            console.log(err)
            res.json({message: `Something went wrong`, error: err});
        });
};

module.exports.createNewComment = (req, res) => {
    Comment.create(req.body)
        .then((newlyCreatedComment) => {
            console.log(newlyCreatedComment)
            res.json({createdComment: newlyCreatedComment})
        })
        .catch((err) => {
            console.log("newlyCreatedComment has failed")
           // res.json({message: `Something went wrong with creation`, error: err});
            res.status(400).json(err) //previously commented
        });
};

module.exports.updateExistingComment = (req, res) => {
    Comment.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedComment => {
            console.log(updatedComment)
            res.json({updatedComment: updatedComment})
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err);
        });
};

module.exports.deleteAnExistingComment = (req, res) => {
    Comment.deleteOne({_id: req.params.id})
        .then(result => {
            console.log(result)
            res.json({result: result})
        })
        .catch(err => {
            console.log(err)
            res.json({message: `Something went wrong`, error: err})
        })
};