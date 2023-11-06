import Router from "express";
import { signUp } from "../services/signUp.js";
const signUpRouter = Router();

signUpRouter.route("/").post(async (req, res) => {
	try {
		let newUser = await signUp(req.body);
		if (!newUser) {
			throw new Error("something went wrong.");
		} else {
			if (newUser) {
				res.cookie("webapp_token", newUser.token, { maxAge: 86400000 });
				res.status(200).send(newUser);
			}
		}
	} catch (err) {
		res.status(500).send(err.message);
	}
});

export default signUpRouter;
