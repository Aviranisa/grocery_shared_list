import "./listTabStyle.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteListById from "../costum_hooks/useDeleteListById.js";
import { setCurrentListId } from "../redux/actions/listsActions";
import { useDispatch } from "react-redux";

const ListTabComp = ({
	listId,
	list_name,
	percentage_price_from_budget,
	num_items,
}) => {
	const nav = useNavigate();
	const dispatch = useDispatch();
	const deleteListById = useDeleteListById();

	const openListPageOnClick = useCallback(() => {
		dispatch(setCurrentListId(listId));
		nav(`/lists/${listId}`);
	}, [dispatch, listId, nav]);

	const deleteListByIdonClick = (e) => {
		e.stopPropagation();
		deleteListById(listId);
	};

	if (!listId) {
		return;
	}

	return (
		<div
			key={listId}
			onClick={openListPageOnClick}
			className="listCardContainer"
		>
			<div className="listCardIcon">
				<span role="img" aria-label="Groceries">
					🛒
				</span>
			</div>
			<div className="listCardDetails">
				<div className="listCardName">{list_name}</div>
				<div className="listCardNumItems">{num_items} Items</div>
				<div className="listCardPercent">
					{percentage_price_from_budget || 0}%
				</div>
			</div>
			<button className="deleteButton" onClick={deleteListByIdonClick}>
				Delete
			</button>
		</div>
	);
};

export default ListTabComp;
