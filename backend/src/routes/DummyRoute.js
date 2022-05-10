const express = require("express")
const router = express.Router();

const DummyController = require("../controller/DummyController")

router.get("/dummy/all", DummyController.getPerson)
router.post("/user/create", DummyController.createPerson)

module.exports = router