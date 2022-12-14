const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/:user_id', controller.getProfileById)
Router.get('/', controller.getAllUser)
Router.post('/', controller.createProfile)
Router.put('/:user_id', controller.updateProfile)
Router.delete('/:user_id', controller.deleteProfile)

module.exports = Router
