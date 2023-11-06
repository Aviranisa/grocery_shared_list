import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setList } from "../redux/actions/listsActions";

const statusOk = 200;
const useFetchListById = (id) => {
	const dispatch = useDispatch();

	const FetchList = useCallback(() => {
		if (id) {
			return axios
				.get(`/api/lists/${id}`)
				.then((list) => {
					if (list.status === statusOk) {
						dispatch(setList(list.data));
						return list.data;
					}
					return list.data;
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [dispatch, id]);
	return FetchList;
};
export default useFetchListById;
