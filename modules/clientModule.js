const mongoose = require('mongoose');

const info = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    }
})

const clientModel = new mongoose.model("clientInfo",info);

module.exports = clientModel;