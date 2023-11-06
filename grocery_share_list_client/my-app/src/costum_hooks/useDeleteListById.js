import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteListAction } from "../redux/actions/listsActions";

const statusOk = 200;
const useDeleteListById = () => {
	const dispatch = useDispatch();

	const DeleteListById = useCallback(
		(listId) => {
			if (!listId) {
				return;
			}
			return axios
				.delete(`/api/lists/${listId}`)
				.then((deleted) => {
					if (deleted.status === statusOk) {
						dispatch(deleteListAction(listId));
					}
				})
				.catch((err) => {
					console.error(err);
				});
		},
		[dispatch]
	);
	return DeleteListById;
};
export default useDeleteListById;
