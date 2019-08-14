const mongoose = require('mongoose');
const validator = require('validator');
var carderviewschema = new mongoose.Schema({
    name:{
        type:String
    },
    address:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    img1:{

    },
    img2:{

    },
    img3:{

    },
    id:{
        type:Number
    }
});
const Card = mongoose.model('card',carderviewschema);
module.exports=Card;