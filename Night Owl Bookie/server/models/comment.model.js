const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: [true,'Nickname is required!'],
        minlength: [2,'Nickname must be at least 2 characters in length'],
        // unique: [true,'Nickname must be unqiue']
    },
    comment: {
        type: String,
        required: [true, "Text required"]
    },
    createdDate: {  
        type: Date
    }, 
    isSuggestion:{
        type: Boolean,
        default: false
    }
    // likes: { // Optional
    //     type: Number
    // }
},{timestamps:true});

module.exports = mongoose.model("Comment", CommentSchema);