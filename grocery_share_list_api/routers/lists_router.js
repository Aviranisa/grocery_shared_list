import Router from "express";
import {
	getAllListsByUserId,
	getLiteListsByCreatorId,
	getListById,
	addNewList,
	editList,
	deleteList,
} from "../services/list_service.js";
const listRouter = Router();

listRouter.route("/").get(async (req, res) => {
	try {
		const lists = await getAllListsByUserId();
		if (!lists) {
			throw new Error("something went wrong.");
		}
		res.status(200).send(lists);
	} catch (err) {
		res.status(500).send(err.message);
	}
});

listRouter.route("/LiteLists/:creatorId").get(async (req, res) => {
	try {
		const lists = await getLiteListsByCreatorId(req.params.creatorId);
		if (!lists) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(lists);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

listRouter.route("/:id").get(async (req, res) => {
	try {
		const lists = await getListById(req.params.id);
		if (!lists) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(lists);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

listRouter.route("/").post(async (req, res) => {
	try {
		const newListId = await addNewList(req.body);
		if (!newListId) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(newListId);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

listRouter.route("/:id").put(async (req, res) => {
	try {
		const listToEdit = await editList(req.params.id, req.body.changes);
		if (!listToEdit) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(listToEdit);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

listRouter.route("/:id").delete(async (req, res) => {
	try {
		const listToDelete = await deleteList(req.params.id);
		if (!listToDelete) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send("deleted!");
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});
export default listRouter;
