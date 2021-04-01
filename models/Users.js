module.exports = (sequelize, Datatypes) => {
  return sequelize.define('users', {
    user_id: {
      type: Datatypes.STRING
      primaryKey: true,
    },
    balance: {
      type: Datatypes.INTEGER,
      defaultvalue: 0,
      allowNull: false,

    },
  }, {
    timestamps: false,
  });
};