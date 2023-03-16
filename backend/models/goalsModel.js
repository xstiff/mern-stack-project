const mongoose = require('mongoose')

const goalScheme = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    description: {
        type: String,
        required: [true, 'Please add a description value']
    },
    title: {
        type: String,
        required: [true, 'Please add a title value']
    },
    progress: {
        type: Boolean,
        required: false,
        default: false
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalScheme)