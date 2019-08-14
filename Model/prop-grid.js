const mongoose = require('mongoose');
const validator = require('validator');
const propGridSchema = new mongoose.Schema({
    rent: {
        type: String, required: true,
        validate: function abc(val) {
            var str = val.split(" ").join("");
            if (!validator.isNumeric(str)) {
                throw new Error("Name contains numerics");
            }

        }
    },
    id: {
        type: Number,
        required: true
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
    links: {
        type: Number,
        required: true
    }


})

const propGridModel = mongoose.model('PropGridModel', propGridSchema);
module.exports = propGridModel;