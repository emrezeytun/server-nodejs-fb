const express = require('express')
const {createFeedback, getFeedbacksByCompanyId} = require('../controllers/feedback.js')

const router = express.Router();

router.post('/createFeedback', createFeedback)
router.get('/getFeedbacks/:id', getFeedbacksByCompanyId)

module.exports = router