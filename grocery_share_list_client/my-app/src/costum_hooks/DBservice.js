import axios from "axios";

export const loginUser = (email, password) => {
	return axios.post("/api/login", { email, password });
};

export const getUserByToken = (userToken) => {
	return axios.post("/api/users/token", { userToken });
};
