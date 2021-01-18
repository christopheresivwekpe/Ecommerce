const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 225,
        min: 6
    },
    email:{
        type: String,
        required: true,
        max: 225,
        min: 6,
        unique: true,
        //dropDups: true
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true,
});

const userModel = mongoose.model("User" , userSchema);
module.exports = userModel;