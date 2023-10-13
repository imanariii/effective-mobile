const Router = require('express')
const router = new Router()
const historyController = require('../controllers/historyController')

router.get('/:id', historyController.getAll)

module.exports = router