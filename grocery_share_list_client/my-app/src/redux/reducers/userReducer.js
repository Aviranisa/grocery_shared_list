import ACTIONS from "../actions/actionsConstant.js";

const initState = null;

const reducer = (state = initState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTIONS.GET_USER:
			return {
				id: payload.id,
				email: payload.email,
				name: payload.fullName,
				lists: payload.Lists,
				image: payload.image,
			};

		case ACTIONS.LOG_OUT:
			return initState;

		default:
			return state;
	}
};

export default reducer;
