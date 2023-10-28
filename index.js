const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const db = require('./config/database.js')
const CreateCompany = require('./routes/createCompany.js')
const Feedback = require('./routes/feedback.js')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))

console.log('mongo_uri', process.env.MONGO_URI)
app.use('/', Feedback)
app.use('/', CreateCompany)

app.get('/', (req,res) => {
    res.send('Page')
})

const PORT = process.env.PORT || 5010

db()

app.listen(PORT, () => {
    console.log('server is running on port:', PORT)
})