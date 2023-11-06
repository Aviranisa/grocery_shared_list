import ACTIONS from "../actions/actionsConstant.js";

const initState = null;

const reducer = (state = initState, action) => {
	const { type, payload } = action;
	switch (type) {
		case ACTIONS.SET_LISTS:
			return {
				...state,
				shortListDetails: payload,
			};
		case ACTIONS.SET_LIST:
			return {
				...state,
				currentListId: payload.id,
				fullListDetails: payload,
			};
		case ACTIONS.SET_CURRENT_LIST_ID:
			return {
				...state,
				currentListId: payload,
			};

		case ACTIONS.SET_CURRENT_LIST_EDITORS_LITE_OBJ:
			return {
				...state,
				fullListDetails: {
					...state.fullListDetails,
					usersData: payload,
				},
			};

		case ACTIONS.DELETE_LIST_BY_ID:
			return {
				...state,
				shortListDetails: { ...state.shortListDetails, [payload]: null },
			};
		default:
			return state;
	}
};

export default reducer;
