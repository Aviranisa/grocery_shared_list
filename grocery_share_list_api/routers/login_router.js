import e from "express";
import login from "../services/login/login_service.js";
const router = e.Router();

router.route("/").post(async (req, res) => {
	try {
		const { email, password } = req.body;
		const userObj = await login(email, password);
		if (userObj) {
			res.cookie("webapp_token", userObj.token, { maxAge: 86400000 });
			res.status(200).send(userObj);
		} else {
			throw new Error("Email or password is incorrect");
		}
	} catch (err) {
		res.status(401).send(err.message);
	}
});
export default router;
