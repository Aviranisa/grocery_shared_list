export const getLists = (state) => {
	return state.listsReducer?.shortListDetails;
};

export const getlistsName = (state) => {
	return state.listsReducer.Name;
};

export const getListId = (state) => {
	return state.listsReducer.id;
};

export const getListById = (state, id) => {
	return state.listsReducer.fullListDetails[id];
};
