import db from "../grocery_list_db/models/index.js";
import { arrayToObject, createShortUrl } from "./general_services.js";

const getAllUsers = async () => {
	return await db.user.findAll({
		attributes: ["id", "fullName", "email", "emailIsConfirmed", "imageUrl"],
	});
};
const getUser = async (userId) => {
	return await db.user.findByPk(userId, {
		attributes: ["id", "fullName", "email", "emailIsConfirmed", "imageUrl"],
	});
};

const getLiteObjUserByIds = async (usersIds) => {
	const shortObjUsers = await db.user.findAll({
		where: { id: usersIds },
		attributes: ["id", "fullName", "imageUrl"],
	});
	return shortObjUsers;
};

const findUserByLoginData = async (email, password) => {
	const existingUser = await db.user.findOne({ where: { email, password } });
	return existingUser;
};

const findUserByEmail = async (email) => {
	const existingUser = await db.user.findOne({ where: { email } });
	return existingUser;
};

const addNewUser = async (user) => {
	const existingUser = await findUserByEmail(user.email);
	if (existingUser) {
		return "User exist", existingUser;
	}
	if (user.imageUrl && user.imageUrl.length >= 255) {
		user.imageUrl = await createShortUrl(user.imageUrl);
	}
	const newUser = await db.user.create(user);
	return newUser;
};

const editUser = async (userId, userObj) => {
	const user = await getUser(userId);
	return await user.update({
		userObj,
		attributes: {
			exclude: ["password"],
		},
	});
};

const deleteUser = async (userId) => {
	return await db.user.destroy({
		where: {
			id: userId,
		},
	});
};

export {
	getAllUsers,
	getUser,
	getLiteObjUserByIds,
	addNewUser,
	editUser,
	deleteUser,
	findUserByLoginData,
};
