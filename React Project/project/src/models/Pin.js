const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    user: {
        type: String,
        default: '',
    } 
});

module.exports = Item = mongoose.model('pins', PinSchema);