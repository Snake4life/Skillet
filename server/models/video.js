var models = require('../models');

module.exports = function(sequelize, DataTypes) {
	var Video = sequelize.define('Video', {
		videoID: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		views: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		description: DataTypes.STRING,
		uploadTime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		classMethods: {
			associate: function(models) {
				Video.belongsTo(models.User);
			}
		}
	});
	return Video;
};
