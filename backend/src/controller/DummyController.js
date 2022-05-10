const User = require("../model/Dummy")

const DummyController = {
    createPerson: async function (req, res, next) {
        console.log(req.body)
        try {
            const title = req.body.title
            const firstName = req.body.firstname
            const lastName = req.body.lastname
            const identity = req.body.identity
            const dob = req.body.dob
            const address = req.body.address
            const province = req.body.province
            const distinct = req.body.distinct
            const subDistinct = req.body.subdistinct
            const tel = req.body.tel
            const user = await User.create(
                {
                    title: title,
                    firstname: firstName,
                    lastname: lastName,
                    identity: identity,
                    dob: dob,
                    address: address,
                    province: province,
                    distinct: distinct,
                    subdistinct: subDistinct,
                    tel: tel,
                }
            )
            res.status(200).json(user)
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