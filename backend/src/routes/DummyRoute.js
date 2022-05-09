const express = require("express")
const router = express.Router();

const DummyController = require("../controller/DummyController")

router.get("/dummy/all", DummyController.getPerson)
router.post("/dummy/create", DummyController.createPerson)

module.exports = router