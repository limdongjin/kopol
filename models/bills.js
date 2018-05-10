/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bills', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    serial: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    main_footchair: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    yes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    no: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    whocate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    proposeday: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referday: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    period: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hwp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pdf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    footchairs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    count: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    simdate: {
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
    },
    assos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    keyword: {
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
    newkey1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newkey2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newkey3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newkey4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newkey5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    newkey6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    categoy2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category5: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
      timestamps: true,
      underscored: true,
    tableName: 'bills'
  });
};
