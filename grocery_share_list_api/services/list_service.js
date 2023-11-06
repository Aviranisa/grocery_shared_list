import db from "../grocery_list_db/models/index.js";

const getAllListsByUserId = async () => {
	return await db.list.findAll();
};

const getLiteListsByCreatorId = async (creatorId) => {
	const lists = await db.list.findAll({
		where: { creatorId },
		attributes: ["id", "name", "budget", "price", "isAtive", "creatorId"],
	});
	return listArrayToObject(lists);
};

const listArrayToObject = (lists) => {
	const listsObj = {};

	lists.forEach((list) => {
		listsObj[list.id] = list;
	});
	return listsObj;
};

const getListById = async (listId) => {
	return db.list.findByPk(listId);
};

const addNewList = async (list) => {
	const existingList = await db.list.findOne({
		where: { name: list.name, creatorId: list.creatorId, isAtive: true },
	});
	if (existingList) {
		return existingList;
	}
	const newList = await db.list.create(list);
	return newList;
};

const editList = async (listId, listObj) => {
	const list = await getListById(listId);
	return await list.update(listObj);
};

const deleteList = async (listId) => {
	return await db.list.destroy({
		where: {
			id: listId,
		},
	});
};
export {
	getAllListsByUserId,
	getLiteListsByCreatorId,
	getListById,
	addNewList,
	editList,
	deleteList,
};
