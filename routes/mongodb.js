const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri = process.env.MONGO_CONNECTION
const options = { useNewUrlParser: true, useUnifiedTopology: true }
modulo.exports = mongoose.connect(uri, options)
    .then(() => console.log("Connect successfully to Mongo URI: " + uri))
    .catch(err => {
        console.log("Failed to connect to MongoDB - ", err)
        process.exit(1)
    })