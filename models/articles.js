const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const articleSchema= new Schema( {
    title:  {
        type: String,
        required: true,
        minlength: 25


    },
    article:  {
        type: String,
        required: true,
        minlength: 25

    }
}, {timestamps: true});

const Article = mongoose.model('articles',articleSchema);

module.exports = {Article};