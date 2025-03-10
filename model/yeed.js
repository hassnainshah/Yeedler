const mongoose = require("mongoose")
const Schema = mongoose.Schema

const yeedSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        require:true
    },
    conclusion:{
        type:String,
        require:true
    }
} ,{timestamps:true});

const Yeed = mongoose.model("Yeed", yeedSchema);

module.exports = Yeed;