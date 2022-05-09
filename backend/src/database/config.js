const mongoose = require("mongoose")
const MONGO_URI = process.env.MONGODB_URI

exports.connect = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Connect to database successfully")
    }).catch((err) => {
        console.log("Error connecting to database")
        console.log(err)
        process.exit(1)
    })
}