const mongoose = require('mongoose');
const validator = require('validator');


const propSingleSchema = new mongoose.Schema({
    title: {
        type: String, required: true,

    },
    id: {
        type: Number,
        required: true
    },
    beds: {
        type: String,
        required: true,
        default: "2"
    },


    area: {
        type: String,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    garages: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    "agent-pic": {
        type: String,
        required: true
    },
    link1: {
        type: String,
        required: true
    },
    link2: {
        type: String,
        required: true
    },
    link3: {
        type: String,
        required: true
    },
    "type": {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    desc1: {
        type: String,
        required: true
    },
    desc2: {
        type: String,
        required: true
    },
    desc3: {
        type: String,
        required: true
    },
    desc4: {
        type: String,
        required: true
    },
    desc5: {
        type: String,
        required: true
    },
    desc6: {
        type: String,
        required: true
    },
    desc7: {
        type: String,
        required: true
    },
    desc8: {
        type: String,
        required: true
    },


    one: {
        type: String,
        required: true
    },
    two: {
        type: String,
        required: true
    },
    three: {
        type: String,
        required: true
    },
    four: {
        type: String,
        required: true
    },
    five: {
        type: String,
        required: true
    },
    six: {
        type: String,
        required: true
    },
    seven: {
        type: String,
        required: true
    },
    eight: {
        type: String,
        required: true
    },
    nine: {
        type: String,
        required: true
    },
    "agent-name": {
        type: String,
        required: true
    },
    "agent-desc": {
        type: String,
        required: true
    },
    rent: {
        type: String,
        required: true
    }



})

const propSingleModel = mongoose.model('PropSingleModel', propSingleSchema);
module.exports = propSingleModel;