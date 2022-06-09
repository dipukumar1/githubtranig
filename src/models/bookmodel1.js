const mongoose = require('mongoose');

const bookSchemas = new mongoose.Schema( {
    bookName: String,  

    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year:{ type: Number,
        default:2021,

    },

    tags: [String],
    authorName: String, 
    totalPages:String,
    stockAvilable: Boolean,

    //sales: {type: Number, default: 10}

}, { timestamps: true });
module.exports = mongoose.model ('Book', bookSchemas)