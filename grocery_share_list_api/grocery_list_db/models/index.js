"use strict";
import fs from "fs";
import path from "path";
import Sequelize, { Model } from "sequelize";
import config from "../config/config.json" assert { type: "json" };
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const basename = path.basename(fileURLToPath(import.meta.url));
const env = process.env.NODE_ENV || "development";
const env_config = config[env];
const db = {};
let sequelize;
if (env_config.use_env_variable) {
	sequelize = new Sequelize(
		process.env[env_config.use_env_variable],
		env_config
	);
} else {
	sequelize = new Sequelize(
		env_config.database,
		env_config.username,
		env_config.password,
		env_config
	);
}
const files = fs
	.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
		);
	})
	.forEach(async (file) => {
		const filePath = new URL(`./${file}`, import.meta.url).pathname;
		const model = (await import(filePath)).default(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
