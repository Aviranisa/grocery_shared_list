export const getUserInfo = (state) => {
	return state.userReducer;
};

export const getUserToken = (state) => {
	return state.userReducer.token;
};

export const getUserName = (state) => {
	return state.userReducer.Name;
};

export const getUserId = (state) => {
	return state.userReducer.id;
};

export const getListIds = (state) => {
	return state.userReducer.lists;
};

export const getIsLoggedIn = (state) => {
	return state.userReducer !== null;
};
