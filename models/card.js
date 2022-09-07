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
      cardName: DataTypes.STRING,
      cardNumber: DataTypes.STRING,
      suit: DataTypes.STRING,
      cardImg: DataTypes.STRING,
      fortuneTelling: DataTypes.STRING,
      keywords: DataTypes.STRING,
      light: DataTypes.STRING,
      shadow: DataTypes.STRING,
      questionsToAsk: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'cards'
    }
  )
  return Card
}
