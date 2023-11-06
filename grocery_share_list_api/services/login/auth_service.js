import jwt from "jsonwebtoken";
import { ENV_KEYS } from "../../../envModule.js";

const sign = async (userDetails) => {
	return await jwt.sign(
		{ id: userDetails?.id, fullName: userDetails?.fullName },
		ENV_KEYS.jwt_secret,
		{
			expiresIn: 86400000,
		}
	);
};

async function verify(req, res, next) {
	try {
		const token = req.cookies.webapp_token;
		if (!token) {
			res.status(401).send("Unauthorized");
		}
		const userDetails = await jwt.verify(token, ENV_KEYS.jwt_secret);
		req.userDetails = userDetails;
		next();
	} catch (err) {
		res.status(502).send({ message: err.message });
	}
}

const decodeToken = (token) => {
	const userId = jwt.decode(token).id;
	return userId;
};
export { sign, verify, decodeToken };
