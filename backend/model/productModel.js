const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
        required: true,
    },
    numReview: {
        type: Number,
        default: 0,
        required: true,
    },
    countInStock: {
        type: Number,
        default: 0,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
  timestamps: true,
});

const productModel = mongoose.model("Product" , productSchema);
module.exports = productModel;