import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";

const useValidateUserCredentials = () => {
	const dispatch = useDispatch();
	const CheckingData = (userData) => {
		return userData && userData.id && userData.email && userData.fullName;
	};
	const ValidateUserCredentials = useCallback(
		(email, password) => {
			if (email && password) {
				axios.post("/api/login", { email, password }).then((user) => {
					if (CheckingData(user.data)) {
						dispatch(setUser(user.data));
					}
				});
			}
		},
		[dispatch]
	);

	return ValidateUserCredentials;
};

export default useValidateUserCredentials;
