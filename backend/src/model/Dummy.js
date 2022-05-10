const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    identity: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    distinct: {
        type: String,
        required: true
    },
    subdistinct: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    }
}, {collection: "user"})

module.exports = mongoose.model("user", personSchema)