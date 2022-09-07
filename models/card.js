'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Card.init(
    {
      cardName: DataTypes.STRING(5000),
      cardNumber: DataTypes.STRING(5000),
      suit: DataTypes.STRING(5000),
      cardImg: DataTypes.STRING(5000),
      fortuneTelling: DataTypes.STRING(5000),
      keywords: DataTypes.STRING(5000),
      light: DataTypes.STRING(5000),
      shadow: DataTypes.STRING(5000),
      questionsToAsk: DataTypes.STRING(5000)
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'cards'
    }
  )
  return Card
}
