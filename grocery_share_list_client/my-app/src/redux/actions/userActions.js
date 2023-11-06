import ACTIONS from "./actionsConstant.js";

export const setUser = (user) => {
	return (dispatch) => {
		dispatch({ type: ACTIONS.GET_USER, payload: user });
	};
};

export const logOutAction = () => {
	return (dispatch) => {
		dispatch({ type: ACTIONS.LOG_OUT });
	};
};
