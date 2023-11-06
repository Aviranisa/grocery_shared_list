import axios from "axios";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../redux/actions/listsActions";

const statusOk = 200;
const useEditListById = () => {
	const dispatch = useDispatch();
	const listId = useSelector((state) => state.listsReducer.currentListId);

	const EditListById = useCallback(
		(changes) => {
			debugger;
			if (!listId) {
				return;
			}
			return axios
				.put(`/api/lists/${listId}`, { changes })
				.then((updatedList) => {
					if (updatedList.status === statusOk) {
						dispatch(setList(updatedList.data));
					}
				})
				.catch((err) => {
					console.error(err);
				});
		},
		[dispatch]
	);
	return EditListById;
};
export default useEditListById;
