const mongoose = require('mongoose')

const playerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    age: {
        type: Number,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    isActive: {
        type: Boolean,
    },
    team: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    },
    position: {
        type: String,
        required: true,
        trim: true,
        maxlength: 32
    }       
}, { timestamps: true })

module.exports = mongoose.model('player', playerSchema)
