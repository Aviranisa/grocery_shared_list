import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setEditorLiteObj } from "../redux/actions/listsActions";

const statusOk = 200;
const useFetchListEditorsLiteObjByIds = () => {
	const dispatch = useDispatch();

	const fetchListEditorsLiteObjByIds = useCallback(
		(editorsIds) => {
			if (editorsIds) {
				return axios
					.post(`/api/users/editors`, { editorsIds })
					.then((editors) => {
						if (editors.status === statusOk) {
							dispatch(setEditorLiteObj(editors.data));

							return editors.data;
						}
						return editors.data;
					})
					.catch((err) => {
						console.error(err);
					});
			}
		},
		[dispatch]
	);
	return fetchListEditorsLiteObjByIds;
};
export default useFetchListEditorsLiteObjByIds;
