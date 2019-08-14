const mongoose = require('mongoose');
const validator = require('validator');
var agentschema = new mongoose.Schema({
    id:{
        type:Number
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        validate(val) {
            if (!validator.isAlpha(val)) {
                throw new Error("The name should be a string");
            }
        }
    },
    lastname: {
        type: String,
        trim: true,
        validate(val) {
            if (!validator.isAlpha(val)) {
                throw new Error("The last name should be a string");
            }
        }
    },
    rank: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    phone: {
        type: Number,
    },
    email: {
        type: String,
        trim: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Please enter a valid email");
            }
        }
    },
    skype:{
        type:String
    },
    linkedin:{
        type:String
    },
    img:{

    },
    img1:{
    
    },
    img2:{
        
    },
    img3:{
    
    },
    img4:{
        
    }
});
const Agent = mongoose.model('agent', agentschema);
module.exports = Agent;
