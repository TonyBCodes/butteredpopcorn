module.exports = function (sequelize, DataTypes) {
    var WantToWatch = sequelize.define("WantToWatch", {
        tmdbID: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    WantToWatch.associate = function (models) {
        WantToWatch.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return WantToWatch
};