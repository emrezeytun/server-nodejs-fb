const express = require('express')
const {createCompany} = require('../controllers/createCompany.js')

const router = express.Router()

router.post('/createCompany', createCompany)

module.exports = router