// model export for burgers table/model
module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      // restrict burger name from being entered if it doesn't have a text value
      allowNull: false,
      // make sure the burger name is between 6 (for at least 'burger') and 140 characters
      validate: {
        len: [6, 140]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // set default value for devaured to false
      defaultValue: 0
    }
  }, {
      // disable timestamps
      timestamps: false
    }
  );
  return Burger;
};
