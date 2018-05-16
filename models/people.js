/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('people', {
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    num: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    polynm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    orignm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bthday: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hoovalsix: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    emaill: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: 'x'
    },
    secretary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    secretary2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    electionnum: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reelegbnnm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    homep: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    staff: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    shrtnm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    memtitle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    examcd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hbbycd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keyword1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keyword2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keyword3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    star: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    freepartycount: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bthplace: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hoovalseven: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
      timestamps: true,
      underscored: true,
    tableName: 'people'
  });
};
