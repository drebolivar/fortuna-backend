'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: 'authorId' })
      Post.belongsTo(models.Card, { foreignKey: 'cardId' })
      Post.hasMany(models.Comment, { foreignKey: 'postId' })
      // define association here
    }
  }
  Post.init(
    {
      authorId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      cardId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'cards',
          key: 'id'
        }
      },
      report: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Post
}
