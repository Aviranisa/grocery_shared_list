import { DeletedAt } from "@sequelize/core/decorators-legacy";
export default (sequelize, Sequelize) => {
	const User = sequelize.define("user", {
		id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		fullName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		emailIsConfirmed: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		imageUrl: {
			allowNull: true,
			type: Sequelize.STRING,
			defaultValue: null,
		},
	});
	User.associate = function (models) {
		User.hasMany(models.budget);
	};
	return User;
};
