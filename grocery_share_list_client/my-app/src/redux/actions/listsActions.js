import ACTIONS from "./actionsConstant.js";

export const setLists = (lists) => {
	return (dispatch) => {
		dispatch({ type: ACTIONS.SET_LISTS, payload: lists });
	};
};

export const setList = (list) => {
	return (dispatch) => {
		dispatch({ type: ACTIONS.SET_LIST, payload: list });
	};
};

export const setCurrentListId = (listId) => {
	return (dispatch) => {
		dispatch({ type: ACTIONS.SET_CURRENT_LIST_ID, payload: listId });
	};
};

export const setEditorLiteObj = (editors) => {
	return (dispatch) => {
		dispatch({
			type: ACTIONS.SET_CURRENT_LIST_EDITORS_LITE_OBJ,
			payload: editors,
		});
	};
};

export const deleteListAction = (ListId) => {
	return (dispatch) => {
		dispatch({
			type: ACTIONS.DELETE_LIST_BY_ID,
			payload: ListId,
		});
	};
};
