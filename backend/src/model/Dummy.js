const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }
}, {collection: "people"})

module.exports = mongoose.model("people", personSchema)