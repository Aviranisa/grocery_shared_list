import axios from "axios";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const statusOk = 200;
const useFetchLists = (callback) => {
	const creatorId = useSelector((state) => state.userReducer.id);

	const FetchLists = useCallback(() => {
		if (!creatorId) {
			return;
		}
		return axios
			.get(`/api/lists/LiteLists/${creatorId}`)
			.then((lists) => {
				if (callback && lists.status === statusOk) {
					callback(lists.data);

					return lists.data;
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, [callback, creatorId]);
	return FetchLists;
};
export default useFetchLists;
