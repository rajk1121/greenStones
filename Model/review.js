const mongoose = require('mongoose');
const validator = require('validator');
var reviewschema = new mongoose.Schema({
    name1: {
        type: String
    },
    review1: {
        type: String
    },
    img1: {
        type: String
    },
    name2: {
        type: String
    },
    review2: {
        type: String
    },
    img2: {

    },
    name3: {
        type: String
    },
    review3: {
        type: String
    },
    img3: {
        type: String
    },
    img11: {
        type: String
    },
    img12: {
        type: String
    },
    img13: {
        type: String
    },
    id: {
        type: Number
    }
});
const Review = mongoose.model('review', reviewschema);
module.exports = Review;