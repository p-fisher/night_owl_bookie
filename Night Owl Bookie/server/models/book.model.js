const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,'Title is required!'],
        minlength: [2,'Title must be at least 2 characters in length'],
        unique: [true,'Book title must be unqiue']
    },
    authorName: {
        type: String,
        required: [true,'Author\'s name is required!'],
        minlength: [2,'Name must be at least 2 characters in length']
    },
    year: { /*publication year */
        type: Number,
        required: [true,'Year of publication is required'],
        minlength: [4,'Year must be 4 digits'],
        maxlength: [4,'Year must be 4 digits']
    },
    pages: {
        type: Number,
        required: [true,'Number of pages required']
    },
    description: {
        type: String
    },
    likes: {
        type: Number
    }

},{timestamps:true});

module.exports = mongoose.model("Book",BookSchema);