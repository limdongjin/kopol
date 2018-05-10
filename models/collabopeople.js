/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('collabopeople', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    count: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'collabopeople'
  });
};
