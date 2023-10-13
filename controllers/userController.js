const {User, History } = require('../models/models')
const {set} = require("express/lib/application");

class UserController {
    async create(req, res, next) {
        try {
            const {username} = req.body
            const user = await User.create({username: username})
            await History.create({action: `Был создан`, userId: user.id})
            return res.json(user)
        } catch (err) {
            return next(new Error('Такой пользователь уже существует!'))
        }
    }

    async update(req, res, next) {
        try {
            let {username} = req.body
            const {id} = req.params
            await User.update({ username },
                {
                    where: {
                        id: id,
                    },
                }
            )
            const action = await History.create({action: 'Обновили информацию', userId: id})
            return res.json(action)
        } catch (err) {
            return next(new Error(err))
        }

    }
    async getAll(req, res, next) {
        try {
            const users = await User.findAll()
            users.map(async (user) => {
                await History.create({action: 'Получили информацию', userId: user.id})
            })
            return res.json(users)
        } catch (err) {
            return next(new Error(err))
        }
    }
}

module.exports = new UserController()
