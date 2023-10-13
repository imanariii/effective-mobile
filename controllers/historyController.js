const {History } = require('../models/models')

class HistoryController {
    async getAll(req, res, next) {
        try {
            const {id} = req.params
            const actions = await History.findAll({where: {userId: id}})
            return res.json(actions)
        } catch (err) {
            return next(new Error(err))
        }
    }
}

module.exports = new HistoryController()
