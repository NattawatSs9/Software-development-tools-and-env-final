require("dotenv").config()
require("./src/database/config").connect();
const express = require("express")
const path = require("path")
const cors = require("cors")
const app = express();

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const dummyRoute = require("./src/routes/DummyRoute")
app.use(dummyRoute)

module.exports = app