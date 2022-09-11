const { User, Post, Comment, Card } = require('../models')

const getAllCards = async (req, res) => {
  try {
    let cards = await Card.findAll({})
    res.send(cards)
  } catch (error) {
    throw error
  }
}

const getCardById = async (req, res) => {
  try {
    let card = await Card.findByPk(req.params.card_id)
    res.send(card)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getCardById,
  getAllCards
}
