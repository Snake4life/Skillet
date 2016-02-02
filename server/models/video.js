var models = require('../models');

module.exports = function(sequelize, DataTypes) {
	var Video = sequelize.define('Video', {
		videoID: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
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
	}, {
		classMethods: {
			associate: function(models) {
				Video.belongsTo(models.User);
			},
			getSearchVector: function() {
				return 'VideoText';
			},

			addFullTextIndex: function() {
				var searchFields = ['title', 'description'];
				var Video = this;

				var vectorName = Video.getSearchVector();
				sequelize
					.query('ALTER TABLE "' + Video.tableName + '" ADD COLUMN "' + vectorName + '" TSVECTOR')
					.success(function() {
						return sequelize
									.query('UPDATE "' + Video.tableName + '" SET "' + vectorName + '" = to_tsvector(\'english\', ' + searchFields.join(' || \' \' || ') + ')')
									.error(console.log);
						}).success(function() {
							return sequelize
	                                .query('CREATE INDEX post_search_idx ON "' + Post.tableName + '" USING gin("' + vectorName + '");')
                               		.error(console.log);
                   		 }).success(function() {
                        	return sequelize
                                	.query('CREATE TRIGGER post_vector_update BEFORE INSERT OR UPDATE ON "' + Post.tableName + '" FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger("' + vectorName + '", \'pg_catalog.english\', ' + searchFields.join(', ') + ')')
                                	.error(console.log);
                    	}).error(console.log);
			},

			search: function(query) {
				var Video = this;
				query = sequelize.getQueryInterface().escape(query);

				return sequelize
							.query('SELECT * FROM "' + Post.tableName + '" WHERE "' + Post.getSearchVector() + '" @@ plainto_tsquery(\'english\', ' + query + ')', Post);
			}
		}
	});
	return Video;
};
