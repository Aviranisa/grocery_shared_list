"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("lists", {
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
				type: Sequelize.FLOAT(0),
				defaultValue: 0,
			},
			price: {
				type: Sequelize.FLOAT(0),
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
					model: "lists",
					key: "id",
				},
				allowNull: true,
			},
			creatorId: {
				type: Sequelize.UUID,
				references: {
					model: "users",
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
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("lists");
	},
};
