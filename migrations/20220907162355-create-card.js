'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cardName: {
        type: Sequelize.STRING(5000)
      },
      cardNumber: {
        type: Sequelize.STRING(5000)
      },
      suit: {
        type: Sequelize.STRING(5000)
      },
      cardImg: {
        type: Sequelize.STRING(5000)
      },
      fortuneTelling: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      keywords: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      light: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      shadow: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      questionsToAsk: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards')
  }
}
