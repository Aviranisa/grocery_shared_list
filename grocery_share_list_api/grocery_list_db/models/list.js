export default (sequelize, Sequelize) => {
	const List = sequelize.define("list", {
		id: {
			allowNull: false,
			primaryKey: true,
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		budget: {
			type: Sequelize.FLOAT,
			defaultValue: 0,
		},
		price: {
			type: Sequelize.FLOAT,
			defaultValue: 0,
		},
		productsApiKeys: {
			type: Sequelize.JSON,
			allowNull: true,
		},
		isAtive: {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		},
		isDeleted: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		parentListId: {
			type: Sequelize.UUID,
			references: {
				model: "list",
				key: "id",
			},
			allowNull: true,
		},
		creatorId: {
			type: Sequelize.UUID,
			references: {
				model: "user",
				key: "id",
			},
			allowNull: false,
		},
		adminsIds: {
			type: Sequelize.JSON,
			allowNull: true,
		},
		editorsId: {
			type: Sequelize.JSON,
			allowNull: true,
		},
	});
	List.associate = function (models) {
		List.hasMany(models.budget);
	};
	return List;
};
