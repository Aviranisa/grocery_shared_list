import { addNewUser } from "./user_service.js";
import login from "./login/login_service.js";

export const signUp = async (user) => {
	const currentUser = await addNewUser(user);
	return await login(currentUser.email, currentUser.password);
};
