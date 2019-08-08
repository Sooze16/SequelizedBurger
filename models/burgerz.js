module.exports = function(sequelize, DataTypes) {
    var Burgerz = sequelize.define("Burgerz", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    }, {
        freezeTableName: true
    });
    return Burgerz;
}