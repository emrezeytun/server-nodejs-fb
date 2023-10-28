const mongoose = require('mongoose')

const CreateCompanySchema = new mongoose.Schema({
    companyId: {
        type: String,
    },
    companyName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('createcompany', CreateCompanySchema)