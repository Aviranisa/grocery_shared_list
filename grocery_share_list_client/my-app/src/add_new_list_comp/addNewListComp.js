import { useCallback, useMemo, useState } from "react";
import "./addNewListStyle.css";
import { useNavigate } from "react-router-dom";
import useFetchNewList from "../costum_hooks/useFetchNewList";
const AddNewListComp = () => {
	const [openNewListForm, setOpenNewListForm] = useState(false);
	const [newListName, setNewListName] = useState(null);
	const fetchNewLists = useFetchNewList(newListName);
	const navigate = useNavigate();

	const renderOpenFormButton = useMemo(() => {
		return (
			<button onClick={() => setOpenNewListForm(!openNewListForm)}>
				{!openNewListForm ? "+" : "-"}
			</button>
		);
	}, [openNewListForm]);

	const handleNewListButton = useCallback(() => {
		fetchNewLists().then((newList) => {
			navigate(`/lists/${newList.id}`);
		});
	}, [fetchNewLists, navigate]);

	return (
		<div>
			{renderOpenFormButton}
			{openNewListForm && (
				<div className="AddNewListFormContainer">
					<input
						className="listNameInput"
						type="text"
						placeholder="What is the planned activity?"
						onChange={(e) => setNewListName(e.target.value)}
					/>
					<button onClick={() => handleNewListButton()}>New list</button>
				</div>
			)}
		</div>
	);
};

export default AddNewListComp;
