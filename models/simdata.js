/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('simdata', {
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
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bill_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    submitdt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    presentdt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    procdt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    procresultdt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    docname1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    docname2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hwpurl1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hwpurl2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pdfurl1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pdfurl2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    committeename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    confname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    confdt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    confresult: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pdfurl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serial: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    num: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    procresultcd: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
      timestamps: true,
      underscored: true,
    tableName: 'simdata'
  });
};
