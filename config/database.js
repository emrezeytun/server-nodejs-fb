const mongoose = require('mongoose')

const db = () => {
    console.log('connecting...')
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('mongodb connect')
    }).catch((err) => {
        // throw new Error(err.message)
        console.log('connetction error', err)
    } )
}

module.exports = db