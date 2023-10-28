const FeedbackSchema = require('../models/feedback.js')

const createFeedback = async(req,res) => {
    console.log('process', process.env.MONGO_URI)
    try {
        console.log('req', req.body.companyId)
        const newFeedback = await FeedbackSchema.create(req.body)
        res.status(201).json({
        success: true,
        newFeedback
        })

    } catch(err) {
        return res.status(500).json({success: false, message: err.message})
    }
}

const getFeedbacksByCompanyId = async(req,res) => {
    try {
        const {id} =  req.params
        const feedbacks = await FeedbackSchema.find({companyId: id})
        res.status(201).json({
        success: true,
        feedbacks
    })

    } catch(err) {
        return res.status(500).json({success: false, message: err.message})
    }
}

module.exports = {createFeedback, getFeedbacksByCompanyId}