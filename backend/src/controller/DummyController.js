const Dummy = require("../model/Dummy")

const DummyController = {
    createPerson: async function (req, res, next) {
        try {
            const dummy = {
                title: "Steve LoLay",
                description: "I'm Captain Thailand"
            }
            const dummyCreate = await Dummy.create(
                dummy
            )
            res.status(200).json(dummyCreate)
        } catch (err) {
            console.log(err)
        }
    },
    getPerson: async function (req, res, next) {
        try {
            const all = await Dummy.find({})
            res.status(200).json(all)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = DummyController