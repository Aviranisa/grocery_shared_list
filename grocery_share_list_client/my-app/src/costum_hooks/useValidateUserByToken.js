import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";

const useValidateUserByToken = (userToken) => {
	const dispatch = useDispatch();
	const CheckingData = (userData) => {
		return userData && userData.id && userData.email && userData.fullName;
	};

	const ValidateUserByToken = useCallback(() => {
		if (userToken) {
			axios.post("/api/users/token", { userToken }).then((user) => {
				if (CheckingData(user.data)) {
					dispatch(setUser(user.data));
				}
			});
		}
	}, [dispatch, userToken]);

	return ValidateUserByToken;
};

export default useValidateUserByToken;
