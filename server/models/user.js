var models  = require('../models');

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define('User', {
		uuid: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			unique: true
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		fullName: DataTypes.STRING,
		password: {type: DataTypes.STRING, allowNull: false}
	}, {/*
		classMethods: {
			associate: function(models) {
				User.hasMany(models.Video);
			}
		} */
	});
	return User;
};
