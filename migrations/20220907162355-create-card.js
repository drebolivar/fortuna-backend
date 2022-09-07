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
        type: Sequelize.STRING(5000)
      },
      keywords: {
        type: Sequelize.STRING(5000)
      },
      light: {
        type: Sequelize.STRING(5000)
      },
      shadow: {
        type: Sequelize.STRING(5000)
      },
      questionsToAsk: {
        type: Sequelize.STRING(5000)
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
