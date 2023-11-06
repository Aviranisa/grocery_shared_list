import { sign } from "./auth_service.js";
import { findUserByLoginData } from "../../services/user_service.js";

const login = async (email, password) => {
	const userDetails = await findUserByLoginData(email, password);
	if (
		userDetails &&
		userDetails.email === email &&
		userDetails.password === password
	) {
		const token = await sign(userDetails);
		return {
			token: token,
			id: userDetails.id,
			email: userDetails.email,
			fullName: userDetails.fullName,
			imageUrl: userDetails.imageUrl,
		};
	}
};
export default login;
