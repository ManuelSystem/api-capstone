const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }, 
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    createdEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    registeredEvents: [{
       type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);