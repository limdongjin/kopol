/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('footchairs', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    party: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bill_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serial: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hjname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hanjaname: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
      timestamps: true,
      underscored: true,
    tableName: 'footchairs'
  });
};
