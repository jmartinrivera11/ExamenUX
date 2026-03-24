'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Note, {foreignKey: 'authorId', as: 'notes'});
    }
  }
  Author.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    stack: DataTypes.ENUM('MEAN', 'MERN', 'LAMP')
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};