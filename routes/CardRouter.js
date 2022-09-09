const Router = require('express').Router()
const controller = require('../controllers/CardController')
// const middleware = require('../middleware')

Router.get('/:card_id', controller.getCardById)
Router.get('/', controller.getAllCards)

module.exports = Router
