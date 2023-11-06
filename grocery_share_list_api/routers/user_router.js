import Router from "express";
import {
	getAllUsers,
	addNewUser,
	getUser,
	editUser,
	deleteUser,
	getLiteObjUserByIds,
} from "../services/user_service.js";
import { decodeToken } from "../services/login/auth_service.js";
const userRouter = Router();

userRouter.route("/").get(async (req, res) => {
	try {
		const users = await getAllUsers();
		if (!users) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(users);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

userRouter.route("/:id").get(async (req, res) => {
	try {
		const user = await getUser(req.params.id);
		if (!user) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(user);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

userRouter.route("/token").post(async (req, res) => {
	try {
		const userId = decodeToken(req.body.userToken);
		const user = await getUser(userId);
		if (!user) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(user);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

userRouter.route("/").post(async (req, res) => {
	try {
		const newUser = await addNewUser(req.body);
		if (!newUser) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(newUser);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

userRouter.route("/editors").post(async (req, res) => {
	try {
		const liteObjUsersArray = await getLiteObjUserByIds(req.body.editorsIds);
		if (!liteObjUsersArray) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(liteObjUsersArray);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

userRouter.route("/:id").put(async (req, res) => {
	try {
		const editedUser = await editUser(req.params.id, req.body);
		if (!editedUser) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send(editedUser);
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

userRouter.route("/:id").delete(async (req, res) => {
	try {
		let userToDelete = await deleteUser(req.params.id);
		if (!userToDelete) {
			throw new Error("something went wrong.");
		} else {
			res.status(200).send("deleted!");
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});
export default userRouter;
