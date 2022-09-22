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
      Card.hasMany(models.Post, { foreignKey: 'cardId' })
      // define association here
    }
  }
  Card.init(
    {
      postId: DataTypes.INTEGER,
      cardName: DataTypes.TEXT,
      cardNumber: DataTypes.TEXT,
      suit: DataTypes.TEXT,
      cardImg: DataTypes.TEXT,
      fortuneTelling: DataTypes.ARRAY(DataTypes.TEXT),
      keywords: DataTypes.ARRAY(DataTypes.TEXT),
      light: DataTypes.ARRAY(DataTypes.TEXT),
      shadow: DataTypes.ARRAY(DataTypes.TEXT),
      questionsToAsk: DataTypes.ARRAY(DataTypes.TEXT)
    },
    {
      sequelize,
      modelName: 'Card',
      tableName: 'cards'
    }
  )
  return Card
}
