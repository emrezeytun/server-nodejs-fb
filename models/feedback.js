const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    companyId: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('feedback', FeedbackSchema)