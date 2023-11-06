import axios from "axios";
import { useCallback } from "react";

const statusOk = 200;
const useSignNewUser = () => {
	const signNewUser = useCallback(
		(email, password, fullName, imageUrl, callback) => {
			const body = { email, password, fullName, imageUrl };
			if (email && password && fullName) {
				return axios
					.post(`/api/sign_up`, body)
					.then((newUser) => {
						if (callback && newUser.status === statusOk) {
							callback(newUser.data);
							return newUser.data;
						}
					})
					.catch((err) => {
						console.error(err);
					});
			}
		},
		[]
	);
	return signNewUser;
};
export default useSignNewUser;
