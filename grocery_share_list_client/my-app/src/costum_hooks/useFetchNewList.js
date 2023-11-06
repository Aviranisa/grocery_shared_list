import axios from "axios";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const statusOk = 200;
const useFetchNewList = (list_name, callback) => {
	const creatorId = useSelector((state) => state.userReducer.id);

	const FetchNewList = useCallback(() => {
		if (!list_name) {
			return;
		}
		if (list_name) {
			return axios
				.post(`/api/lists/`, { name: list_name, creatorId })
				.then((newList) => {
					if (callback && newList.status === statusOk) {
						callback(newList.data);

						return newList.data;
					}
					return newList.data;
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [callback, creatorId, list_name]);
	return FetchNewList;
};
export default useFetchNewList;
