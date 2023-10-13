const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/', userController.create)
router.patch('/:id', userController.update)
router.get('/', userController.getAll)

module.exports = router