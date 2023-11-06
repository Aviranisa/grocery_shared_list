import "./userTab.css";
import { useCallback, useEffect, useState } from "react";
import useFetchListEditorsLiteObjByIds from "../costum_hooks/useFetchListEditorsLiteObjByIds";

const UserTabComp = ({ creatorId, editorsIdsArray, adminsIdsArray }) => {
	const [isLoad, setIsLoad] = useState(false);
	const [editors, setEditors] = useState([]);
	const fetchListEditorsLiteObjByIds =
		useFetchListEditorsLiteObjByIds(editorsIdsArray);

	const createAllEditorsArray = () => {
		let allEditors = [...editors, creatorId];
		// Check and concatenate editorsIdsArray if it's not null
		if (editorsIdsArray) {
			allEditors = [...allEditors, ...editorsIdsArray];
		}
		// Check and concatenate adminsIdsArray if it's not null
		if (adminsIdsArray) {
			allEditors = [...allEditors, ...adminsIdsArray];
		}
		return allEditors;
	};

	useEffect(() => {
		setIsLoad(true);
		const allEditorsArray = createAllEditorsArray();
		fetchListEditorsLiteObjByIds(createAllEditorsArray()).then(
			(editorsArray) => {
				setEditors(editorsArray);
				setIsLoad(false);
			}
		);
	}, [creatorId, editorsIdsArray, fetchListEditorsLiteObjByIds]);

	const renderEditors = useCallback(() => {
		return editors.map((editor) => (
			<div className="liteUserElement" key={editor.id}>
				<img
					src={editor.imageUrl}
					alt="user profile"
					className="userProfilePicture"
				/>
				<span key={editor.id} className="userName">
					{editor.fullName}
				</span>
			</div>
		));
	}, [editors]);
	if (isLoad) {
		return null;
	}
	return (
		<div>
			<h4>Editors:</h4>
			{editors && !isLoad ? renderEditors() : <div>{`Img of User`}</div>}
		</div>
	);
};

export default UserTabComp;
