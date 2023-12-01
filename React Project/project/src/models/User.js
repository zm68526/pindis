const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
});

module.exports = User = mongoose.model('users', UserSchema);